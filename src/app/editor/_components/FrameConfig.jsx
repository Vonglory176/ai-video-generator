import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { LetterText } from 'lucide-react'
import TextAreaBox from './TextAreaBox'

const FrameConfig = () => {
    return (
        <div className='p-3 bg-gray-100 rounded-lg'>
            <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                    <AccordionTrigger>
                        <span className='flex gap-2 text-lg items-center'><LetterText/> Text</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <TextAreaBox />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default FrameConfig
