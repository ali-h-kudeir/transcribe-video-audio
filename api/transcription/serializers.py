from rest_framework import serializers
from django.core.validators import FileExtensionValidator

from .models import File

class FileSerializer(serializers.ModelSerializer):
    file = serializers.FileField(validators=[FileExtensionValidator(allowed_extensions=['mp3', 'mp4'])])
    class Meta:
        model = File
        fields = ('id', 'title', 'transcript', 'file')