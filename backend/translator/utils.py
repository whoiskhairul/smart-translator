from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

class Translator:
    def __init__(self):
        OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
        self.client = OpenAI(api_key=OPENAI_API_KEY)
    p = """You are a translator who translates languages from English to Deutsch.
Whenever the user gives you a text, you just translate that.
You do not respond with anything other than the translation."""


    def translate(self, q):
        # prompt = 'Translate the following English text to Deutsch: ' + q
        # completion = self.client.chat.completions.create(
        #     model = 'gpt-4o-mini',
        #     messages= [{
        #         'role': 'user',
        #         'content': prompt
        #     }]
        # )
        prompt = """You are a translator who translates languages from English to Deutsch.
Whenever the user gives you a text, you just translate that.
You do not respond with anything other than the translation."""
        completion = self.client.chat.completions.create(
            model = 'gpt-4o-mini',
            messages= [{
                'role': 'system',
                'content': prompt
            }, {
                'role': 'user',
                'content': q
            }]
        )
        return completion.choices[0].message.content


def main():
    pass

if __name__ == '__main__':
    main()