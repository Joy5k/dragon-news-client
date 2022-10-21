import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
  const Allnews = useLoaderData();
    return (
        <div>
        <h2>This is home:{Allnews.length}</h2>  
        {
          Allnews.map(news => <NewsSummeryCard
          key={news._id}
          news={news}
          ></NewsSummeryCard>)
        }
        </div>
    );
};

export default Home;