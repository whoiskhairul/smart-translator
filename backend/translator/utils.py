from openai import OpenAI
from dotenv import load_dotenv
import os

from lingua import Language, LanguageDetectorBuilder

load_dotenv() #For loading env variable

class Translator:
    def __init__(self):
        OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
        self.client = OpenAI(api_key=OPENAI_API_KEY)
    p = """You are a translator who translates languages from English to Deutsch.
Whenever the user gives you a text, you just translate that.
You do not respond with anything other than the translation."""


    def translate(self, q, sl, tl):
        instruction = f"""you are a smart translator who translates languages from {sl} to {tl}.
Whenever the user gives you any text, you just translate that. 
You do not respond with anything other than the translation. 
Follow the format of the text and keep the response format exactly similar to the input text.
When you can not translate the given text, just return the given text without any modification."""
        prompt = q
        completion = self.client.chat.completions.create(
            model = 'gpt-4o-mini',
            messages = [{
                'role': 'system',
                'content': instruction
            }, {
                'role': 'user',
                'content': prompt
            }]
        )
        return completion.choices[0].message.content

class LanguageDetection:
    def __init__(self):
        pass
    def detect(self, text):
        languages = [Language.ARABIC, Language.BENGALI, Language.GERMAN, Language.ENGLISH, Language.FRENCH, Language.SPANISH, Language.HINDI, Language.INDONESIAN, Language.ITALIAN, Language.JAPANESE, Language.KOREAN, Language.PORTUGUESE, Language.RUSSIAN, Language.TURKISH, Language.CHINESE]
        detector = LanguageDetectorBuilder.from_languages(*languages).with_low_accuracy_mode().build()
        # print(detector.compute_language_confidence_values(text))
        return detector.detect_language_of(text).iso_code_639_1.name


def main():
    s = LanguageDetection().detect('Hello')
    print(s)
    pass

if __name__ == '__main__':
    main()