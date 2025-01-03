'use client'

import { VideoFramesContext } from '@/app/_context/VideoFramesContext'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { toast } from 'sonner'

const SaveVideo = () => {

    const { videoId } = useParams()
    const { videoFrames, setVideoFrames } = useContext(VideoFramesContext)

    useEffect(() => {
        videoId && GetVideoData()
    }, [videoId])

    const saveVideo = async () => {
        const result = await axios.put('/api/video', { 
            videoId: videoId, 
            videoData: videoFrames
        })
        toast('Video saved successfully!')

        console.log(result)
    }

    const GetVideoData = async () => {
        const result = await axios.get(`/api/video?videoId=${videoId}`)
        console.log(result.data)
        setVideoFrames(result?.data?.videoData)
    }

    return (
        <div>
            <Button variant='outline' onClick={() => saveVideo()}>Save</Button>
            <Button variant='outline' onClick={() => GetVideoData()}>Get Video Data</Button>
        </div>
    )
}

export default SaveVideo
