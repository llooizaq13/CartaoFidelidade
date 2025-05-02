from django.contrib import admin
from django.urls import path
from app_CartaoFidelidade import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.login, name='login'),
]
