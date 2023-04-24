import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { talisman } from '../../utils/connectors'
import { UserRejectedRequestError as UserRejectedRequestErrorTalisman } from "../../utils/TalismanConnector";
import { formatAddress } from '../../utils/helpers'
import Image from 'next/image'

const TalismanButton = ({ toggleConnectWalletBtn }: any) => {

  const { account, activate, deactivate, setError, active, connector } = useWeb3React<Web3Provider>()
  console.log(connector)

  const onClickConnect = () => {
    activate(talisman, (error) => {
      if (error instanceof UserRejectedRequestErrorTalisman) {
        // ignore user rejected error
        console.log("user refused")
      } else {
        setError(error)
      }
    }, false)
    setConnectedLocalStorage()
    toggleConnectWalletBtn(false)
  }

  const onClickDisconnect = () => {
    deactivate()
    localStorage.removeItem('hasConnected');
  }
  const setConnectedLocalStorage = () => {
    localStorage.setItem('hasConnected', 'true');
  }

  useEffect(() => {
    const hasConnected = localStorage.getItem('hasConnected');
    if (hasConnected) {
      // console.log("Already connected with account: ", account);
      onClickConnect();
    }
    // console.log("öfet")
  }, [active, account])


  return (
    <div>
      {active && typeof account === 'string' ? (
        <button className="bg-bgDarkGray rounded-md h-20 w-full px-5 flex justify-between items-center"
          onClick={onClickDisconnect}
        >
          <Image src={"/icons/talisman-red.svg"} width={60} height={60} alt='Talisman Wallet Brand' />
          <p>
            {formatAddress(account, 4)}
            <br />
            Disconnect
          </p>
        </button>
      ) : (
        <button
          type="button"
          className="bg-bgDarkGray rounded-md h-20 w-full px-5  flex justify-between items-center"
          onClick={onClickConnect}>
          <Image src={"/icons/talisman-red.svg"} width={60} height={60} alt='Talisman Wallet Brand' />
          <p>Connect <br /> Talisman</p>
        </button>
      )}
    </div>
  )
}

export default TalismanButton