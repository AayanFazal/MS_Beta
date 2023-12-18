import { notFound } from 'next/navigation'
import React from 'react'

function getCompetition() {
    return true
}

export default function page({ params }) {
    const competitionExists = getCompetition()

    if (!competitionExists) notFound()

    return (
        <div>Competition</div>
    )
}
