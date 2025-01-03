import React from 'react'
import Header from '../../dashboard/_components/Header'
import { Button } from '@/components/ui/button'
import TrackList from '../_components/TrackList'
import RemotionPlayer from '../_components/RemotionPlayer'
import SaveVideo from '../_components/SaveVideo'
import FrameConfig from '../_components/FrameConfig'

const Editor = () => {
    return (
        <div>
            <Header />
            <div className='p-10 md:px-24 lg:px-32'>

                <div className='flex items-center justify-between'>

                    <h2 className='text-2xl font-bold'>Edit Video</h2>

                    <div className='flex gap-5'>
                        <SaveVideo />
                        <Button>Export</Button>
                    </div>

                </div>

                <div className='grid grid-cols-6 gap-7 mt-7'>

                    <div>
                        <TrackList />
                    </div>

                    <div className='col-span-3'>
                        <RemotionPlayer />
                    </div>

                    <div className='col-span-2'>
                        <FrameConfig />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Editor
