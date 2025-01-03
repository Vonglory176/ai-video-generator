'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { Player } from '@remotion/player'
// import { MyComposition } from '@/remotion/Composition'
import RemotionComposition from './RemotionComposition'
import { Fullscreen } from 'lucide-react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { VideoFramesContext } from '@/app/_context/VideoFramesContext'


const RemotionPlayer = () => {
    const { videoFrames } = useContext(VideoFramesContext)
    const [aspectRatio, setAspectRatio] = useState({
        width: 500,
        height: 300
    })
    const playerRef = useRef(null)

    useEffect(() => {
        if (videoFrames?.selectedFrame) {
            let skipDuration = 0
            for (let i = 0; i < videoFrames?.selectedFrame; i++) {
                skipDuration += videoFrames?.frameList[i].duration
            }
            playerRef?.current?.seekTo(skipDuration * 30)
        }
    }, [videoFrames?.selectedFrame])

    return (
        <div>
            <div className='flex items-center justify-center'>
                {videoFrames?.totalDuration &&
                    <Player
                        ref={playerRef}
                        component={RemotionComposition}
                        durationInFrames={Number(videoFrames?.totalDuration * 30)}
                        compositionWidth={aspectRatio.width}
                        compositionHeight={aspectRatio.height}
                        fps={30}
                        controls

                        style={{
                            borderRadius: 6,
                            width: '100%',
                            // height: 300
                            maxHeight: 500,
                            maxWidth: 500
                        }}

                        inputProps={{
                            frameList: videoFrames?.frameList
                        }}
                    />}
            </div>

            <div className='mt-5 flex gap-2 items-center px-10'>
                <Fullscreen />

                <Select onValueChange={(value) => setAspectRatio(JSON.parse(value))}>
                    <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='16:9' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={JSON.stringify({ width: 500, height: 300 })}>16:9</SelectItem>
                        <SelectItem value={JSON.stringify({ width: 300, height: 500 })}>9:16</SelectItem>
                        <SelectItem value={JSON.stringify({ width: 400, height: 400 })}>1:1</SelectItem>
                        {/* <SelectItem value='4:3'>4:3</SelectItem> */}
                        {/* <SelectItem value='3:4'>3:4</SelectItem> */}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default RemotionPlayer
