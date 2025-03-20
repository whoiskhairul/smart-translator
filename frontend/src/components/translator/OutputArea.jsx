import React from 'react'
import { Box, Input, TextField } from '@mui/material'

import { useTranslatedStore } from '../../store'

const OutputArea = () => {
  let translatedText = useTranslatedStore((state => state.translatedText))
  return (
    <div className='input-area mt-2 '>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          boxShadow: 1,
          p: 2,
          height: '100%'
        }}>
        <Input
          fullWidth
          autoFocus
          disableUnderline
          multiline
          readOnly
          minRows={10}
          maxRows={30}
          value= {translatedText ? translatedText : 'Translation will appear here'}
          sx={{ fontSize: '1.4rem', ":hover": { cursor: 'pointer' } }}
          >
        </Input>
      </Box>
    </div>
  )
}

export default OutputArea