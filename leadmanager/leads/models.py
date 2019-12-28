from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100,)
    email = models.EmailField(max_length=100, unique=True)
    message = models.TextField(max_length=255, blank=True)
    owner = models.ForeignKey(User, related_name="leads", null=True, on_delete= models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)