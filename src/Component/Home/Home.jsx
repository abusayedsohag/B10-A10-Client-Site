import React from 'react';
import Banner from '../Banner.jsx/Banner';
import Cards from './Cards';
import Features from '../ExtraSection/Features';
import Counter from '../ExtraSection/Counter';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Features></Features>
            <Counter></Counter>
        </div>
    );
};

export default Home;