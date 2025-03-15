from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

class Translator:
    def __init__(self):
        OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
        self.client = OpenAI(api_key=OPENAI_API_KEY)
    
    def translate(self, q):
        prompt = 'Translate the following English text to Deutsch: ' + q
        completion = self.client.chat.completions.create(
            model = 'gpt-4o-mini',
            messages= [{
                'role': 'user',
                'content': prompt
            }]
        )
        # completion = self.client.chat.completions.create(
        #     model = 'gpt-4o-mini',
        #     messages= [{
        #         'role': 'system',
        #         'content': 'Translate the following English text to Deutsch'
        #     }, {
        #         'role': 'user',
        #         'content': q
        #     }]
        # )
        return completion.choices[0].message.content


def main():
    pass

if __name__ == '__main__':
    main()