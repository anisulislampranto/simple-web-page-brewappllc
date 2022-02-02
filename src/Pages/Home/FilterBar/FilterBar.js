import React from 'react';
import './FilterBar.css';

const FilterBar = () => {
    return (
        <div className='filter-bar'>
            <button>🔥 24h Trending</button>
            <button>Latest shows</button>
            <button>Most Popular</button>
            <button>💎 In Genesis</button>
            <button>🛕In Temple</button>
            <button>🌪️In Void</button>
            <button>#BAYC</button>
        </div>
    );
};

export default FilterBar;