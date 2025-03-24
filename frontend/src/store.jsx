import { create } from 'zustand'

export const useInputStore = create((set) => ({
    inputText: '',
    setInputText: (text) => set({inputText: text}),
    clearInput: () => set({inputText: ''})
}))

export const useLanguageStore = create((set) => ({
    sourceLanguage: 'auto',
    setSourceLanguage: (lang) =>set({sourceLanguage: lang}),
    
    targetLanguage: 'en',
    setTargetLanguage: (lang) =>set({targetLanguage: lang}),
}))

export const useTranslatedStore = create((set) => ({
    translatedText: '',
    setTranslatedText: (text) => set({translatedText: text}),
}))

export default useInputStore