export {}

//Aserciones de tipo en typescript (Type Aseertions)
let codigoCurso: any;
codigoCurso = 100;
let codigoNumeroCurso: number = <number>codigoCurso; //Convertir o castear es asercion
console.log('codigoNumeroCurso', codigoNumeroCurso);

type Estudiante = {nombre: string, curso: string};

let estudiante = <Estudiante>{};
estudiante.nombre = 'Roberto';