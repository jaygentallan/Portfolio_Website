from django.contrib import admin
from .models import Blog
from tinymce.widgets import TinyMCE
from django.db import models


class BlogAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Title\date", {"fields": ["blog_published", "blog_title"]}),
        ("Content", {"fields": ["blog_content"]})
    ]

    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()}
    }


admin.site.register(Blog, BlogAdmin)

