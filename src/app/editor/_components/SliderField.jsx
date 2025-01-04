import { Slider } from '@/components/ui/slider'
import React from 'react'

const SliderField = ({ label, defaultValue, handleInputChange }) => {
    return (
        <div className='mt-3 flex flex-col gap-2'>
            <label className='text-sm font-medium mb-2'>{label}</label>
            <Slider
                value={[defaultValue]}
                max={100}
                step={1}
                onValueChange={(value) => handleInputChange(value[0])}
            />
        </div>
    )
}

export default SliderField
