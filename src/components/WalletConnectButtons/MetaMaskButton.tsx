import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { injected } from '../../utils/connectors'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { formatAddress } from '../../utils/helpers'

const MetaMaskButton = ({toggleConnectWalletBtn}:any) => {

  const { chainId, account, activate, deactivate, setError, active, library, connector } = useWeb3React<Web3Provider>()

  const onClickConnect = () => {
    activate(injected, (error) => {
      if (error instanceof UserRejectedRequestError) {
        // ignore user rejected error
        console.log("user refused")
      } else {
        setError(error)
      }
    }, false)
    toggleConnectWalletBtn(false)
  }

  const onClickDisconnect = () => {
    deactivate()
  }

  useEffect(() => {
    // console.log(chainId, account, active, library, connector)
  })

  return (
    <div>
      {active && typeof account === 'string' ? (
        <div>
          <button type="button" onClick={onClickDisconnect}>
            Account: {formatAddress(account, 4)}
          </button>
          <p >ChainID: {chainId} connected</p>
        </div>
      ) : (
        <div>
          <button type="button" onClick={onClickConnect}>
            Connect MetaMask
          </button>
          <p > not connected </p>
        </div>
      )}
    </div>
  )
}

export default MetaMaskButton