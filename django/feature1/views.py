from django.shortcuts import render
#this is the main view file of feature1 app
def Home(request):
    return render(request, 'home.html')