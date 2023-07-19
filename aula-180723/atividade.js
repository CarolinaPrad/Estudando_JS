function gerarTabelaAlunos(alunos) {
    var tabela = document.createElement("table");
    var cabecalho = document.createElement("tr");
    
    var thNome = document.createElement("th");
    thNome.textContent = "Nome";
    cabecalho.appendChild(thNome);
    
    var thIdade = document.createElement("th");
    thIdade.textContent = "Idade";
    cabecalho.appendChild(thIdade);
    
    var thNota = document.createElement("th");
    thNota.textContent = "Nota";
    cabecalho.appendChild(thNota);
    
    tabela.appendChild(cabecalho);
    
    for (var i = 0; i < alunos.length; i++) {
      var aluno = alunos[i];
      var linha = document.createElement("tr");
      
      var tdNome = document.createElement("td");
      tdNome.textContent = aluno.nome;
      linha.appendChild(tdNome);
      
      var tdIdade = document.createElement("td");
      tdIdade.textContent = aluno.idade;
      linha.appendChild(tdIdade);
      
      var tdNota = document.createElement("td");
      tdNota.textContent = aluno.nota;
      linha.appendChild(tdNota);
      
      tabela.appendChild(linha);
    }
    
    return tabela;
  }
  
  // Exemplo de uso:
  var alunos = [
    { nome: "João Paulo", idade: 20, nota: 8.5 },
    { nome: "Maria Clara", idade: 19, nota: 9.0 },
    { nome: "Pedro Costa", idade: 21, nota: 7.5 }
    { nome: "Joelma Lopes", idade: 19, nota: 9.0 },
    { nome: "Guilherme Andrade", idade: 21, nota: 7.5 }
  ];
  
  var tabelaAlunos = gerarTabelaAlunos(alunos);
  
  // Adicione a tabela ao elemento desejado no documento HTML
  var elementoTabela = document.getElementById("tabela-alunos");
  elementoTabela.appendChild(tabelaAlunos);
  