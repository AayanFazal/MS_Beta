'use client'
import { Anchor, Flex, List, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <Flex align='center' direction='column'>
            <Text fz='xl' my='lg'>Competitions:</Text>
            <>
                <List>
                    <List.Item><Anchor component={Link} href='/Hatboro Havoc 2023'>Hatboro Havoc 2023</Anchor></List.Item>
                </List>
            </>
        </Flex>
    )
}
