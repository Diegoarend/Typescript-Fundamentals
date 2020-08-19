const person3: object = { 
    name : 'Max',
    age: 30
}

//não é muito indicado, um dos casos indicados
// é quando há uma tupla
const person2: {
    name: string;
    age: number;
    hobbies:string[];
    // estamos dizendo que essa tupla deverá um número como 1 valor
    //e uma string como 2 valor. 
    role:[number, string];

}= { 
    name : 'Max',
    age: 30,
    hobbies: ['sports','cooking'],
    //role is a tuple
    role:[2, 'author']
}

//enum é um metodo de enumerar valores ao invés de precisar criar constantes globais
// para represnetar tais valores. não existe no JS

enum CargoX { ADMIN='ADMIN', READ_ONLY=1,AUTHOR=2}

const person = { 
    name : 'Max',
    age: 30,
    hobbies: ['sports','cooking'],
    cargo: CargoX.ADMIN
}

console.log(person.name)

// como não inferimos um valor pra variável, podemos inferir um tipo
let favoriteActivities: string[]
favoriteActivities = ['sports']

for (const hobby of person.hobbies){
    //como o typescript sabe que hobby é uma string
    // o linter já exibe metodos de strings
    console.log(hobby.toUpperCase())
}

