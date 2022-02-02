import React from 'react';
import './ArticleCard.css'

const ArticleCard = (props) => {
    const {name, picture, description} = props.articleCard;

    return (
        <div className='article-card'>
            <img src={picture} alt="" />
            <div style={{padding:'20px'}} >
                <h1>{name}</h1>
                <div className='description-card'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;