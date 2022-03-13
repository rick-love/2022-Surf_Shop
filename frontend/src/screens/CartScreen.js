import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'

import { addToCart } from '../actions/cartActions'

import Grid from '@mui/material/Grid'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ButtonBase from '@mui/material/ButtonBase'
import Divider from '@mui/material/Divider'

const CartScreen = () => {
  const params = useParams()
  let navigate = useNavigate()
  let location = useLocation()

  const productId = params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })

  return (
    <>
      <Typography variant='h2'>Shopping Cart</Typography>
      {cartItems.length === 0 ? (
        <Message>
          Your cart is Empty
          <Fab variant='extended'>
            <Link to='/'>Go Back</Link>
          </Fab>
        </Message>
      ) : (
        <Paper sx={{ p: 3, flexGrow: 1 }}>
          {cartItems.map((item) => (
            <Grid
              key={item.product}
              container
              spacing={2}
              sx={{ borderBottom: 1, borderColor: 'grey.500', p: 2 }}
            >
              <Grid item>
                <ButtonBase
                  sx={{
                    width: 128,
                    height: 128,
                    border: 1,
                    borderColor: '#2607dc',
                  }}
                >
                  <Img alt='complex' src={item.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant='subtitle1'
                      component='div'
                    >
                      {item.name}
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                      {item.description}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {item.brand}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: 'pointer', color:'#2607dc', fontWeight: 'semi-bold' }} variant='body2'>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1' component='div'>
                    Qty: {qty}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1' component='div'>
                    € {item.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Paper>
      )}
    </>
  )
}

export default CartScreen
