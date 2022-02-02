import React from 'react';
import fakeData from '../../../fakeData.json';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleCards.css';


const ArticleCards = () => {


    return (
        <div className='article-cards'>
            {
                fakeData.map(articleCard => <ArticleCard articleCard={articleCard}></ArticleCard>)
            }
        </div>
    );
};

export default ArticleCards;