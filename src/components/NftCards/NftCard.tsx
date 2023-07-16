import Image from 'next/image'
import { useNFTBalance } from '../../pages/api/ethereum-api'
import Link from 'next/link';
import { ethQuests } from '@/data/eth';
import { dotQuests } from '@/data/dot';
import { Quests } from '@/data/generalLessons'

type NftCardProps = {
    questSectionId: string;
    questIndex: number;
}

const NftCard = ({questSectionId, questIndex}: NftCardProps) => {
    const nftBalance = useNFTBalance(questSectionId);
    const metadata = require(`../../../nft-metadata/${questSectionId}.json`)
    const src = metadata?.image
    const quest: Quests = questSectionId.indexOf('eth') > -1 ? ethQuests[questIndex] : dotQuests[questIndex];
    const chain = questSectionId.indexOf('eth') > -1 ? 'eth' : 'dot';
    const slug = quest.lessons[0].slug;
    const href = `/${chain}/${slug}`


    return (
        <Link href={href} className="nft-card">
            <Image loader={() => src} src={src} width={600 / 2} height={800 / 2} alt='nft-image' className={!nftBalance || nftBalance === 0 ? 'greyed' : '' }  />
            <h2>{metadata?.name}</h2>
        </Link>
    )

}

export default NftCard;