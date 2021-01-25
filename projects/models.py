from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=254)
    languages = models.CharField(max_length=254)
    site_link = models.URLField(max_length=254)
    github_link = models.URLField(max_length=254)
    image = models.ImageField(default='default_image.jpg')

    def __str__(self):
        return self.name
