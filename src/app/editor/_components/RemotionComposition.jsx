import React from 'react'
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion'

const RemotionComposition = ({ frameList }) => {

    let trackFrame = 0
    const { width, height } = useVideoConfig()

    return (
        <div>
            <AbsoluteFill style={{ backgroundColor: 'black' }}>
                {frameList.map((frame, index) => {

                    const fromFrame = index === 0 ? 0 : trackFrame // frameList[index - 1].duration * 30
                    trackFrame += frame.duration * 30
                    const duration = frame.duration * 30

                    return (
                        <Sequence key={index} from={fromFrame} durationInFrames={duration}>

                            <AbsoluteFill style={{ transform: `translateX(${width/2-50}px) translateY(${height/2-10}px)` }}>
                                <h2 style={{ color: 'white', fontSize: `${frame?.fontSize}px` }}>{frame.text}</h2>
                            </AbsoluteFill>

                        </Sequence>
                    )
                })}
            </AbsoluteFill>
        </div>
    )
}

export default RemotionComposition
