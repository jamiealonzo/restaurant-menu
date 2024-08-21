from django.urls import path
from .views import MenuItemList

urlpatterns = [
    path('menu-items/', MenuItemList.as_view(), name='menu-items'),
]
