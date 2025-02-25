from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ('Other Info', {'fields': ('phone_number', 'address', 'date_of_birth', 'profile_picture', 'Subscription_type', 'theme')}),
    )
    list_display = ['username', 'email', 'first_name', 'phone_number', 'Subscription_type',]
    search_fields = ['phone_number', 'email', 'username', 'Subscription_type',]
    list_filter = ['Subscription_type', 'is_superuser', 'is_active',]
    
