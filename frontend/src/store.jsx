import { create } from 'zustand'

export const useLocalInputStore = create((set) => ({
    localInput: '',
    setLocalInput: (text) => set({localInput: text}),
}))

export const useInputStore = create((set) => ({
    inputText: '',
    setInputText: (text) => set({inputText: text}),
}))

export const useOutputStore = create((set) => ({
    outputText: '',
    setOutputText: (text) => set({outputText: text}),
    clearOutput: () => set({outputText: ''})
}))

export const useLanguageStore = create((set) => ({
    sourceLanguage: 'auto',
    setSourceLanguage: (lang) =>set({sourceLanguage: lang}),
    
    targetLanguage: 'en',
    setTargetLanguage: (lang) =>set({targetLanguage: lang}),
}))

export const useOutputLoadingStore = create((set) => ({
    outputLoading: false,
    setOutputLoading: (bool) => set({outputLoading: bool}),
}))


export default useInputStore