import React from 'react';
import './Navbar.css';
import varifyImage from '../../../images/varifyImage.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 style={{marginBottom:'0px'}}>Live Spaces</h1>
            <div style={{display:'flex', alignItems:'center'}}>
                <img width={'30px'} height={'30px'} src={varifyImage} alt="" />
                <p>All NFTs on Cyber either belong to or were minted by their space creator.</p>
            </div>
        </div>
    );
};

export default Navbar;