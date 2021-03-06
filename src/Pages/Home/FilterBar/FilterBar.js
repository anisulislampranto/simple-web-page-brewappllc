import React from 'react';
import './FilterBar.css';

const FilterBar = () => {
    return (
        <div className='filter-bar'>
            <button>π₯ 24h Trending</button>
            <button>Latest shows</button>
            <button>Most Popular</button>
            <button>π In Genesis</button>
            <button>πIn Temple</button>
            <button>πͺοΈIn Void</button>
            <button>#BAYC</button>
        </div>
    );
};

export default FilterBar;