"use client"

import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { UserDetailsContext } from './_context/UserDetailsContext'
import { VideoFramesContext } from './_context/VideoFramesContext'

const Provider = ({ children }) => {

    const { user } = useUser()
    const [userDetails, setUserDetails] = useState([])
    const [videoFrames, setVideoFrames] = useState([])

    useEffect(() => {
        user && saveUserInfo()
    }, [user])

    const saveUserInfo = async () => {
        const result = await axios.post('/api/user', {
            user: user
        })

        setUserDetails(result?.data)
        console.log(result.data)
    }

    return (
        <div>
            <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
                <VideoFramesContext.Provider value={{ videoFrames, setVideoFrames }}>
                    {children}
                </VideoFramesContext.Provider>
            </UserDetailsContext.Provider>
        </div>
    )
}

export default Provider
