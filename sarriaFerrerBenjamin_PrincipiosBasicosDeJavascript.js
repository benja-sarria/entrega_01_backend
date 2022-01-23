class Usuario {
    constructor(name, lastName, books = [], pets = []) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }
    getFullName() {
        let userFullName = `${this.name} ${this.lastName}`;
        // retorna el nombre de usuario completo
        return userFullName;
    }
    addPet(petName) {
        this.pets.push(petName);
    }
    petCount() {
        let totalPets = this.pets.length;
        return totalPets;
    }
    addNewBook(bookName, author) {
        const newBook = {
            bookName,
            author,
        };
        this.books.push(newBook);
    }
    getBookNames() {
        const bookNamesArray = [];
        this.books.forEach((bookObject) => {
            bookNamesArray.push(bookObject.bookName);
        });
        return bookNamesArray;
    }
}

// Instanciando la Clase
const pruebaUsuario = new Usuario("Benjamin", "Sarria", [], []);

// Probando método fullName
let fullName = pruebaUsuario.getFullName();
console.log(fullName);
console.log(typeof fullName);

// Probando método addPet y petCount
console.log(pruebaUsuario.pets);
pruebaUsuario.addPet("Don Juan");
console.log(pruebaUsuario.pets);
console.log(pruebaUsuario.petCount());
pruebaUsuario.addPet("Don Gato");
pruebaUsuario.addPet("Quijote");
console.log(pruebaUsuario.pets);
console.log(pruebaUsuario.petCount());

// Probando método addNewBook
console.log(pruebaUsuario.books);
pruebaUsuario.addNewBook("Lord of the rings", "J.R.R. Tolkien");
console.log(pruebaUsuario.books);
pruebaUsuario.addNewBook("The Witcher", "Andrzej Sapkowski");

// Probando método getBookNames
console.log(pruebaUsuario.books);
console.log(pruebaUsuario.getBookNames());
