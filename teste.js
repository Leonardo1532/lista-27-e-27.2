/*
1. Criar uma classe Funcionário que possui as propriedades Nome e Salário;

2. Criar a classe Gerente que herda da classe Funcionário e possui a propriedade
Departamento;

3. Criar a classe Vendedor que também herda de Funcionário e possui a propriedade
PercentualComissao;

4. Na classe Gerente implementar um método ExibirInformacoes() que deve exibir no
console todas as propriedades de um gerente: Nome, Salário e Departamento;

5. Na classe Vendedor implementar um método CalcularSalario() que deve retornar o
valor do Salário acrescido do PercentualComissao;

6. Na classe Vendedor implementar o método ExibirInformacoes() que deve exibir no
console as seguintes informações do Vendedor: Nome, Salario, Salario com
comissão e o PercentualComissao.
*/

// 1. Crie um método construtor para cada classe que receba como parâmetro as
// informações que serão atribuídas as propriedades.

class Funcionário {
    Nome
    Salario
    constructor(nome, salario){
        this.Nome = nome
        this.Salario = salario
    }
}
class Gerente extends Funcionário {
    Departamento
    constructor(nome, salario, departamento){
        super(nome, salario)
        this.Departamento = departamento
    }
    
    ExibirInformacoes() {
        console.log("Nome do Gerente: " + this.Nome)
        console.log("Salário do Gerente: " + this.Salario)
        console.log("Departamento do Gerente: " + this.Departamento)
    }
}
class Vendedor extends Funcionário {
    PorcentualComissao
    constructor(nome, salario, porcentualcomissao){
        super(nome,salario)
        this.PorcentualComissao = porcentualcomissao
    }

    CalcularSalario() {
        let salarioCalculado = this.Salario + (this.Salario * (this.PorcentualComissao / 100))
        return salarioCalculado
    }

    ExibirInformacoes() {
        console.log("Nome do vendedor: " + this.Nome)
        console.log("Salário do vendedor: " + this.Salario)
        console.log("Porcentual Comissão: " + this.PorcentualComissao + "%")
        console.log("O Salário com comissão: " + this.CalcularSalario())
    }
}

let PrimeiroFuncionario = new Funcionário("Leonardo", 1200)


let PrimeiroGerente = new Gerente("Leo Motorista", 2500, "Departamento B")


let PrimeiroVendedor = new Vendedor("Vendedor Leo", 1500, 5)


let SegundoVendedor = new Vendedor("Vendedor Tiago", 1500, 5)


let TerceiroVendedor = new Vendedor("Vendedor Lucas", 1500, 5)



/*
1. Criar uma classe Produto com as propriedades Nome e Valor;

2. Criar a classe Venda com as propriedades Vendedor que deve ser um objeto da
classe Vendedor criada anteriormente, ListaDeProdutos que deve ser um array e
ValorTotal;

3. Na classe Venda implementar um método AdicionarProduto(), esse método deve
criar um novo Produto e adicionar ele na propriedade ListaDeProdutos;

4. Na classe Venda implementar um método CalcularTotal() que deve somar os valores
de todos os Produtos na ListaDeProdutos e salvar na propriedade ValorTotal o
resultado dessa soma;

5. Na classe Venda implementar um método FinalizarVenda() que deve exibir no
console o nome do Vendedor e o ValorTotal da venda.
*/

// Parte 2: 1. Crie um método construtor para cada classe que receba como parâmetro as
// informações que serão atribuídas as propriedades, com exceção da ListaDe
// Produtos e ValorTotal da classe Venda.

class Produto {
    Nome
    Valor
    constructor(nome, valor) {
        this.Nome = nome
        this.Valor = valor
    }
}
class Venda {
    Vendedor
    ListaDeProdutos = []
    ValorTotal

    constructor(vendedor){
        this.Vendedor = vendedor
    }

    AdicionarProduto(produto) {
        this.ListaDeProdutos.push(produto)
        console.log("Produto adicionado com sucesso")
    }

    CalcularTotal() {
        this.ValorTotal = 0
        for (let contador = 0; contador < this.ListaDeProdutos.length; contador++) {
            this.ValorTotal = this.ValorTotal + this.ListaDeProdutos[contador].Valor
        }
    }

    FinalizarVenda() {
        console.log("O nome do vendedor é: " + this.Vendedor.Nome)
        console.log("O Valor total da Venda é: " + this.ValorTotal)
    }
}

let produtoOculos = new Produto("Óculos", 200)
let produtoBolsa = new Produto("Bolsa", 550)
let produtoCamiseta = new Produto("Camiseta", 350)


let Venda1 = new Venda(PrimeiroVendedor)
let Venda2 = new Venda(SegundoVendedor)
let Venda3 = new Venda(TerceiroVendedor)