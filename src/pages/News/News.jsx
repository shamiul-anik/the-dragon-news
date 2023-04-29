import React, { useEffect, useState } from 'react';

const News = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/categories")
    fetch("./data/news.json")
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(error => console.error(error));
  }, []);
  
  console.log(news);
  
  return (
    <div>
      <h3>Message from News!</h3>
    </div>
  );
};

export default News;