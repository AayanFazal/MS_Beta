'use server'

import MainPage from "./MainPage"

async function getTeams(competition) {
    console.log(competition)
    return [2590, 1712, 2559] // need to write logic to retrive team names using context
}

export default async function page({ params }) {
    const autoCompleteData = await getTeams(decodeURI(params.competition))

    return (
        <MainPage autoCompleteData={autoCompleteData} />
    )
}
