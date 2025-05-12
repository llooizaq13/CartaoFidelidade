from django.contrib import admin
from .models import Cliente

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'telefone', 'data_cadastro', 'ativo')
    list_filter = ('ativo', 'data_cadastro')
    search_fields = ('nome', 'email', 'telefone', 'cpf')
    date_hierarchy = 'data_cadastro'