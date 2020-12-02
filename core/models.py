from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100)
    code_name = models.CharField(max_length=100)
    phone = models.IntegerField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.name
