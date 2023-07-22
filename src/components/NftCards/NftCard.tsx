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

const NftCard = ({ questSectionId, questIndex }: NftCardProps) => {
  const nftBalance = useNFTBalance(questSectionId);
  const metadata = require(`../../../nft-metadata/${questSectionId}.json`)
  const src = metadata?.image
  const quest: Quests = questSectionId.indexOf('eth') > -1 ? ethQuests[questIndex] : dotQuests[questIndex];
  const chain = questSectionId.indexOf('eth') > -1 ? 'eth' : 'dot';
  const slug = quest.lessons[0].slug;
  const href = `/${chain}/${slug}`

  const removeWord = (sentence : string) => {
    // Use the replace method with a regular expression to remove the word case-insensitively
    const modifiedSentence = sentence.replace(/TEACHMEDEFI/gi, '');
    return modifiedSentence;
  }

  return (
    <Link href={href} className="nft-card">
      <div className='w-44 h-44 mx-auto rounded-2xl mb-2 overflow-hidden' >
        <Image loader={() => src} src={src} width={600 / 2} height={800 / 2} alt='nft-image' className={!nftBalance || nftBalance === 0 ? 'greyed' : ''} />
      </div>
      <h2 className='font-semibold' >{removeWord(metadata?.name)}</h2>
    </Link>
  )

}

export default NftCard;