/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaStarHalf, FaRegBookmark, FaShareAlt, FaEye } from 'react-icons/fa';
import moment from 'moment';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {

  const { _id, title, author, details, rating, total_view, image_url, thumbnail_url } = news;
  
  return (
    <Card className="mb-4 me-2">
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
          <Link to={`/news/${_id}`} className='text-info fw-bold text-decoration-none'>Read More</Link>
        </Card.Text>
        <hr />
        <div className='d-flex justify-content-between align-items-center text-secondary fw-semibold'>
          <div className='d-flex align-items-center gap-2'> 
            <div>
              <Rating
                placeholderRating={rating?.number}
                emptySymbol={<FaRegStar className='text-warning' />}
                placeholderSymbol={<FaStar className='text-warning' />}
                fullSymbol={<FaStar className='text-warning' />}
                readonly
              />
            </div>
            <div>
              {rating?.number}
            </div>
          </div>
          <div className='d-flex align-items-center gap-2'> 
            <FaEye className='fs-6' />
            {total_view} 
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;