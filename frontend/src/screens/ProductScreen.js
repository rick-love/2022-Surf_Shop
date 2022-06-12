import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
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

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import { listProductDetails } from '../actions/productActions'
import themeOptions from '../assets/theme'

const ProductScreen = () => {
  const [qty, setQty] = useState(1)

  let navigate = useNavigate()

  const params = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <ThemeProvider theme={themeOptions}>
      <Container>
        <Fab className='back-btn' variant='extended'>
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
                <Typography gutterBottom color='#2607dc'>
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
                  {/* QTY in Stock Select */}
                  <ListItem>
                    {product.countInStock > 0 && (
                      <FormControl variant='standard' fullWidth>
                        <InputLabel id='qty-label'>Qty</InputLabel>
                        <Select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </ListItem>

                  <ListItem>
                    <Fab variant='extended' onClick={addToCartHandler}>
                      Add to Cart
                    </Fab>
                  </ListItem>
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
