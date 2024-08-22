from django.contrib import admin
from django.urls import path
from django.shortcuts import redirect 
from . import views  

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('menu/', views.menu_view, name='menu'),  
    path('', views.home_view, name='home'),  
    
]
