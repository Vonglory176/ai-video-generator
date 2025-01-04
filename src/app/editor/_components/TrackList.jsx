'use client'

import React, { useContext, useEffect, useState } from 'react'
import defaultFrameImage from '@/assets/footage.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { VideoFramesContext } from '@/app/_context/VideoFramesContext'

const defaultFrame = {
    image: defaultFrameImage,
    text: 'Hello World',
    textColor: 'black',
    fontSize: 20,
    duration: 2
}

const TrackList = () => {
    const [frameList, setFrameList] = useState([defaultFrame])
    const [selectedFrame, setSelectedFrame] = useState(0)
    const { videoFrames, setVideoFrames } = useContext(VideoFramesContext)

    const addNewFrame = () => {
        setFrameList(prev => [...prev, defaultFrame])
    }

    const removeFrame = (indexToRemove) => {
        setFrameList(prev => prev.filter((_, index) => index !== indexToRemove))

        // const updatedFrameList = frameList.filter((_, index) => index !== indexToRemove)
        // setSelectedFrame(Math.max(0, selectedFrame - 1))
        // setFrameList(updatedFrameList)
    }

    useEffect(() => {
        let totalDuration = 0
        frameList?.forEach(frame => {
            // totalDuration = totalDuration + frame.duration
            totalDuration += frame.duration
        })

        frameList && setVideoFrames({
            totalDuration: totalDuration,
            frameList: frameList,
            selectedFrame: selectedFrame
        })
    }, [frameList, selectedFrame])

    useEffect(() => {
        if (videoFrames && videoFrames?.frameList !== frameList) {
            setFrameList(videoFrames?.frameList)
            // setSelectedFrame(videoFrames?.selectedFrame)
        }
    }, [videoFrames])

    return (
        <div className='p-5 bg-gray-100 rounded-lg'>
            <div className='h-[75vh] overflow-scroll scrollbar-hide'>
                {frameList?.map((frame, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedFrame(index)}
                        className={`flex flex-col items-center border-b p-2 mt-3 rounded-lg cursor-pointer ${selectedFrame === index ? 'border-blue-500 bg-white' : ''}`}
                    >
                        <Image src={frame?.image} alt={index} width={40} height={40} className='w-full h-[40px] object-contain rounded-lg' />
                        <h2 className='text-xs line-clamp-2 mt-1'>{frame.text}</h2>

                        {/* Delete Icon */}
                        {selectedFrame === index && (
                            <Trash2
                                className='mt-1 h-3 w-3 text-red-500'
                                onClick={() => removeFrame(index)}
                            />
                        )}
                    </div>
                ))}

                <Button size={'sm'} className='mt-5 w-full' onClick={addNewFrame}>Add Frame</Button>
            </div>
        </div>
    )
}

export default TrackList
