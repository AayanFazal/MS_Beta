'use client'
import { AppShell, Burger, Divider, Flex, NavLink, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import React from 'react'

export default function layout({ children, params }) {
    const [opened, { toggle }] = useDisclosure();
    const path = usePathname()
    const competition = decodeURI(params.competition)

    return (
        <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened }, }} padding="md">

            <AppShell.Header>
                <Flex justify={{ base: 'flex-start', sm: 'center' }} align='center' h='100%' mx={{ base: 'md', sm: 'none' }}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
                    <Text ml={{ base: 'sm', sm: 'none' }}><Link href='/'>FRC 2590 NEMƎSIS Master Scout</Link></Text>
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Text fz='xl' ta='center'>{competition}</Text>
                <Divider my='sm' />
                <NavLink href={`/${params.competition}`} leftSection={<p>General Data</p>} color='red' active={!path.includes('picklist') && !path.includes('compare') && !path.includes('team')} />
                <NavLink href={`/${params.competition}/picklist`} leftSection={<p>Pick List</p>} color='red' active={path.includes('picklist')} />
                <NavLink href={`/${params.competition}/compare`} leftSection={<p>Compare</p>} color='red' active={path.includes('compare')} />
                <NavLink href={`/${params.competition}/team`} leftSection={<p>Team</p>} color='red' active={path.includes('team')} />
                <NavLink href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/download-data/${competition}`} leftSection={<p>Download Data</p>} color='red' />
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>

        </AppShell >
    )
}
