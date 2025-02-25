from django.shortcuts import render, HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from .models import AvailableLanguage
from .serializers import AvailableLanguageSerializer

# Create your views here.

class TranslateView(APIView):
    def get(self, request):
        return Response("Hello, World! class based view")
    def post(self, request):
        pass

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