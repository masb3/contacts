from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions


from .models import Contact
from .serializers import ContactSerializer


def index(request):
    template = 'core/index.html'
    return render(request, template)


class ContactApiViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

