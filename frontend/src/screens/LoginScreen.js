import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'

import Typography from '@mui/material/Typography'
import FormContainer from '../components/FormContainer'
import FormControl, { useFormControl } from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText';
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

  return (
    <FormContainer>
      <Box component='form' autoComplete='off'>
        <FormControl variant='standard'>
          <OutlinedInput placeholder='Please enter email' />
          <MyFormHelperText />
        </FormControl>
      </Box>
    </FormContainer>
  )
}

export default LoginScreen
