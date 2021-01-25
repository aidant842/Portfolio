from django.shortcuts import render
from projects.models import Project


def index(request):
    """ A view to return the index page """
    projects = Project.objects.all()

    context = {
        'projects': projects,
    }

    return render(request, 'home/index.html', context)
