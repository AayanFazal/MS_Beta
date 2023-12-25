'use client'
import { Center, Grid, Loader, Table, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useDidUpdate } from '@mantine/hooks'
import { notFound } from 'next/navigation'

export default function page({ params }) {
    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(true)
    const [searchError, setSearchError] = useState(undefined)

    useEffect(() => {
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
    })

    return (
        <>
            {loading && searchError == undefined && (
                <Center h={'calc(100dvh - 170px'} w={'100%'}>
                    <Loader color='red' />
                </Center>
            )}
            {searchError && (
                <Center h={'calc(100dvh - 170px'} w={'100%'}>
                    <Text fz='xl'>Not Found</Text>
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