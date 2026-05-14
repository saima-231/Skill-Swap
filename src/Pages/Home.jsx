import React from 'react';
import Banner from '../Components/Banner';
import HowWorks from '../Components/HowWorks';
import SuccessStories from '../Components/SuccessStories';
import PopularSkills from '../Components/PopularSkills';
import TopProviders from '../Components/TopProviders';
const Home =()=>{
return (
    <div>
        <Banner></Banner>
        <PopularSkills></PopularSkills>
        <TopProviders></TopProviders>
        <HowWorks></HowWorks>
        <SuccessStories></SuccessStories>
    </div>
)
}
    export default Home;
