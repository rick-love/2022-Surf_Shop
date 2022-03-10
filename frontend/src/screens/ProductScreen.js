import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Fab,
  ListItem,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material'

import { listProductDetails } from '../actions/productActions'
import themeOptions from "../assets/theme";


const ProductScreen = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  return (
    <ThemeProvider theme={themeOptions}>
      <Container>
        <Fab variant='extended'>
          <Link to='/'>Go Back</Link>
        </Fab>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography gutterBottom variant='h2' component='div'>
                  {product.name}
                </Typography>
                <Typography gutterBottom color='orange'>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </Typography>
                <Typography variant='body2' color='text-secondary'>
                  {product.description}
                </Typography>
                <Typography variant='h5' component='div'>
                  {product.price}
                </Typography>
              </CardContent>
              <Box>
                <Stack
                  sx={{
                    border: 1,
                  }}
                  direction={{ xs: 'column' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  divider={<Divider orientation='horizontal' flexItem />}
                >
                  <ListItem>In Stock: {product.countInStock}</ListItem>
                  <ListItem>
                    <Fab variant='extended'>
                      <Link to='/'>Add to Cart</Link>
                    </Fab>
                  </ListItem>
                  <ListItem>ListItem 3</ListItem>
                </Stack>
              </Box>
            </Box>
            <CardMedia
              component='img'
              height='140'
              image={product.image}
              alt='product'
            />
          </Card>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default ProductScreen
