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

class Funcionário {
    Nome
    Salario
}
class Gerente extends Funcionário {
    Departamento

    ExibirInformacoes() {
        console.log("Nome do Gerente: " + this.Nome)
        console.log("Salário do Gerente: " + this.Salario)
        console.log("Departamento do Gerente: " + this.Departamento)
    }
}
class Vendedor extends Funcionário {
    PorcentualComissao

    CalcularSalario() {
        let salarioCalculado = this.Salario + (this.Salario * (this.PorcentualComissao / 100))
        return salarioCalculado
    }

    ExibirInformacoes() {
        console.log("Nome do vendedor: " + this.Nome)
        console.log("Salário do vendedor: " + this.Salario)
        console.log("Porcentual Comissão: " + this.PorcentualComissao)
        console.log("O Salário com comissão: " + this.CalcularSalario())
    }
}

let primeiroFuncionario = new Funcionário()
primeiroFuncionario.Nome = "Leonardo"
primeiroFuncionario.Salario = 1200


let PrimeiroGerente = new Gerente()
PrimeiroGerente.Nome = "Leo Motorista"
PrimeiroGerente.Salario = 2500
PrimeiroGerente.Departamento = "Departamento B"

let primeiroVendedor = new Vendedor()
primeiroVendedor.Nome = "Vendedor Leo"
primeiroVendedor.Salario = 1500
primeiroVendedor.PorcentualComissao = 5 + "%"


