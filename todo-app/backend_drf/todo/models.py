from mongoengine import Document, fields
from datetime import datetime
from django.db import models

# Create your models here.
# class Todo(Document):
#     description = fields.StringField(required=True, max_length=100)
#     done = fields.BooleanField(required=True, default=False)
#     createdAt = fields.DateTimeField(required=True, default=datetime.now(), verbose_name='Created At')
#
#     def __str__(self):
#         return self.description


class Todo(models.Model):
    description = models.CharField(max_length=100, null=False)
    done = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True, verbose_name='Created At')

    class Meta:
        db_table = 'todo'

    def __str__(self):
        return self.description
