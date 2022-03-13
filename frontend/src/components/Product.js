import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import Rating from './Rating'
import { Link } from 'react-router-dom'


const Product = ({ product }) => {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/product/${product._id}`}>
          <CardMedia
            component='img'
            height='140'
            image={product.image}
            alt='product'
          />
          <CardContent>
            <Typography gutterBottom variant='h3' component='div'>
              {product.name}
            </Typography>
            <Typography gutterBottom color='#2607dc'>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Typography>
            <Typography variant='body3' color='text-secondary'>
              {product.description}
            </Typography>
            <Typography variant='h5' component='div'>
              {product.price}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  )
}

export default Product
