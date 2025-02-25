# Smart Translator(IN DEVELOPEMENT)

An AI-powered language translation application that enables seamless communication across different languages.

## Features

- Real-time language translation
- Support for multiple languages
- User-friendly interface
- AI-enhanced translation accuracy
- Text-to-speech capability
- History of translations
- Copy and Share Options
- Customizable Translation Tone or Style


## Technical Consideration
- Caching: caching translations or reusing them if the exact same text and language pair are requested often.


## Example Workflow (User Journey)/Usage
- The user opens the webapp.
- Selects (or auto-detect picks) the source language (e.g., Spanish) and target language (e.g., English).
- The user taps the microphone icon, speaks a sentence in Spanish.
- The app transcribes the sentence and shows it in the source text box.
- The user stops writing/speaking for 2 seconds
- The translator API is called, and the result is displayed in the translation result box.
- The user presses the “speaker icon” to hear the English translation.
- The user taps the “star” icon to save this translation for future reference.


## Tech Stack

- Frontend: React
- Backend: Django
- AI Integration: OpenAI API
- Database: Currently SqLite3, PostgreSQL will be integrated soon.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)