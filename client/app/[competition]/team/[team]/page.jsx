'use client'
import { Center, Grid, Loader, Table } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useDidUpdate } from '@mantine/hooks'
import { notFound } from 'next/navigation'

export default function page({ params }) {
    const [teamData, setTeamData] = useState(false)

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${params.competition}/${params.team}`)
            .then(res => {
                if (!res.ok) {
                    return false
                } else {
                    return res.json()
                }
            })
            .then(data => setTeamData(data))
    })

    useDidUpdate(() => {
        if (teamData == false) {
            notFound()
        }
    }, [teamData])

    if (teamData) {
        return (
            <div>
                {JSON.stringify(teamData)}
            </div>
        )
    }

    return (
        <Center h={'calc(100dvh - 100px'} w={'100%'}>
            <Loader color='red' />
        </Center>
    )
}
