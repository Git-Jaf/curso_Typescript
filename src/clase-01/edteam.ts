let cursos = ['Typescript', 'Angular'];
console.log('cursos', cursos);

const inscritos = 20;

function suma(a: number, b: number) {
    return a + b;
}

const resultado = suma(2, 3);
console.log(resultado);

// Template literal
let codigo = `
<button>Hola</button>
<div></div>
`;

console.log('codigo', codigo);
let curso = 'Typescript';
let saludo2 = `Bienvenidos al curso de ${curso}`;
console.log('saludo', saludo2);