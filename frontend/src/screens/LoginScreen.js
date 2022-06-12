import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FormContainer from '../components/FormContainer'
import FormControl, { useFormControl } from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'

function MyFormHelperText() {
  const { focused } = useFormControl() || {}

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused'
    }

    return '* Required'
  }, [focused])

  return <FormHelperText>{helperText}</FormHelperText>
}

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <Box component='form' autoComplete='off' onSubmit={submitHandler}>
        <Typography>Sign In</Typography>
        {error && <Message>{error}</Message>}
        {loading && <Loader />}
        <FormControl variant='standard'>
          <InputLabel htmlFor='email' placeholder='Please enter email'>
            Email
          </InputLabel>
          <Input
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MyFormHelperText />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='password' placeholder='Please enter password'>
            Password
          </InputLabel>
          <Input
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <MyFormHelperText />
        </FormControl>
        <Button variant='outlined' type='submit'>
          Sign In
        </Button>
      </Box>
      <div>
        New Customer
        <Link to={redirect ? `/register?redirect=${redirect}` : 'register'}>
          Register
        </Link>
      </div>
    </FormContainer>
  )
}

export default LoginScreen
