from django.conf.urls import url
from .views import topic_list

urlpatterns = [
    url(r'^topics/', topic_list),
]
