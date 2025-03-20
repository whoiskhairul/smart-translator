from rest_framework import serializers

from .models import AvailableLanguage
class AvailableLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailableLanguage
        fields = ['language_name', 'value']