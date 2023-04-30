/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalf, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { GrView } from "react-icons/gr";
import moment from 'moment';

const NewsCard = ({ news }) => {

  const { _id, title, author, details, rating, total_view, image_url, thumbnail_url } = news;
  
  return (
    <Card className="mb-4">
      <Card.Header className='d-flex align-items-center justify-content-between py-3'>
        <div className='d-flex align-items-center gap-2'>
          <div>
            <img className='h-10 w-10 rounded-circle shadow-sm' src={author?.img} alt="Author Image" />
          </div>
          <div className='d-flex flex-column justify-content-center'>
            <h4 className='fs-6 fw-bold mb-0'>{author?.name}</h4>
            <p className='mb-0 text-secondary fs-6'>{moment(author?.published_date).format("YYYY-MM-DD")}</p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-2 fs-5'>
          <FaRegBookmark className='text-secondary' />
          <FaShareAlt className='text-secondary' />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className='fw-bolder text-justify lh-base'> {title} </Card.Title>
        <Card.Img className='my-3' variant="top" src={image_url} />
        <Card.Text className='text-justify text-secondary mb-1'> 
          {details.length < 300 ? details : details.slice(0, 300)}... 
        </Card.Text>
        <Card.Text>
          <Link className='text-info fw-bold text-decoration-none'>Read More</Link>
        </Card.Text>
        <hr />
        <div className='d-flex justify-content-between align-items-center text-secondary fw-semibold'>
          <div className='d-flex align-items-center gap-2'> 
            {rating.number < 5 ? <FaStarHalf className='text-warning' /> : <FaStar className='text-warning' />}
            {rating.number}
          </div>
          <div className='d-flex align-items-center gap-2'> 
            <GrView />
            {total_view} 
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;