from django.contrib import admin
from .models import AvailableLanguage
# Register your models here.

@admin.register(AvailableLanguage)
class AvailableLanguageAdmin(admin.ModelAdmin):
    list_display = ['language_name']
    search_fields = ['language_name']
    list_filter = ['language_name']
    
