import React, { useEffect, useRef } from 'react'
import { Box, IconButton, Input, TextField, InputAdornment, Skeleton } from '@mui/material'
import { Mic } from '@mui/icons-material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import useInputStore from '../../store'

const InputArea = () => {
  // variables for input text and set input text from the store using zustand 
  const inputText = useInputStore((state) => state.inputText)
  const setInputText = useInputStore((state) => state.setInputText)

  const navigate = useNavigate()

  // timerRef to store the timer 
  const timerRef = useRef(null)
  // function to set the input text after 2 seconds of typing
  const handleInputChange = (e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout( () => {
      setInputText(e.target.value)
      if (e.target.value){
        navigate('?q=' + e.target.value)
      }else{
        navigate('/')
      }
      
    }, 2000)
  }

  useEffect(() => {
    // console.log('inputText: ' + inputText)
  })


  return (
    <div className='input-area mt-2'>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          boxShadow: 1,
          p: 2,
        }}>
        <Input
          fullWidth
          autoFocus
          disableUnderline
          multiline
          minRows={10}
          maxRows={30}
          placeholder='
          Enter text to translate'
          sx={{ fontSize: '1.4rem' }}
          inputProps={{ maxLength: 1500, }}
          onChange={handleInputChange}
        >
        </Input>
      </Box>

    </div>
  )
}

export default InputArea