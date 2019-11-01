from .models import Todo
from rest_framework_mongoengine import serializers


class TodoSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Todo
