from django.contrib import admin
from django.urls import path
from app_CartaoFidelidade import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='login'),
    path('clientes/', views.lista_clientes, name='lista_clientes'),
    path('clientes/<int:cliente_id>/', views.detalhe_cliente, name='detalhe_cliente'),
    path('clientes/adicionar/', views.adicionar_cliente, name='adicionar_cliente'),
    path('clientes/<int:cliente_id>/editar/', views.editar_cliente, name='editar_cliente'),
    path('clientes/<int:cliente_id>/excluir/', views.excluir_cliente, name='excluir_cliente'),
]
