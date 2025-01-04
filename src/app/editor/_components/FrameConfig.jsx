'use client'

import React, { useContext, useEffect, useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { LetterText } from 'lucide-react'
import TextAreaBox from './TextAreaBox'
import { VideoFramesContext } from '@/app/_context/VideoFramesContext'
import SliderField from './SliderField'

const FrameConfig = () => {

    const { videoFrames, setVideoFrames } = useContext(VideoFramesContext)
    const [frame, setFrame] = useState([])

    useEffect(() => {
        if (videoFrames?.frameList) {
            setFrame(videoFrames?.frameList[videoFrames?.selectedFrame])
            // console.log(videoFrames?.frameList[videoFrames?.selectedFrame])
        }
    }, [videoFrames])

    const handleInputChange = (field, value) => {
        setFrame(prev => ({ [field]: value }))
    }

    useEffect(() => {
        if (videoFrames?.frameList?.length > 0 && frame) {

            const frameList = videoFrames?.frameList

            frameList[videoFrames?.selectedFrame] = frame
            // frame.text != frameList[videoFrames?.selectedFrame].text && 
            setVideoFrames(prev => ({ ...prev, frameList: frameList }))
        }
    }, [frame])

    return (
        <div className='p-3 bg-gray-100 rounded-lg'>
            <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                    <AccordionTrigger>
                        <span className='flex gap-2 text-lg items-center'><LetterText /> Text</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <TextAreaBox
                            frame={frame}
                            handleInputChange={(value) => handleInputChange('text', value)}
                        />
                        <SliderField
                            label={'Font Size'}
                            defaultValue={frame?.fontSize}
                            handleInputChange={(value) => handleInputChange('fontSize', value)}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default FrameConfig
