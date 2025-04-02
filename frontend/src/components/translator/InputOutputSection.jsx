import React, { useEffect, useRef } from 'react'
import { Box, IconButton, Input, TextField, InputAdornment, Skeleton } from '@mui/material'
import { Mic } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import useInputStore, { useLocalInputStore } from '../../store'
import { useOutputStore, useOutputLoadingStore } from '../../store'



const InputOutputSection = () => {
  const localInput = useLocalInputStore((state) => state.localInput)
  const setLocalInput = useLocalInputStore((state) => state.setLocalInput)

  // variables for input text and set input text from the store using zustand 
  const inputText = useInputStore((state) => state.inputText)
  const setInputText = useInputStore((state) => state.setInputText)

  // function to set the input text after 2 seconds of typing
  const handleInputChange = (e) => {
      setLocalInput(e.target.value)
  }

  // for skeleton loading according to the input text
  const splitedtext = localInput.split('\n')
  const l = localInput.split('\n').length >=7 ? localInput.split('\n').length :7

  // timerRef to store the timer 
  const timerRef = useRef(null)
  useEffect(() => {
    if (localInput.trim() === inputText) return
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setInputText(localInput)
    }, 2000)
  }, [localInput])

  let translatedText = useOutputStore((state => state.outputText))
  //   let inputText = useInputStore((state =>state.inputText))
  const outputLoading = useOutputLoadingStore((state => state.outputLoading))

  

  return (
    <div className="flex flex-wrap gap-1 flex-col md:flex-row w-full mt-2 shadow-lg items-stretch">
      <div className="inp flex-1 md:w-1/2">
        <Box
          sx={{
            height: '100%',
            width: '100%',
            bgcolor: 'background.paper',
            boxShadow: 1,
            p: 2,
          }}
        >
          <Input
            value={localInput}
            fullWidth
            autoFocus
            disableUnderline
            multiline
            minRows={l}
            maxRows={30}
            placeholder="Enter text to translate"
            sx={{ fontSize: '1.4rem' }}
            inputProps={{ maxLength: 1500 }}
            onChange={handleInputChange}
          />
        </Box>
      </div>
      <div className="output flex-1 md:w-1/2">
        <Box
          sx={{
            height: '100%',
            width: '100%',
            bgcolor: 'background.paper',
            boxShadow: 1,
            p: 2,
          }}
        >
          {outputLoading ? (
            <div className="w-full">
              {Array.from({ length: splitedtext.length }).map((_, i) => (
                <Skeleton key={i} variant="text" width={`${splitedtext[i].length}ch`} height={'3.6ch'} />
              ))}
            </div>
          ) : (
            <div className="w-full">
              <Input
                fullWidth
                // autoFocus
                disableUnderline
                multiline
                readOnly
                minRows={7}
                maxRows={30}
                value={
                  translatedText ? translatedText : 'Translation will appear here'
                }
                sx={{
                  fontSize: '1.4rem',
                  ":hover": { cursor: 'pointer' },
                }}
              />
            </div>
          )}
        </Box>
      </div>
    </div>
  )
}



export default InputOutputSection