import React from 'react'

const Card = ({ rollNo, username, dob, age, color, subjects = [] }) => {
    return (
        <div className='shadow-xl shadow-black/30 p-4 rounded-xl border-2 border-slate-200'>
            <div className=' p-2 rounded-2xl'
                style={{ backgroundColor: color }}
            >Roll No - {rollNo}</div>
            <div>username - {username}</div>
            <div>date of birth - {dob}</div>
            <div>Age - {age}</div>
            <div className='bg-slate-200 flex p-2 mt-2 rounded-2xl gap-2'>
                <div>Subject - </div>
                {
                    subjects.map((subject, index) => (
                        <div key={subject}>
                            {subject}{index === subjects.length - 1 ? "" : ","}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card