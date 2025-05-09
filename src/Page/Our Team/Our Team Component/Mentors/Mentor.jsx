import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard';

const Mentor = () => {
    const [mentors,setMentor] = useState([])
        useEffect(()=>{
            fetch('Mentors.json')
            .then(res=>res.json())
            .then(data => setMentor(data))
        },[])
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
                {
                     mentors.map(mentor => ( <MentorCard mentor={mentor}></MentorCard> ))
                }
            </div>
        </div>
    );
};

export default Mentor;