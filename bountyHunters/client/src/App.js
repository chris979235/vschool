import React, { useContext } from 'react'
import { MyContext } from './AppContext.js'
import Bounties from './Bounties.js'
import MappedBounty from './MappedBounty.js'

export default function () {
    const { people } = useContext(MyContext)
    console.log(people)
    const mappedPeople = people.map( person => <Bounties {...person} /> )
    return (
        <>
            <h3>Hello Friends</h3>
            <MappedBounty />
            { mappedPeople }
        </>
    )
}