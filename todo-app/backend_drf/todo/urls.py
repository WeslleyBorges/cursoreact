from django.urls import path, include
from rest_framework_mongoengine import routers
from todo.views import TodoViewSet

router = routers.DefaultRouter()

router.register('todos', TodoViewSet)

urlpatterns = [
    path('', include(router.urls))
]
