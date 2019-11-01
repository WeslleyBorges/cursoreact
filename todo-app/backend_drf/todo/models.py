from mongoengine import Document, fields
from datetime import datetime


# Create your models here.
class Todo(Document):
    description = fields.StringField(required=True, max_length=100)
    done = fields.BooleanField(required=True, default=False)
    createdAt = fields.DateTimeField(required=True, default=datetime.now(), verbose_name='Created At')

    def __str__(self):
        return self.description
