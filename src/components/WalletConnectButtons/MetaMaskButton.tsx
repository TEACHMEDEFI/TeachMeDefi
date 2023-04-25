import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { injected } from '../../utils/connectors'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { formatAddress } from '../../utils/helpers'
import Image from 'next/image'

const MetaMaskButton = ({ toggleConnectWalletBtn }: any) => {

  const { account, activate, deactivate, setError, active } = useWeb3React<Web3Provider>()

  const onClickConnect = () => {
    activate(injected, (error) => {
      if (error instanceof UserRejectedRequestError) {
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
      <button
        type="button"
        className="bg-bgDarkGray rounded-md h-20 w-full px-5  flex justify-between items-center"
        onClick={onClickConnect}>
        <Image src={"/icons/metamask-fox.svg"} width={60} height={60} alt='MetaMask Wallet Brand' />
        <p>Connect <br /> MetaMask</p>
      </button>
      {/* {active && typeof account === 'string' ? (
        <button className="bg-bgDarkGray rounded-md h-20 w-full px-5 flex justify-between items-center"
          onClick={onClickDisconnect}
        >
          <Image src={"/icons/metamask-fox.svg"} width={60} height={60} alt='MetaMask Wallet Brand' />
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
          <Image src={"/icons/metamask-fox.svg"} width={60} height={60} alt='MetaMask Wallet Brand' />
          <p>Connect <br /> MetaMask</p>
        </button>
      )} */}
    </div>
  )
}

export default MetaMaskButton