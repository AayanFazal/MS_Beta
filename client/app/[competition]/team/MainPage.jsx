'use client'
import { Autocomplete } from '@mantine/core'
import { useDidUpdate, useLocalStorage } from '@mantine/hooks'
import React, { useContext, useEffect, useState } from 'react'
import { AllTeamsDataContext } from '../layout'
import { redirect } from 'next/navigation'

export default function MainPage({ autoCompleteData, params }) {
    const allTeamsData = useContext(AllTeamsDataContext)
    const [query, setQuery] = useLocalStorage({ key: 'data', defaultValue: 'loading...' })

    useDidUpdate(() => {
        redirect(`./team/${query}`)
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
            <p>{query}</p>
        </div>
    )
}
