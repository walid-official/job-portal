import React from 'react';
import Banner from '../components/Banner/Banner';
import CategoryCards from '../components/categoryCards/CategoryCards';
import Jobs from '../components/Jobs/Jobs';
import JobFinder from '../components/JobFinder/JobFinder';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCards></CategoryCards>
            <Jobs></Jobs>
            <JobFinder></JobFinder>
        </div>
    );
};

export default Home;