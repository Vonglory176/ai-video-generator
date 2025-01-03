import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import magicWand from '@/assets/magic-wand.png'
import videoEditing from '@/assets/video-editing.png'
import Image from 'next/image'
import Link from 'next/link'
import VideoCreateOption from './VideoCreateOption'

const CreateButton = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='w-full bg-black'>+ Create New Video</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        {/* <DialogTitle className='text-center text-2xl'>Let's create a new video</DialogTitle> */}

                        <VideoCreateOption />

                        {/* <DialogDescription> */}
                        {/* <div className='flex gap-5 items-center justify-center mt-5'>

                            <Link href={'/create-ai-video'}>
                                <div className='flex items-center justify-center gap-2 border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100 transition-all duration-300'>
                                    <Image src={magicWand} alt='magic wand' width={40} height={40} />
                                    <h2 className='text-lg font-medium'>Generate with AI</h2>
                                </div>
                            </Link>

                            <Link href={'/editor'}>
                                <div className='flex items-center justify-center gap-2 border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100 transition-all duration-300'>
                                    <Image src={videoEditing} alt='video editing' width={40} height={40} />
                                    <h2 className='text-lg font-medium'>Create Manually</h2>
                                </div>
                            </Link>
                        </div> */}
                        {/* </DialogDescription> */}
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default CreateButton
