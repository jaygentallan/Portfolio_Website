from django.shortcuts import render
from django.http import HttpResponse
from .models import Tutorial


def homepage(request):
    return render(request=request,
                  template_name='main/home.html')


def about(request):
    return render(request=request,
                  template_name='main/about.html')


def projects(request):
    return render(request=request,
                  template_name='main/projects.html')


def blog(request):
    return render(request=request,
                  template_name='main/blog.html',
                  context={'tutorials': Tutorial.objects.all})


def resume(request):
    return render(request=request,
                  template_name='main/resume.html')
