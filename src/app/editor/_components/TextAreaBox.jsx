import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TextAreaBox = ({frame, handleInputChange}) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium'>Content</label>
            <Textarea 
                value={frame?.text}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder='Enter text here...' 
                className='bg-white w-full h-full' 
            />
        </div>
    )
}

export default TextAreaBox
