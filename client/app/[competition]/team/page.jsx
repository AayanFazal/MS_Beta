'use client'
import { Autocomplete, Grid, Table } from '@mantine/core'
import { useDidUpdate } from '@mantine/hooks'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AllTeamsDataContext } from '../layout'
import { useRouter } from 'next/navigation'

export default function MainPage({ params }) {
    const allTeamsData = useContext(AllTeamsDataContext)
    const [query, setQuery] = useState()
    const autoCompleteData = [1712, 2590, 2559]
    const router = useRouter()

    useDidUpdate(() => {
        router.push(`/${params.competition}/team/${query}`)
    }, [query])

    return (
        <div>
            <Autocomplete
                type='text'
                label='Search for a team'
                placeholder='Enter a team...'
                data={autoCompleteData}
                w='50%'
                mx='auto'
                onOptionSubmit={value => setQuery(value)}
            />
        </div>
    )
}
