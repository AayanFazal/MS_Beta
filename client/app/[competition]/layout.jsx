'use client'
import { AppShell, Burger, Divider, Flex, NavLink, Text } from '@mantine/core'
import { useDidUpdate, useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'

export const AllTeamsNumsContext = createContext()

export default function layout({ children, params }) {
    const [opened, { toggle }] = useDisclosure();
    const path = usePathname()
    const competition = decodeURI(params.competition)
    const [allTeamNums, setAllTeamNums] = useState()

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${competition}/all/teams`, { method: 'GET' })
            .then(res => {
                if (!res.ok) {
                    return false
                } else {
                    return res.json()
                }
            })
            .then(data => {
                let teamNums = []
                data.map(({ teamNum }) => {
                    teamNums.push(teamNum)
                })
                setAllTeamNums(teamNums)
            })
    }, [])

    return (
        <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened }, }} padding="md" >

            <AppShell.Header>
                <Flex justify={{ base: 'space-around', sm: 'center' }} align='center' h='100%' mx={{ base: 'none', sm: 'none' }} direction={{ base: 'row-reverse' }}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
                    <Text><Link href='/'>FRC 2590 NEMƎSIS Master Scout</Link></Text>
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Text fz='xl' ta='center'>{competition}</Text>
                <Divider my='sm' />
                <NavLink href={`/${params.competition}/compare`} leftSection={<p>Compare</p>} color='red' active={path == `/${params.competition}/compare`} />
                <NavLink href={`/${params.competition}/team`} leftSection={<p>Team</p>} color='red' active={path.includes('team')} />
                <NavLink href={`${process.env.NEXT_PUBLIC_BACKEND_URL} /download-data/${competition}`} leftSection={<p>Download Data</p>} color='red' />
            </AppShell.Navbar>


            <AppShell.Main>
                <AllTeamsNumsContext.Provider value={allTeamNums}>
                    {children}
                </AllTeamsNumsContext.Provider>
            </AppShell.Main>

        </AppShell >
    )
}
