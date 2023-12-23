'use client'
import { Autocomplete, Grid, Table } from '@mantine/core'
import { useDidUpdate, useLocalStorage } from '@mantine/hooks'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AllTeamsDataContext } from '../layout'
import { useRouter } from 'next/navigation'

export default function layout({ params, children }) {
    const autoCompleteData = [1712, 2590, 2559]
    const allTeamsData = useContext(AllTeamsDataContext)
    const [query, setQuery] = useLocalStorage({ key: 'query', defaultValue: '' })
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
                w='min(100%, 40rem)'
                mx='auto'
                onOptionSubmit={value => setQuery(value)}
                onInput={e => {
                    e.target.value == '' && setQuery(e.target.value)
                }}
            />
            {children}
        </div>
    )
}
