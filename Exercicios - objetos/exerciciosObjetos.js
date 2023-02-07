


/* Exercicios do MDN sobre classes e herança



class Formato {
    nome; 
    numero_lados;
    tamanho_lados;

    constructor (nome, numero_lados, tamanho_lados) {
        this.nome = nome;
        this.numero_lados = numero_lados;
        this.tamanho_lados = tamanho_lados;
    };

    calc_perimetro () {

        let perimetro = (`${this.numero_lados * this.tamanho_lados}`);

        console.log(perimetro);
        }
}

let quadrado = new Formato ("quadrado", 4, 6);
let triangulo = new Formato ("triângulo", 3, 7);


class Square extends Formato {

    tamanho_lados1;

    constructor (nome, numero_lados, tamanho_lados, tamanho_lados1) {

        super(nome, numero_lados, tamanho_lados);
        this.tamanho_lados1 = tamanho_lados1;
    }

    calc_area () {
        let area = (`${this.tamanho_lados1 * this.tamanho_lados1}`);
        console.log(area)
    }
}

let quadrado1 = new Square ("quadrado", 4, 4, 8); */




/* Brincando com classes


class Estudante {

    nome;
    turma;
    idade;

    constructor(nome, turma, idade) {

        this.nome = nome;
        this.turma = turma;
        this.idade = idade;

        }

    identificação() {
        console.log(`Olá, eu sou ${this.nome}, tenho ${this.idade} anos e estou na turma ${this.turma}`);
    }
}

let estudante1 = new Estudante("Eduarda Endler Lopes", "3B", 23);
let estudante2 = new Estudante("Pedro de Castro Tedesco", "3A", 25);


class EstudanteMedia extends Estudante {

    nota1;
    nota2;
    nota3;

    constructor (nome, turma, idade, nota1, nota2, nota3) {
        super(nome, turma, idade);
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3
    };

    calculaMedia () {
        let media = (`${(this.nota1 + this.nota2 + this.nota3) / 3}`);
        console.log(media);
    }
}

estudante1 = new EstudanteMedia ("Eduarda Endler Lopes", "3B", 23, 8.8, 7.9, 9);
estudante2 = new EstudanteMedia ("Pedro de Castro Tedesco", "3A", 25, 7.7, 8.5, 7.9);



class EstudantePrimario extends EstudanteMedia {

    cidade;
    estado; 

    constructor (nome, turma, idade, nota1, nota2, nota3, cidade, estado) {

        super(nome, turma, idade, nota1, nota2, nota3);
        this.cidade = cidade;
        this.estado = estado;
    }

    apresentação () {
        console.log(`Olá, eu sou ${this.nome} e moro em ${this.cidade} no estado de ${this.estado}. Tenho dois amigos que são a ${estudante1.nome} e o ${estudante2.nome}`);
    }
}

let estudante3 = new EstudantePrimario ("Virgínia da Silva", "3B", 24, 9.8, 5.6, 7, "Porto Alegre", "Rio Grande do Sul"); */