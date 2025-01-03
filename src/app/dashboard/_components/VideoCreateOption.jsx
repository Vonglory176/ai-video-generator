import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import magicWand from '@/assets/magic-wand.png'
import videoEditing from '@/assets/video-editing.png'
import uuid4 from 'uuid4'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const VideoCreateOption = () => {

    const { user } = useUser()
    const router = useRouter()

    const CreateNewScratchVideo = async () => {
        const videoId = uuid4()

        const result = await axios.post('/api/video', {
            videoId: videoId,
            userEmail: user?.primaryEmailAddress?.emailAddress
        })
        console.log(result)
        router.push(`/editor/` + videoId)
    }

    return (
        <div className='p-8 rounded-lg border mt-10'>
            <h2 className='font-bold text-2xl text-center'>Let's create your first video</h2>

            <div className='flex gap-5 items-center justify-center mt-5'>

                <Link href={'/create-ai-video'}>
                    <div className='flex items-center justify-center gap-2 border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100 transition-all duration-300'>
                        <Image src={magicWand} alt='magic wand' width={40} height={40} />
                        <h2 className='text-lg font-medium'>Generate with AI</h2>
                    </div>
                </Link>

                <div onClick={CreateNewScratchVideo}>
                    <div className='flex items-center justify-center gap-2 border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100 transition-all duration-300'>
                        <Image src={videoEditing} alt='video editing' width={40} height={40} />
                        <h2 className='text-lg font-medium'>Create Manually</h2>
                    </div>
                </div>

                {/* <Link href={'/editor'}>
                    <div className='flex items-center justify-center gap-2 border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100 transition-all duration-300'>
                        <Image src={videoEditing} alt='video editing' width={40} height={40} />
                        <h2 className='text-lg font-medium'>Create Manually</h2>
                    </div>
                </Link> */}

            </div>

        </div>
    )
}

export default VideoCreateOption
