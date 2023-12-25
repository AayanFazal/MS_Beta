import { Center, Loader } from '@mantine/core'
import React from 'react'

export default function loading() {
    return (
        <Center h='100vh' w='100vw'>
            <Loader color='red' />
        </Center>
    )
}
