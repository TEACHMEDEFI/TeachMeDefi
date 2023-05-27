import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { faqData } from '@/data/faqData'

export default function FAQ() {
  return (
    <section id='faq' className='mt-44 mb-20 flex flex-col items-center ' >
      <div className='w-full max-w-2xl py-10'>
        <h3 className='text-4xl font-bold mb-8' >FAQs</h3>
        <Accordion allowToggle className='border-y-2' >
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
    </section>
  )
}