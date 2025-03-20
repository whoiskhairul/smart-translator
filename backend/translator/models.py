from django.db import models

# Create your models here.

class AvailableLanguage(models.Model):
    language_name = models.CharField(max_length=255)
    value = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.language_name