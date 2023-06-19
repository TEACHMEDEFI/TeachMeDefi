import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { talisman } from '../../utils/connectors'
import { UserRejectedRequestError as UserRejectedRequestErrorTalisman } from "../../utils/TalismanConnector";
import { formatAddress } from '../../utils/helpers'
import Image from 'next/image'

const TalismanButton = ({ toggleConnectWalletBtn }: any) => {

  const { account, activate, deactivate, setError, active, connector } = useWeb3React<Web3Provider>()

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

  const setConnectedLocalStorage = () => {
    const connectedData = {
      talisman: true,
      metamask: false
    };

    const connectedDataString = JSON.stringify(connectedData);
    localStorage.setItem('hasConnected', connectedDataString);
  }

  useEffect(() => {
    const hasConnected = localStorage.getItem('hasConnected');
    const localstorage = hasConnected && JSON.parse(hasConnected)
    if (localstorage?.talisman) {
      onClickConnect();
    }

  }, [active, account])


  return (
    <div>
      <button
        type="button"
        className="bg-gray-100 dark:bg-bgDarkGray rounded-md h-20 w-full px-5  flex justify-between items-center">
        <Image src={"/icons/talisman-red.svg"} width={60} height={60} alt='Talisman Wallet Brand' />
        <p>Connect <br /> Talisman</p>
      </button>
      {/* {active && typeof account === 'string' ? (
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
      )} */}
    </div>
  )
}

export default TalismanButton