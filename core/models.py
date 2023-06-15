from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    author_first_name = models.CharField(max_length=100)
    author_last_name = models.CharField(max_length=100)

    def __str__(self):
        return self.title
    
    