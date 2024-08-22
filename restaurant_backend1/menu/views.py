from django.http import JsonResponse

def home_view(request):
    data = {"message": "Welcome to Tato's Paw-some Bistro!"}
    return JsonResponse(data)

def menu_view(request):
    data = {
        "menu": [
            {"name": "Sandwich", "price": "$12.99"},
            {"name": "Soup", "price": "$8.99"},
            {"name": "Salad", "price": "$10.99"}
        ]
    }
    return JsonResponse(data)

