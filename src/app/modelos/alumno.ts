export type seccionAlum = 'PGY' | 'MDY' | 'MAT'| 'INU'; //Nombre de la seccion
//Alumno
export interface Alumno{
  rut: number;
  run: string;
  dv: number;
  nombre: string;
  apellido: string;
  edad: number;
  nsec: seccionAlum;
}
// Seccion
export interface seccion{
  id: number;
  nsec: seccionAlum;
}

// Registro Historial
export interface historial{
  fecha: string;
  hora: string;
}
// --registro fecha y hora
// --Alumno de tipo alumno

