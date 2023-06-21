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
    <section id='faq' className='mt-44 pb-20 flex flex-col items-center ' >
      <div className='w-full max-w-5xl py-10 flex gap-20'>
        <div>
          <h3 className='text-4xl font-bold mb-4' >FAQs</h3>
          <p className='text-2xl'>Häufig gestellte Fragen</p>
        </div>
        <Accordion allowToggle className='border-y-2 w-full' >
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