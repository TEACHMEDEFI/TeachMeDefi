import { Spinner } from '@chakra-ui/react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useEffect, useState } from 'react'
import { useBalance } from '../../pages/api/ethereum-api'
import { useIsProgressNftMintable, useMintProgressNFT } from '../scripts/claim-modals-api'

type QuestClaimModalProps = {
    questSectionId: string;
    togglePopup: Function
}

const QuestClaimModalEth = ({questSectionId, togglePopup} : QuestClaimModalProps) => {
    const [showSpinner, nftMinted, mintNft] = useMintProgressNFT(questSectionId)
    const nftBalance = useBalance(questSectionId, 'nft');
    const nftMintable = useIsProgressNftMintable(questSectionId, 'token');

    useEffect(() => {

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
                <p>Your NFT Is On Its Way</p>
                    <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /> 
                <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
                </>) : null}


                {!showSpinner && !nftMinted &&  nftBalance === 0 && nftMintable ? 
                (
                <>
                    <p>Claim your NFT to continue</p>
                    <PrimaryButton onClick={() => handleMint()} >Minte Jetzt Dein Progress NFT</PrimaryButton>
                    <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
                </>
                ): 
                (
                    <>
                        <h3>{nftMintable ? 'Herzlichen Glückwunsch, Sie haben das Progress NFT gemintet!': 'Nicht Mintbar, bitte erfülle zunächst die Herausforderung'}</h3>
                        <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
                    </>
                )}
            </div>
        </div>
    )
}


export default QuestClaimModalEth;
