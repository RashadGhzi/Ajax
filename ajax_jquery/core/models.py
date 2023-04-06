from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=200)
    roll = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(400)])
    age = models.IntegerField(validators=[MinValueValidator(20), MaxValueValidator(60)])