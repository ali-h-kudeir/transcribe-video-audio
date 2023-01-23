import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "conf.settings")

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from transcription import routing

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(routing.websocket_urlpatterns)
})