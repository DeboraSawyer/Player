class Player { // Objeto: Player.
    constructor(name, x, y) { // constructor(name, x, y): variáveis do construtor.
        // Propriedades são variáveis.
        // Propriedades: name, x, y e jump.
        this.name = name; // this: refere-se ao objeto referenciado no contexto.
        this.x = x;
        this.y = y;
        this.isJumping = false;
    }

    // Métodos são funcões.
    // Métodos: moveLeft, moveRight e getPosition.
    moveLeft() {
        console.log("jogador movendo-se para esquerda ...");
        this.x -= 1;
    }

    moveRight() {
        console.log("jogador movendo-se para direita ...");
        this.x += 1;
    }

    // Funcionalidade: jump.
    jump() {
        if (!this.isJumping) {
            console.log("jogador saltando ...");
            this.isJumping = true;
            this.y += 2; // Aumenta o tempo do salto.
            setTimeout(() => {
                this.y - 2; // Volta a posição y depois de 5 segundos.
                this.isJumping = false;
            }, 500);
        }
    }

    getPosition() {
        console.log("jogador em sua posição atual.");
        return `(${this.x}, ${this.y})`;
    }
}

class Enemy {
    constructor(name, x, y) {
        // Propriedades.
        this.name = name;
        this.x = x;
        this.y = y;
    }

    // Métodos.
    moveLeft() {
        console.log("inimigo movendo-se para esquerda ...");
        this.x -= 1;
    }

    moveRight() {
        console.log("inimigo movendo-se para direita ...");
        this.x += 1;
    }

    getPosition() {
        console.log("inimigo em sua posição atual.");
        return `(${this.x}, ${this.y})`;
    }
}

// Instância: jogador1.
const jogador1 = new Player("Jogador1", 0, 0); // new: cria uma nova instância.

// Instância: inimigo1.
const inimigo1 = new Enemy("Inimigo1", 5, 0);

// Direcionando o jogador1.
jogador1.moveRight();
jogador1.moveRight();

// Direcionando o inimigo1.
inimigo1.moveLeft();

// jogador1 esta pulando.
jogador1.jump();

// Posição atual: jogador1.
console.log(jogador1.getPosition());
// Posição atual: inimigo1.
console.log(inimigo1.getPosition());

// Direcionando o jogador1.
jogador1.moveRight();
jogador1.moveLeft();

// Direcionando o inimigo1.
inimigo1.moveRight();