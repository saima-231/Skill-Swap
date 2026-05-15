import React, { useContext } from 'react';
import Banner from '../Components/Banner';
import PopularSkills from '../Components/PopularSkills';
import TopProviders from '../Components/TopProviders';
import HowWorks from '../Components/HowWorks';
import SuccessStories from '../Components/SuccessStories';
import { AuthContext } from '../Components/Provider/AuthProvider';
import Loading from '../Components/Loading';

const Home = () => {
    const {loading} = useContext(AuthContext)
if (loading) {
return <Loading></Loading>
}
    return (
        <div>
              <Banner></Banner>
              <PopularSkills></PopularSkills>
              <TopProviders></TopProviders>
              <HowWorks></HowWorks>
              <SuccessStories></SuccessStories>
     </div>
    );
};

export default Home;