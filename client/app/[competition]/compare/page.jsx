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
            {loading == false && searchError == undefined && (
                <Table mt='md'>
                    <Table.Thead>
                        {/* {Object.keys(data[0]).map((key, index) => {
                            return (
                                <Table.Th key={index}>{key}</Table.Th>
                            )
                        })} */}
                        {Object.keys({
                            "id": 1,
                            "matchNum": "1",
                            "teamNum": "2607",
                            "comment": "Got cone stuck in bed pan and played defense the rest of the match",
                            "scoutName": "Achyut",
                            "startingPos": "C",
                            "leaveCommunity": "1",
                            "coneHigh_atn": "1",
                            "coneMid_atn": "0",
                            "coneLow_atn": 0,
                            "coneMissed_atn": 0,
                            "cubeHigh_atn": 0,
                            "cubeMid_atn": 0,
                            "cubeLow_atn": 0,
                            "cubeMissed_atn": 0,
                            "chargStat_atn": "None",
                            "coneHigh_tp": "0",
                            "coneMid_tp": "0",
                            "coneLow_tp": "0",
                            "coneMissed_tp": 0,
                            "cubeHigh_tp": 0,
                            "cubeMid_tp": 0,
                            "cubeLow_tp": 1,
                            "cubeMissed_tp": 0,
                            "intke_Floor_InComm": 0,
                            "intke_Floor_OutComm": 2,
                            "intke_shelf": 0,
                            "intkeChute": 0,
                            "defQuant": 75,
                            "defQual": 3,
                            "chargStat_end": "Engaged",
                            "addRobot": "1",
                            "speed": "-1",
                            "moveBtwnNode": "-1",
                            "droppedCycl": "-1",
                            "longIntake": "-1",
                            "droppedHit": -1,
                            "tripleClimb": -1
                        }).map((key, index) => {
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