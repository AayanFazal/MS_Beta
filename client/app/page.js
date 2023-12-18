'use client'
import { Anchor, Divider, Flex, Group, List, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    const links = [
        'Hatboro Havoc 2023',
        'Brunswick Eruption 2023'
    ]

    return (
        <>
            <Flex align='center' direction='column'>
                <Text fz='xl' mt='lg'>Competitions:</Text>
                {links.map((link, index) => {
                    return (
                        <Group justify='center' mt='lg' key={index}>
                            <div>
                                <Anchor component={Link} href={link}>{link}</Anchor>
                            </div>
                            <Divider orientation='vertical' size='xs' />
                            <div>
                                <Anchor component={Link} href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/download-data/${link}`}>Download CSV Data</Anchor>
                            </div>
                        </Group>
                    )
                })}
            </Flex>
        </>
    )

    // return (
    //     <>
    //         <Flex align='center' direction='column'>
    //             <Text fz='xl' mt='lg'>Competitions:</Text>
    //             <Group justify='center' my='xl'>
    //                 <div>
    //                     <Anchor component={Link} href='/Hatboro Havoc 2023'>Hatboro Havoc 2023</Anchor>
    //                 </div>
    //                 <Divider orientation='vertical' size='xs' />
    //                 <div>
    //                     <Anchor component={Link} href='/download-data/Hatboro Havoc 2023'>Download CSV Data</Anchor>
    //                 </div>
    //             </Group>
    //             <Group justify='center'>
    //                 <div>
    //                     <Anchor component={Link} href='/Brunswick Eruption 2023'>Brunswick Eruption 2023</Anchor>
    //                 </div>
    //                 <Divider orientation='vertical' size='xs' />
    //                 <div>
    //                     <Anchor component={Link} href='/download-data/Brunswick Eruption 2023'>Download CSV Data</Anchor>
    //                 </div>
    //             </Group>
    //         </Flex>
    //     </>
    // )
}
