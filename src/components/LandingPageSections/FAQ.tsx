import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import Image from 'next/image'
import { faqData } from '@/data/faqData'

export default function FAQ() {
  return (
    <section id='faq' className='mt-24 lg:mt-44 pb-20 flex justify-center items-center px-5' >
      <div className='w-full max-w-[1240px] py-10 flex flex-col md:flex-row gap-10 z-10'>
        <div>
          <h3 className='text-4xl font-bold mb-4' >FAQs</h3>
          <p className='text-2xl'>Häufig gestellte Fragen</p>
        </div>
        <Accordion allowToggle className='border-y-2 w-full backdrop-blur-xl' >
          {faqData && faqData.map(faqElement => (
            <AccordionItem className="border-y-2 py-4" key={faqElement.id} >
              <h2 className='font-bold' >
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    {faqElement.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {faqElement.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="absolute max-md:hidden -left-10 2xl:-left-44 bottom-0 w-[600px] h-[366px]">
        <Image src={"/home/inBackground/sharding.png"} fill alt="ethereum picknick" />
      </div>
    </section>
  )
}