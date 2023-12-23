import { MultiSelect } from '@mantine/core'
import React, { useState } from 'react'

export default function page() {
    const autoCompleteData = [2590, 1712, 2559] // need to write logic to retrive team names using context
    const [query, setQuery] = useState()

    return (
        <>
            <MultiSelect
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
        </>
    )
}
