'use client'
import { Anchor, Center, List, Loader, Table, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
    const [competitions, setCompetitions] = useState(false)

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comp`, { method: 'GET' })
            .then(res => {
                if (!res.ok) {
                    return false
                } else {
                    return res.json()
                }
            })
            .then(data => setCompetitions(data))
    }, [])

    if (competitions) {
        return (
            <>
                <Text fz='xl' mt='lg' ta='center'>FRC 2590 NEMƎSIS Master Scout</Text>
                <Table w='min(100%, 40rem)' mx='auto'>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Competition</Table.Th>
                            <Table.Th>CSV Download</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {competitions.map((competition, index) => {
                            return (
                                <Table.Tr key={index}>
                                    <Table.Th>
                                        <Anchor component={Link} href={competition.Tables_in_scoutschema.toString()}>{competition.Tables_in_scoutschema}</Anchor>
                                    </Table.Th>
                                    <Table.Th>
                                        <Anchor component={Link} href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/download-data/${competition.Tables_in_scoutschema}`}>Download CSV Data</Anchor>
                                    </Table.Th>
                                </Table.Tr>
                            )
                        })}
                    </Table.Tbody>
                </Table>
            </>
        )
    }

    return (
        <Center h={'100vh'} w={'100vw'}>
            <Loader color='red' />
        </Center>
    )
}