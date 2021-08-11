export {}; //Modulo TS
// Alias para tipos de datos
let curso: string = 'typescript';
// Cursos codigos: Javascript = 1, Typescript = 2;
let cursoNuevo: string | number;
//cursoNuevo = true; 
cursoNuevo = 'Javascript'
cursoNuevo = 2;

function getCurso(): string | number{
    return 1;
}

//Arreglos
let cursos: string[] = ['Javascript', 'Typescript'];
let cursos2: (string | number)[] = ['Javascript', 'Typescript', 1];

console.log('cursos', cursos);
console.log('cursos2', cursos2)