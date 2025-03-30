import React, { use, useEffect } from 'react'
import { Box, Input, Skeleton, TextField } from '@mui/material'

import { useOutputStore,useInputStore, useOutputLoadingStore } from '../../store'

const OutputArea = () => {
  let translatedText = useOutputStore((state => state.outputText))
  let inputText = useInputStore((state =>state.inputText))
  const outputLoading = useOutputLoadingStore((state => state.outputLoading))

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
        {
          outputLoading? 
          <div className=''>
            <Skeleton variant="text" width={`100%`} height={'4ch'} />
          </div>
          : 
          <Input
          fullWidth
          autoFocus
          disableUnderline
          multiline
          readOnly
          // minRows={10}
          maxRows={30}
          value= {translatedText ? translatedText : 'Translation will appear here'}
          sx={{ fontSize: '1.4rem', ":hover": { cursor: 'pointer', } }}
          >
        </Input>
        }
        
      </Box>
    </div>
  )
}

export default OutputArea