export {}; //Modulo TS
// Alias para tipos de datos parte 2
let curso: string = 'typescript';
// Cursos codigos: Javascript = 1, Typescript = 2;

type Curso = string | number |  boolean;

let cursoNuevo: Curso;
//cursoNuevo = true; 
cursoNuevo = 'Javascript'
cursoNuevo = 2;

function getCurso(): Curso{
    return 1;
}

//Arreglos
let cursos: string[] = ['Javascript', 'Typescript'];
let cursos2: Curso[] = ['Javascript', 'Typescript', 1, true];

console.log('cursos', cursos);
console.log('cursos2', cursos2)