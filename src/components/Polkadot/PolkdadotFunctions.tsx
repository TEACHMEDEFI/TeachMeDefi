import {WsProvider, ApiPromise} from '@polkadot/api'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { ChangeEvent, useEffect, useState } from 'react';
import { PrimaryButton } from "../Buttons/Buttons";
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import BN from 'bn.js';

const NAME = "GMorDie"

const PolkdadotFunctions = () => {
    const [api, setApi] = useState<ApiPromise>();
    const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
    const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
    const [balances, setBalances] = useState<BN>();

    const setup = async () => {
        // Connect to a meme Chain
        // The ULREndpoints differ from Chain to chain!
        const wsProvider = new WsProvider('wss://ws.gm.bldnodes.org/')

        const api = await ApiPromise.create({provider: wsProvider})

        setApi(api);

    }

    const handleConnection = async () => {
        if (typeof window !== 'undefined') {
            const extensions = await web3Enable(NAME)

            if (!extensions) {
                throw Error('No extension found')
            }
    
            const allAccounts = await web3Accounts();
    
            setAccounts(allAccounts);

            

            if (allAccounts.length === 1) {
                setSelectedAccount(allAccounts[0]);
                
            }

            console.log(allAccounts)
        }
       
    }

    const handleAccountSelection = async (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedAddress = e.target.value

        const account = accounts?.find(account => account.address === selectedAddress)

        if (!account) {
            throw Error('No Account Found')
        }

        setSelectedAccount(account);


    }

    const handleBurn = async () => {
        if(!api) return
        if (!selectedAccount) return

        const injector = await web3FromAddress(selectedAccount.address);

        try {
            await api?.tx.currencies.burnFren(100000).signAndSend(selectedAccount.address, {
                signer: injector.signer
            })
        } catch (e) {
            console.log(e)
        }
        
    }

    useEffect(() => {
        setup();
    }, []);

    useEffect(() => {
        if(!api) return

        (async() => {
            // Queries
            const time = await api.query.timestamp.now()
            const period = await api.query.currencies.currentTimePeriod()
            console.log(period.toPrimitive())
            
        })()
    }, [api]);


    useEffect(() => {
        if (!selectedAccount || !api) return

        (async() => {
            // Queries
            await api.query.system.account(selectedAccount.address, ({data: {free}} : {data : {free: BN}}) => {
                setBalances(free)
            })
        })()
    }, [api, selectedAccount])


    return (
        <div className="peter-class">
           
            <PrimaryButton onClick={handleConnection}>
                Connect
            </PrimaryButton>
           

        {selectedAccount ? selectedAccount.address : null}

        {accounts && accounts.length > 0 && !selectedAccount ? (
            <>
                <select onChange={handleAccountSelection}>
                    <option>Choose Your Account</option>
                    {accounts.map((account) => <option key={account.address} value={account.address}>{account.meta.name || account.address}</option>)}
                </select>
            </>
        ) : null}

            {selectedAccount ? (
            <>
            <PrimaryButton onClick={handleBurn}>
                Burn 10 Fren
            </PrimaryButton> 

            <span>Balance: {balances?.toString()}</span>
            </>)
            
            : null}

            
        </div>

    )
}

export default PolkdadotFunctions;