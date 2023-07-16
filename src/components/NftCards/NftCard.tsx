import Image from 'next/image'
import { useNFTBalance } from '../../pages/api/ethereum-api'

type NftCardProps = {
    questSectionId: string
}

const NftCard = ({questSectionId}: NftCardProps) => {
    const nftBalance = useNFTBalance(questSectionId);
    const metadata = require(`../../../nft-metadata/${questSectionId}.json`)
    const src = metadata?.image
    // console.log(questSectionId, metadata)


    if (!nftBalance || nftBalance === 0) {
        return (<></>)
    }

    return (
        <div className="nft-card">
            <Image loader={() => src} src={src} width={600 / 2} height={800 / 2} alt='nft-image'  />
            <h2>{metadata?.name}</h2>
        </div>
    )

}

export default NftCard;