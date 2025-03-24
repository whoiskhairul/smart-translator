import React, { useEffect } from 'react'
import axios from 'axios'

import { Divider, IconButton, Typography, TextField, MenuItem, Skeleton, FormControl, Select, InputLabel } from '@mui/material'
import { SwapHoriz, KeyboardArrowDown } from '@mui/icons-material'

import { useLanguageStore } from '../../store'

import config from '../../config'
const LanguageSelection = () => {

    const [loading, setLoading] = React.useState(true)
    const [languages, setLanguages] = React.useState([])

    const getLnaguages = async () => {
        try {
            let url = config.API_URL + '/translate/languages'
            const response = await axios.get(url)
            // console.log(response.data)
            setLanguages(response.data)
            console.log('languages:', response.data)
            setLoading(false)

        } catch (error) {
            console.error(error)
        }
    }
    // getLnaguages()


    const [isRotated, setIsRotated] = React.useState(false);

    // const [sourceLanguage, setSourceLanguage] = React.useState('auto')
    const { sourceLanguage, setSourceLanguage } = useLanguageStore()
    const handleSourceLanguageChange = (e) => {
        setSourceLanguage(e.target.value)
    }

    // const [targetLanguage, setTargetLanguage] = React.useState('en')
    const { targetLanguage, setTargetLanguage } = useLanguageStore()
    const handleTranslationLanguageChange = (e) => {
        setTargetLanguage(e.target.value)
    }

    const handleSwapLanguagesClick = () => {
        setIsRotated(!isRotated);
    }

    useEffect(() => {
        getLnaguages()

    }, [])

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
                                defaultValue='auto'
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
                        <IconButton onClick={handleSwapLanguagesClick}>
                            <SwapHoriz fontSize='large' />
                        </IconButton>
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
                                defaultValue='en'
                                margin='dense'
                                onChange={handleTranslationLanguageChange}

                            >
                                {languages.map((option) => (
                                    option.language_name !== 'Detect Language' && <MenuItem key={option.language_name} value={option.value} fontSize='0.6rem' variant='caption'>
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