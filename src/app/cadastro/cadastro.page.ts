import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  vistoriador = {
    nome: '',
    cpf: '',
    rg: '',
    telefone: '',
    endereco: '',
    cnh: '',
    login: '',
    senha: '',
    selfie: null
  };

  // Armazenar os dados cadastrados
  dadosCadastrados: any[] = [];

  constructor() {}

  onSubmit() {
    // Adiciona o vistoriador à lista de dados cadastrados
    this.dadosCadastrados.push({ ...this.vistoriador });
    // Limpar o formulário após o cadastro
    this.resetForm();
    alert('Vistoriador cadastrado com sucesso!');
  }

  resetForm() {
    this.vistoriador = {
      nome: '',
      cpf: '',
      rg: '',
      telefone: '',
      endereco: '',
      cnh: '',
      login: '',
      senha: '',
      selfie: null
    };
  }

  visualizarDados() {
    // Exibir os dados cadastrados em um alerta ou no console
    if (this.dadosCadastrados.length === 0) {
      alert('Nenhum dado cadastrado!');
    } else {
      let mensagem = 'Dados Cadastrados:\n\n';
      this.dadosCadastrados.forEach((dados, index) => {
        mensagem += `Vistoriador ${index + 1}:\n`;
        mensagem += `Nome: ${dados.nome}\n`;
        mensagem += `CPF: ${dados.cpf}\n`;
        mensagem += `RG: ${dados.rg}\n`;
        mensagem += `Telefone: ${dados.telefone}\n`;
        mensagem += `Endereço: ${dados.endereco}\n`;
        mensagem += `CNH: ${dados.cnh}\n`;
        mensagem += `Login: ${dados.login}\n`;
        mensagem += `Senha: ${dados.senha}\n\n`;
      });
      alert(mensagem); // Exibe os dados em um alerta
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.vistoriador.selfie = file; // Armazenar o arquivo da selfie
    }
  }
}
