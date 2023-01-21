from channels.generic.websocket import AsyncJsonWebsocketConsumer, AsyncWebsocketConsumer
from .transcribe import Transcribe



class TranscriptConsumer(AsyncJsonWebsocketConsumer):

    def __init__(self):
        super().__init__()
        self.transcribe = Transcribe()

    async def connect(self):
        print('connected')
        await self.accept()

    async def disconnect(self, close_node):
        pass
    
    async def receive_json(self, content):
        file_id = content['file']
        data = await self.transcribe.transcribe_file(file_id)
        return await self.send_json({'type': 'TRANSFORM', 'value': data})

        
