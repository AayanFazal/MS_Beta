import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col items-center mt-10'>
            <p><Link href='competitions/hatboro-havoc-2023'>Hatboro Havoc</Link></p>
            <p><Link href='competitions/brunswick-eruption-2023'>brunswick-eruption</Link></p>
            <p><Link href='competitions/houston-2023'>Houston</Link></p>
            <p><Link href='competitions/robbinsville-2023'>Robbinsville</Link></p>
        </div>
    )
}
