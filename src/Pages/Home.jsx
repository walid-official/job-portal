import React from 'react';
import Banner from '../components/Banner/Banner';
import CategoryCards from '../components/categoryCards/CategoryCards';
import Jobs from '../components/Jobs/Jobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCards></CategoryCards>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;