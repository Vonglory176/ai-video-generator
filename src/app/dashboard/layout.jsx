import React from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'

function DashboardLayout({ children }) {
    return (
        <div>
            <div className='hidden md:flex md:w-64'>
                <Sidebar />
            </div>
            <div className='md:ml-64'>
                <Header />

                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
