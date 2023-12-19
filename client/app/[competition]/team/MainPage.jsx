'use client'
import { Autocomplete } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import React, { useContext, useState } from 'react'
import { AllTeamsDataContext } from '../layout'

export default function MainPage({ autoCompleteData }) {
    const allTeamsData = useContext(AllTeamsDataContext)
    const [query, setQuery] = useLocalStorage({ key: 'data', defaultValue: 'loading...' })

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
