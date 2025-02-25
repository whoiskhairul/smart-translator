from django.urls import path
from .views import TranslateView, translate, AvailableLanguageView

urlpatterns = [
    path('', TranslateView.as_view(), name='translate'),
    # path('', translate, name='translateq'),
    path('languages/', AvailableLanguageView.as_view(), name='languages')
]