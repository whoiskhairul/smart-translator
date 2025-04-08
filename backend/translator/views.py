import time

from django.shortcuts import render, HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from .models import AvailableLanguage
from .serializers import AvailableLanguageSerializer
from openai import OpenAI

from dotenv import load_dotenv
import os

from .utils import Translator, LanguageDetection

load_dotenv()

# OpenAI API Key
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=OPENAI_API_KEY)

# Create your views here.

class TranslateView(APIView):
    def get(self, request):
        q = request.query_params.get('q', '')
        sl = request.query_params.get('sl', '')
        tl = request.query_params.get('tl', '')
        # print( 'Source language: ' , sl, tl, q )
        res = q[::-1]
        try:
            sl = LanguageDetection().detect(q) if sl == 'auto' else sl
        except Exception as e:
            sl = 'detect language'
        try:
            res = Translator().translate(q, sl, tl) if q else ''
            print('Translated: ', res)
            success = True
        except Exception as e:
            success = False
            res = q
            print('Error in translateView: ', e)
        # time.sleep(1)
        return Response({
            'success': success,
            'translatedText': res,
            'detectedSourceLanguage': sl,
        })


@api_view(['GET'])
def translate(request):
    return Response("Hello, World!")

class AvailableLanguageView(APIView):
    def get (self, request):
        available_languages = AvailableLanguage.objects.all()
        lang_serializers = AvailableLanguageSerializer(available_languages, many=True)

        return Response(
            lang_serializers.data,
            status=status.HTTP_200_OK
        )