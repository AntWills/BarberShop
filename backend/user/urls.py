from django.urls import path
from .views import *

urlpatterns = [
    path("user", UserViweCrud.as_view()),
]
