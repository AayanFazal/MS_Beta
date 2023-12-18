'use client'
import { Autocomplete } from '@mantine/core'
import React, { useState } from 'react'
import classes from './searchStyles.module.css'

export default function MainPage({ autoCompleteData }) {
    const [query, setQuery] = useState()

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
                classNames={{ input: classes.input, option: classes.option, label: classes.label }}
            />
            <p>{query}</p>
        </div>
    )
}
