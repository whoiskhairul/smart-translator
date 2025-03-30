import React, { useEffect, useRef } from 'react'
import { Box, IconButton, Input, TextField, InputAdornment, Skeleton } from '@mui/material'
import { Mic } from '@mui/icons-material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import useInputStore, { useLocalInputStore } from '../../store'

const InputArea = () => {
  // const [localInput, setLocalInput] = React.useState('')
  const localInput = useLocalInputStore((state) => state.localInput)
  const setLocalInput = useLocalInputStore((state) => state.setLocalInput)

  // variables for input text and set input text from the store using zustand 
  const inputText = useInputStore((state) => state.inputText)
  const setInputText = useInputStore((state) => state.setInputText)

  const navigate = useNavigate()


  // function to set the input text after 2 seconds of typing
  const handleInputChange = (e) => {
    setLocalInput(e.target.value)
  }

  // timerRef to store the timer 
  const timerRef = useRef(null)
  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setInputText(localInput)
    }, 2000)
  }, [localInput])


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
          value={localInput}
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