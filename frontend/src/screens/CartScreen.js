import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'

import { addToCart, removeFromCart } from '../actions/cartActions'

import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const CartScreen = () => {
  const params = useParams()
  let navigate = useNavigate()
  let location = useLocation()

  const productId = params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const checkoutHandler = () => {
    console.log('checkout')
    navigate('/login?redirect=shipping')
  }

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })

  return (
    <>
      {cartItems.length === 0 ? (
        <Message>
          Your cart is Empty
          <Fab variant='extended'>
            <Link to='/'>Go Back</Link>
          </Fab>
        </Message>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header header header header"
  "main main main sidebar"
  "footer footer footer footer"`,
          }}
        >
          <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>
            <Typography variant='h4'>Shopping Cart</Typography>
          </Box>
          <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>
            Main
            <Box>
              {cartItems.map((item) => (
                <Card
                  key={item.product}
                  sx={{
                    display: 'flex',
                    borderBottom: 1,
                    borderColor: 'grey.500',
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <CardContent
                    sx={{ display: 'flex', border: 1, borderColor: 'grey.500' }}
                  >
                    <CardMedia>
                      <ButtonBase
                        sx={{
                          width: 128,
                          height: 128,
                        }}
                      >
                        <Img alt='complex' src={item.image} />
                      </ButtonBase>
                    </CardMedia>
                    <Box>
                      <Typography
                        gutterBottom
                        variant='subtitle1'
                        component='div'
                      >
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {item.brand}
                      </Typography>
                      <Fab
                        sx={{
                          mt: 4,
                          cursor: 'pointer',
                          color: '#2607dc',
                          fontWeight: 'semi-bold',
                        }}
                        variant='extended'
                        size='small'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Remove
                      </Fab>
                    </Box>
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      p: 1,
                    }}
                  >
                    <Typography
                      sx={{ mr: 2, pt: 0.5 }}
                      variant='subtitle1'
                      component='div'
                    >
                      <FormControl variant='standard' fullWidth>
                        <InputLabel id='qty-label'>Qty</InputLabel>
                        <Select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Typography>
                    <Typography variant='subtitle1' component='div'>
                      Price € {item.price}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </Box>
          <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>
            <Card>
              <List>
                <ListItem>
                  <Typography sx={{}} component='h2'>
                    Subtotal:
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    Items
                  </Typography>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </ListItem>
                <ListItem>
                  <Button
                    variant='contained'
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed to Checkout
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Box>
          <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>
        </Box>
      )}
    </>
  )
}

export default CartScreen
