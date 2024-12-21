import React from 'react';
import Banner from '../components/Banner/Banner';
import CategoryCards from '../components/categoryCards/CategoryCards';
import Jobs from '../components/Jobs/Jobs';
import JobFinder from '../components/JobFinder/JobFinder';
import Join from '../components/Join/Join';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCards></CategoryCards>
            <JobFinder></JobFinder>
            <Jobs></Jobs>
            <Join></Join>
        </div>
    );
};

export default Home;