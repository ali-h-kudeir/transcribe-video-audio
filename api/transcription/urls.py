from django.urls import path, include
from rest_framework import routers

from transcription.views import FileView

router = routers.DefaultRouter()

router.register(r'files', FileView)

urlpatterns = [
    path(r'', include(router.urls)),
]