from django.db import models
from django.core.validators import FileExtensionValidator
import datetime


def unique_filename(_, filename):
    name, ext = filename.split('.')
    filename = f'{name}.{datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")}.{ext}'
    return filename

class File(models.Model):
    title = models.CharField(max_length=255)
    transcript = models.TextField(blank=True, null=True)
    file = models.FileField(validators=[FileExtensionValidator(allowed_extensions=['mp3', 'mp4'])], upload_to=unique_filename)
    