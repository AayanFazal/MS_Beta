import { MultiSelect } from '@mantine/core'
import React from 'react'

export default function page() {
    const autoCompleteData = [2590, 1712, 2559] // need to write logic to retrive team names using context

    return (
        <>
            <MultiSelect
                type='text'
                label='Search for a team'
                placeholder='Enter a team...'
                data={autoCompleteData}
                w='50%'
                mx='auto'
            // onOptionSubmit={value => setQuery(value)}
            />
        </>
    )
}
