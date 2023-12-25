'use client'
import { Center, Loader, MultiSelect, Table, Text } from '@mantine/core'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AllTeamsNumsContext } from '../layout'

export default function page({ params }) {
    const autoCompleteData = useContext(AllTeamsNumsContext)
    const [query, setQuery] = useState(queryInit())
    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(undefined)
    const [searchError, setSearchError] = useState(undefined)

    function queryInit() {
        if (localStorage.getItem('compareQuery')) return JSON.parse(localStorage.getItem('compareQuery'))
        return []
    }

    useEffect(() => {
        localStorage.setItem('compareQuery', JSON.stringify(query))
        if (query.length < 3) setLoading(undefined)
        if (query.length == 3) {
            console.log(query.length)
            setLoading(true)
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${params.competition}/${params.team}`, { method: 'GET' })
                .then(res => {
                    if (!res.ok) {
                        return 'Not Found'
                    } else {
                        return res.json()
                    }
                })
                .then(data => {
                    setData(data)
                    setLoading(false)
                })
                .catch(error => setSearchError(true))
        }
    }, [query])

    return (
        <>
            <MultiSelect
                type='text'
                label='Search for a team'
                placeholder={query.length < 3 ? 'Enter 3 teams...' : ''}
                data={autoCompleteData}
                w='min(100%, 40rem)'
                mx='auto'
                onInput={e => {
                    e.target.value == '' && setQuery(e.target.value) && setData(false)
                }}
                onChange={values => setQuery(values)}
                defaultValue={query ? query.map(String) : undefined}
                searchable
                maxValues={3}
            />
            {searchError && query.length == 3 && (
                <Center h={'calc(100dvh - 170px'} w={'100%'}>
                    <Text fz='xl'>Not Found</Text>
                </Center>
            )}
            {loading && searchError == undefined && (
                <Center h={'calc(100dvh - 170px'} w={'100%'}>
                    <Loader color='red' />
                </Center>
            )}
            {loading == false && (
                <Table mt='md'>
                    <Table.Thead>
                        {Object.keys(data[0]).map((key, index) => {
                            return (
                                <Table.Th key={index}>{key}</Table.Th>
                            )
                        })}
                    </Table.Thead>
                    <Table.Tbody>
                        {data.map((info, index) => {
                            return (
                                <Table.Tr key={index}>
                                    {Object.values(info).map((value, index) => {
                                        return (
                                            <Table.Td key={index}>{value}</Table.Td>
                                        )
                                    })}
                                </Table.Tr>
                            )
                        })}
                    </Table.Tbody>
                </Table>
            )}
        </>
    )
}