from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class User(AbstractUser):
    phone_number = PhoneNumberField(blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)

    SUBSCRIPTION_CHOICES = [
        ('Free', 'Free'),
        ('Paid', 'Paid'),
    ]
    Subscription_type = models.CharField(max_length=20, choices= SUBSCRIPTION_CHOICES, default='Free')

    THEME_CHOICES = [
        ('Light', 'Light'),
        ('Dark', 'Dark'),
    ]
    theme = models.CharField(max_length=20, choices= THEME_CHOICES, default='Light')

