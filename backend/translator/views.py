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

from .utils import Translator

load_dotenv()

# OpenAI API Key
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=OPENAI_API_KEY)

# Create your views here.

class TranslateView(APIView):
    def get(self, request):
        q = request.query_params.get('q', '')
        print(q)
        # res = q[::-1]
        res = Translator().translate(q) if q else ''
        return Response({
            'translatedText': res
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