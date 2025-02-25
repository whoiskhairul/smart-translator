import React from 'react'
import { Box, IconButton, Input, TextField, InputAdornment } from '@mui/material'
import { Mic } from '@mui/icons-material'
import axios from 'axios'
import config from '../../config'

const InputArea = () => {

  const [inputText, setInputText] = React.useState('')
  const [lastInputTime, setLastInputTime] = React.useState(0)
  const handleInputChange = (e) => {
    if (Date.now() - lastInputTime < 1000) {
      let url = config.API_URL + '/translate/'
      const response = axios.post(url, { input_text: inputText })
      console.log(response.data)
    }
  }


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
          minRows={15}
          maxRows={30}
          placeholder='
          Enter text to translate'
          sx={{ fontSize: '1.4rem' }}
          inputProps={{ maxLength: 1500, }}
          onChange={(e) => {
            setInputText(e.target.value)
            setLastInputTime(Date.now())
            handleInputChange()
          }}
        >
        </Input>
      </Box>

    </div>
  )
}

export default InputArea