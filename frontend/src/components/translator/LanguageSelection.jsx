import React, { useEffect } from 'react'
import axios from 'axios'

import { Divider, IconButton, Typography, TextField, MenuItem, Skeleton, FormControl, Select, InputLabel, Tooltip } from '@mui/material'
import { SwapHoriz, KeyboardArrowDown } from '@mui/icons-material'

import { useLanguageStore, useInputStore, useOutputStore, useLocalInputStore, useOutputLoadingStore } from '../../store'

import config from '../../config'
const LanguageSelection = () => {

    const [loading, setLoading] = React.useState(true)
    const [languages, setLanguages] = React.useState([])

    const inputText = useInputStore((state => state.inputText))
    const outputText = useOutputStore((state => state.outputText))
    const setOutputText = useOutputStore((state) => state.setOutputText)
    const setOutputLoading = useOutputLoadingStore((state) => state.setOutputLoading)

    const setLocalInput = useLocalInputStore((state) => state.setLocalInput)

    const getLanguage = async () => {
        try {
            let url = config.API_URL + '/translate/languages'
            const response = await axios.get(url)
            setLanguages(response.data)
            setLoading(false)

        } catch (error) {
            console.error(error)
        }
    }
    // getLanguage()


    const [isRotated, setIsRotated] = React.useState(false);

    // const [sourceLanguage, setSourceLanguage] = React.useState('auto')
    const { sourceLanguage, setSourceLanguage } = useLanguageStore()
    const handleSourceLanguageChange = (e) => {
        if (e.target.value === targetLanguage) {
            if (sourceLanguage === 'auto') {
                setTargetLanguage('en')
                setSourceLanguage(e.target.value)
            }
            else {
                setTargetLanguage(sourceLanguage)
                setSourceLanguage(e.target.value)
            }
        }
        else {
            setSourceLanguage(e.target.value)
        }

    }

    // const [targetLanguage, setTargetLanguage] = React.useState('en')
    const { targetLanguage, setTargetLanguage } = useLanguageStore()
    const handleTranslationLanguageChange = (e) => {
        if (e.target.value === sourceLanguage) {
            setSourceLanguage(targetLanguage)
            setTargetLanguage(e.target.value)
        }
        setTargetLanguage(e.target.value)
    }

    const handleSwapLanguagesClick = (e) => {

        setIsRotated(!isRotated); //to rotate the swap icon

        //to swap the selected source and target language
        let temp = sourceLanguage
        setSourceLanguage(targetLanguage)
        setTargetLanguage(temp)

        //to swap the input and output text
        setLocalInput(outputText)
        setOutputText('')
        setOutputLoading(true)

    }

    useEffect(() => {
        getLanguage() //call getLanguage function on component mount

    }, [])

    useEffect(() => {
        console.log('output text', outputText)
    }, [outputText])

    return (
        <>

            <div className='language-selection h-16 w-auto mt-8 border-0 rounded-md shadow-md' >
                <div className='select-lang flex justify-between items-center h-full'>
                    {loading ?
                        <div className='w-1/2 text-left px-2 md:px-8'>
                            <Skeleton variant='text' />
                            <Skeleton variant='text' />
                        </div>
                        :
                        <div className='w-1/2 text-left px-2 md:px-8'>
                            <TextField className='w-full'
                                id='select-source-language'
                                select
                                label='Select Language'
                                variant='standard'
                                size='small'
                                autowidth='true'
                                value={sourceLanguage}
                                margin='dense'
                                onChange={handleSourceLanguageChange}
                            >
                                {languages.map((option, index) => (
                                    <MenuItem key={index} value={option.value} fontSize='large' variant='caption' >
                                        {option.language_name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    }

                    <div className='w-fit m-auto items-center' style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                        {sourceLanguage !== 'auto' ?
                            <IconButton onClick={handleSwapLanguagesClick}>
                                <Tooltip title='Swap languages' ><SwapHoriz fontSize='large' /></Tooltip>
                            </IconButton>
                            :
                            <IconButton disabled>
                                <SwapHoriz fontSize='large' />
                            </IconButton>
                        }
                    </div>

                    {loading ?
                        <div className='w-1/2 text-left px-2 md:px-8'>
                            <Skeleton variant='text' animation='wave' />
                            <Skeleton variant='text' animation='wave' />
                        </div>
                        :
                        <div className='w-1/2 text-left px-2 md:px-8'>
                            <TextField
                                className='w-full'
                                id='select-translate-language'
                                select
                                label='Select Language'
                                variant='standard'
                                size='small'
                                autowidth='true'
                                value={targetLanguage}
                                margin='dense'
                                onChange={handleTranslationLanguageChange}

                            >
                                {languages.map((option) => (
                                    option.language_name !== 'Auto' && <MenuItem key={option.language_name} value={option.value} fontSize='0.6rem' variant='caption'>
                                        {option.language_name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    }

                </div>
            </div>
            {/* <Divider /> */}
        </>
    )
}

export default LanguageSelection