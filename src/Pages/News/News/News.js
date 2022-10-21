import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const News = () => {
  const news = useLoaderData();
  console.log(news,'test')
  const { category_id,details,image_url,title,total_view,_id,rating} = news;
    return (
      <Card >
        <Card.Img variant="top" src={image_url} />
      <Card.Body>
          <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
        <Button variant="primary">Go The News Feed</Button>
          </Link>
      </Card.Body>
    </Card>
    );
};

export default News;