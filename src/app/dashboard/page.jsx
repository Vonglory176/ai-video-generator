'use client'

import React, { useState } from 'react'
import VideoCreateOption from './_components/VideoCreateOption'

const Dashboard = () => {
  const [videoList, setVideoList] = useState([])

  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold'>Dashboard</h2>

      {/* EMPTY STATE */}
      {videoList.length === 0 && <VideoCreateOption />}

    </div>
  )
}

export default Dashboard
