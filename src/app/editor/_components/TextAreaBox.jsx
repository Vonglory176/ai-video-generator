import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TextAreaBox = () => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium'>Content</label>
            <Textarea placeholder='Enter text here...' className='bg-white w-full h-full' />
        </div>
    )
}

export default TextAreaBox
