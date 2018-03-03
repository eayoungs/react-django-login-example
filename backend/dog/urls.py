from django.conf.urls import url

from .views import DogList

urlpatterns = [
    url(r"^$", DogList.as_view(), name='dog-list'),

]
