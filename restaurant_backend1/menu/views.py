from django.shortcuts import render
from django.http import JsonResponse
from .models import MenuItem

def menu_items(request):
    items = MenuItem.objects.all().values('name', 'price')
    return JsonResponse(list(items), safe=False)

