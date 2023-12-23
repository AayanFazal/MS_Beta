'use client'
import { MultiSelect } from '@mantine/core'
import React, { useEffect, useState } from 'react'

export default function page() {
    const autoCompleteData = [2590, 1712, 2559] // need to write logic to retrive team names using context
    const [query, setQuery] = useState(queryInit())

    function queryInit() {
        if (localStorage.getItem('query')) return JSON.parse(localStorage.getItem('query'))
        return []
    }

    useEffect(() => {
        localStorage.setItem('query', JSON.stringify(query))
    }, [query])

    useEffect(() => console.log(query), [])

    return (
        <>
            <MultiSelect
                type='text'
                label='Search for a team'
                placeholder='Enter a team...'
                data={autoCompleteData}
                w='min(100%, 40rem)'
                mx='auto'
                onInput={e => {
                    e.target.value == '' && setQuery(e.target.value)
                }}
                onChange={values => setQuery(values)}
                defaultValue={query.map(String)}
                searchable
            />
        </>
    )
}
