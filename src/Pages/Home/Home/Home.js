import React from 'react';
import ArticleCards from '../ArticleCards/ArticleCards';
import FilterBar from '../FilterBar/FilterBar';
import Navbar from '../Navbar/Navbar';
import './Home.css'


const Home = () => {
    return (
        <div className='home-page' >
            <Navbar/>
            <FilterBar/>
            <ArticleCards/>
        </div>
    );
};

export default Home;