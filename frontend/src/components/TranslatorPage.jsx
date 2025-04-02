import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import config from '../config'

import InputArea from './translator/InputArea'
import OutputArea from './translator/OutputArea'
import LanguageSelection from './translator/LanguageSelection'

import { useLanguageStore, useInputStore, useOutputStore, useOutputLoadingStore } from '../store' //zusand Store for states

import { Container } from '@mui/material'
import InputOutputSection from './translator/InputOutputSection'

const TranslatorPage = () => {

  const navigate = useNavigate()

  const inputText = useInputStore((state) => state.inputText)
  const setOutputText = useOutputStore((state) => state.setOutputText)
  const sl = useLanguageStore((state) => state.sourceLanguage)
  const tl = useLanguageStore((state) => state.targetLanguage)
  const setOutputLoading = useOutputLoadingStore((state) => state.setOutputLoading)

  const getTranslation = async () => {
    const query_praram = new URLSearchParams({ sl: sl, tl: tl, q: inputText.trim() }) //query params for API
    let url = config.API_URL + '/translate/?' + query_praram //API URL with query params
    try {
      if (inputText) {
        setOutputLoading(true)
        const response = await axios.get(url)
        setOutputLoading(false)
        const outputText = response.data.translatedText //get translated text from API response
        setOutputText(outputText)

        if (response.data.detectedSourceLanguage !== sl) {
          console.log(response.data.detectedSourceLanguage)
        }

        navigate('/translate/?' + query_praram) //update url on Browser with query params
      } else {
        navigate('/') //if input text is empty, redirect to base url on browser
        setOutputText('') //set output text to empty
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
       <div><InputOutputSection/></div>
      </Container>
    </div>
  )
}

export default TranslatorPage