from django import forms
from .models import Cliente

class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['nome', 'email', 'telefone', 'cpf', 'data_nascimento', 'endereco', 'cidade', 'estado']
        widgets = {
            'data_nascimento': forms.DateInput(attrs={'type': 'date'}),
        }