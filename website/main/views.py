from django.shortcuts import render
from django.http import HttpResponse
from .models import Tutorial


def homepage(request):
    return render(request=request,
                  template_name='home.html')


def about(request):
    return render(request=request,
                  template_name='about.html')


def projects(request):
    return render(request=request,
                  template_name='projects.html')


def blog(request):
    return render(request=request,
                  template_name='blog.html',
                  context={'tutorials': Tutorial.objects.all})


def resume(request):
    return render(request=request,
                  template_name='resume.html')
