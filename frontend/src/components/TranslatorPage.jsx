import React, { useEffect } from 'react'
import axios from 'axios'
import config from '../config'

import InputArea from './translator/InputArea'
import OutputArea from './translator/OutputArea'

import { Button, IconButton, Container, Grid, Paper, Typography, TextField, InputAdornment } from '@mui/material'
import LanguageSelection from './translator/LanguageSelection'

import { useInputStore ,useTranslatedStore } from '../store'

const TranslatorPage = () => {

  const inputText = useInputStore((state) => state.inputText)
  const setTranslatedText = useTranslatedStore((state) => state.setTranslatedText)


  const getTranslation = async () => {
    let q = "?q=" + inputText
    let url = config.API_URL + '/translate' + q
    try {
      const response = await axios.get(url)
      const translatedText = response.data.translatedText
      setTranslatedText(translatedText)
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() =>{
    getTranslation()
  }, [inputText])


  return (
    <div className='translator-page '>
      <Container className='w-100%' >
        <div className='lan-selection w-100%'><LanguageSelection /></div>
        <div className='flex flex-wrap w-100% shadow-lg h-full'>
          <div className='inp flex-grow h-full' ><InputArea /></div>
          <div className='outp flex-grow h-full'><OutputArea /></div>
        </div>
      </Container>
    </div>
  )
}

export default TranslatorPage