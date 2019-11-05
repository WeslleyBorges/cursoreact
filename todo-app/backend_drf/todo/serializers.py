from .models import Todo
# from rest_framework_mongoengine import serializers
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Todo
