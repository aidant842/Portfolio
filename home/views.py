from django.shortcuts import render
from django.contrib import messages
from django.conf import settings
from django.core.mail import send_mail

from projects.models import Project


def index(request):
    """ A view to return the index page """

    projects = Project.objects.all()

    if request.method == 'POST':
        from_email = request.POST.get('email')
        name = request.POST.get('name')
        message = request.POST.get('message')

        subject = f'Message from { name }'

        send_mail(
                subject,
                message,
                from_email,
                [settings.DEFAULT_FROM_EMAIL]
                )
        messages.success(request, 'Thank you, your email was sent, I\'ll be in contact soon.')

    context = {
        'projects': projects,
    }

    return render(request, 'home/index.html', context)
