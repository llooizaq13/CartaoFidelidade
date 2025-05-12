from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Cliente
from .forms import ClienteForm

@login_required
def index(request):
    return render(request, 'login_cadastro/login.html')

@login_required
def lista_clientes(request):
    clientes = Cliente.objects.filter(ativo=True)
    return render(request, 'login_cadastro/clientes/lista_clientes.html', {'clientes': clientes})

@login_required
def detalhe_cliente(request, cliente_id):
    cliente = get_object_or_404(Cliente, id=cliente_id)
    return render(request, 'login_cadastro/clientes/detalhe_cliente.html', {'cliente': cliente})

@login_required
def adicionar_cliente(request):
    if request.method == 'POST':
        form = ClienteForm(request.POST)
        if form.is_valid():
            cliente = form.save()
            messages.success(request, f'Cliente {cliente.nome} adicionado com sucesso!')
            return redirect('lista_clientes')
    else:
        form = ClienteForm()
    return render(request, 'login_cadastro/clientes/form_cliente.html', {'form': form, 'titulo': 'Adicionar Cliente'})

@login_required
def editar_cliente(request, cliente_id):
    cliente = get_object_or_404(Cliente, id=cliente_id)
    if request.method == 'POST':
        form = ClienteForm(request.POST, instance=cliente)
        if form.is_valid():
            form.save()
            messages.success(request, f'Cliente {cliente.nome} atualizado com sucesso!')
            return redirect('lista_clientes')
    else:
        form = ClienteForm(instance=cliente)
    return render(request, 'login_cadastro/clientes/form_cliente.html', {'form': form, 'titulo': 'Editar Cliente'})

@login_required
def excluir_cliente(request, cliente_id):
    cliente = get_object_or_404(Cliente, id=cliente_id)
    if request.method == 'POST':
        cliente.ativo = False  # Soft delete
        cliente.save()
        messages.success(request, f'Cliente {cliente.nome} removido com sucesso!')
        return redirect('lista_clientes')
    return render(request, 'login_cadastro/clientes/confirmar_exclusao.html', {'cliente': cliente})
