from django.db import models

# Create your models here.

class AvailableLanguage(models.Model):
    language = models.CharField(max_length=255)

    def __str__(self):
        return self.language