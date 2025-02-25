from django.contrib import admin
from .models import AvailableLanguage
# Register your models here.

@admin.register(AvailableLanguage)
class AvailableLanguageAdmin(admin.ModelAdmin):
    list_display = ['language']
    search_fields = ['language']
    list_filter = ['language']
    
