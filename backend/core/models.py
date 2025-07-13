from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Product(models.Model):
    CATEGORY_CHOICES = [
        ('flour', 'Flour'),
        ('sugar', 'Sugar'), 
        ('salt', 'Salt'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity_available = models.PositiveIntegerField()
    image = models.ImageField(upload_to='products/', blank=True, null=True)  # Can store direct image URL
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=4.5)  # Optional: avg rating
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.quantity_available} available)"
    

class Staff(AbstractUser):
    is_inventory_manager = models.BooleanField(default=True)

    def __str__(self):
        return self.username