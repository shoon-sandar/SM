import React from 'react'
import Card from './Card'
import { subject1, subject2, subjects } from './constant'

const NewPage = () => {

    return (
        <div className='flex justify-center items-center h-screen gap-10'>
            <Card
                rollNo={1}
                username={"Shoon Shoon"}
                dob={"27-02-2002"}
                age={23}
                color={"#45f775"}
                subjects={subjects}
            />
            <Card
                rollNo={2}
                username={"Nay Zaw"}
                dob={"27-02-1800"}
                age={23}
                color={"#54e6e8"}
                subjects={subject1}
            />
            <Card
                rollNo={3}
                username={"Shwe Nyan"}
                dob={"27-02-1000"}
                age={23}
                color={"#5d39e3"}
                subjects={subject2}
            />

        </div>
    )
}

export default NewPage