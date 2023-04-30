import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {

  const categoryNews = useLoaderData();

  return (
    <div>
      <h3 className='fw-bolder fs-5'>Dragon News Home</h3>
      <h4 className='fw-bold fs-6 my-3'>Total Number of News: {categoryNews.length}</h4>
      <div style={{ maxHeight: "1650px", overflowY: "auto"  }}>
        {categoryNews.length > 0 ? categoryNews.map((news) => <NewsCard key={news._id} news={news}></NewsCard>) : <div className='fw-bold fs-5 text-danger'>No News Found with Selected Category!</div>}
      </div>
    </div>
  );
};

export default Category;