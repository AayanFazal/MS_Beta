import React from 'react'

export default function page({ params }) {
    return (
        <div>
            <p>Competition: {params.competition}</p>
            <p>Team: {params.team}</p>
        </div>
    )
}
