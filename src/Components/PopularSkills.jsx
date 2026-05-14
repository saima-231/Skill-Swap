import React, { use, useState } from 'react';
// import 'animate.css';
import Skills from './Skills';
 const data = fetch('/skill.json')
    .then(response => response.json())
    
const PopularSkills = () => {
   const dataSkills = use(data);
//    console.log(dataSkills)
    return (
        <div className='bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 p-5 rounded-sm'>


            <h2 className='font-bold text-2xl items-center text-center py-5'>Popular Skills</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mb-6'>
                {
                    dataSkills.map(skill => <Skills key={skill.skillId} skill={skill}></Skills>)
                }
            </div>
        </div>
    );
};

export default PopularSkills;