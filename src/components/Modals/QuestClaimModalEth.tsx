// import { Spinner } from '@chakra-ui/react'
import Spinner from '../Spinner/Spinner';
import { useEffect } from 'react'
import { BN } from 'bn.js';
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useNFTBalance, switchNetworkIfNeeded, useConnectedToMetaMask } from '../../pages/api/ethereum-api'
import { useIsProgressNftMintable, useMintProgressNFT, } from '../scripts/claim-modals-api'


type QuestClaimModalProps = {
    questSectionId: string;
    togglePopup: Function
}

const QuestClaimModalEth = ({questSectionId, togglePopup} : QuestClaimModalProps) => {
    const [showSpinner, nftMinted, accountError, mintNft] = useMintProgressNFT(questSectionId)
    const nftBalance = useNFTBalance(questSectionId);
    const nftMintable = useIsProgressNftMintable(questSectionId, 'token', new BN(0), false);
    const isConnected = useConnectedToMetaMask();

    useEffect(() => {
        if (isConnected) {
            switchNetworkIfNeeded()
        }
    }, [nftMinted, showSpinner, nftMintable, nftBalance])


    const handleMint = () => {
        try {
            mintNft(questSectionId);
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
            <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >

                {showSpinner ? (
                    <>
                    <p>Dein NFT Ist Auf Dem Weg!</p>
                        <Spinner /> 
                    </>) : null
                }


                {!showSpinner && !nftMinted &&  nftBalance === 0 && nftMintable ? 
                    (
                        <>
                            <PrimaryButton onClick={() => handleMint()} >Minte Jetzt Dein Progress NFT</PrimaryButton>
                        </>
                    ):  null
                }

                {!showSpinner && nftMinted ? (<>
                    <h3>Super! Du hast das Progress NFT für diese Quest gemintet!</h3>
                </>): null}


                {!isConnected ? (<>Bitte Verbinde dich zunächst mit Metamask</>) : null}

                {!nftMinted && !nftMintable && isConnected ? (
                    <>
                        <h3>Das Progress NFT ist im Moment nicht Mintbar, bitte erfülle zunächst die Herausforderungen - Diese werden dir in den Videos erklärt</h3>
                    </>): null
                }

                <GeneralButton onClick={() => togglePopup({questId: questSectionId}, event)}>Schließen</GeneralButton>
            </div>
        </div>
    )
}


export default QuestClaimModalEth;
