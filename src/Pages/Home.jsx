import React from 'react';
import Banner from '../Components/Banner';
import HowWorks from '../Components/HowWorks';
import SuccessStories from '../Components/SuccessStories';
import PopularSkills from '../Components/PopularSkills';
const Home =()=>{
return (
    <div>
        <Banner></Banner>
        <PopularSkills></PopularSkills>
        <HowWorks></HowWorks>
        <SuccessStories></SuccessStories>
    </div>
)
}
    export default Home;
