import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import config from '../config'

import InputArea from './translator/InputArea'
import OutputArea from './translator/OutputArea'
import LanguageSelection from './translator/LanguageSelection'

import { useLanguageStore, useInputStore, useTranslatedStore } from '../store' //zusand Store for states

import { Container } from '@mui/material'

const TranslatorPage = () => {

  const navigate = useNavigate()

  const inputText = useInputStore((state) => state.inputText)
  const setTranslatedText = useTranslatedStore((state) => state.setTranslatedText)
  const sl = useLanguageStore((state) => state.sourceLanguage)
  const tl = useLanguageStore((state) => state.targetLanguage)

  const getTranslation = async () => {
    const query_praram = new URLSearchParams({ sl: sl, tl: tl, q: inputText.trim() }) //query params for API
    let url = config.API_URL + '/translate/?' + query_praram //API URL with query params
    try {
      if (inputText) {
        const response = await axios.get(url)
        const translatedText = response.data.translatedText //get translated text from API response
        setTranslatedText(translatedText)

        navigate('/translate/?' + query_praram) //update url on Browser with query params
      } else {
        navigate('/') //if input text is empty, redirect to base url on browser
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getTranslation()
  }, [inputText, sl, tl]) 


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