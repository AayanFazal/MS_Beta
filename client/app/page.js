'use client'
import { Anchor, Center, Divider, Flex, Group, List, Loader } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
    const [competitions, setCompetitions] = useState(false)

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/comp`)
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
                <Flex align='center' direction='column'>
                    <Text fz='xl' mt='lg'>Competitions:</Text>
                    {competitions.map(({ Tables_in_scoutschema }) => {
                        return (
                            <Group justify='center' mt='lg' key={index}>
                                <div>
                                    <Anchor component={Link} href={Tables_in_scoutschema}>{Tables_in_scoutschema}</Anchor>
                                </div>
                                <Divider orientation='vertical' size='xs' />
                                <div>
                                    <Anchor component={Link} href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/download-data/${Tables_in_scoutschema}`}>Download CSV Data</Anchor>
                                </div>
                            </Group>
                        )
                    })}
                </Flex>
            </>
        )
    }
    return (
        <Center h={'100vh'} w={'100vw'}>
            <Loader color='red' />
        </Center>
    )
}
