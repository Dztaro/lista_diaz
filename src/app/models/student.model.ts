export interface Student {
    id: number;
    name: string;
    age: number;
    grade: number;
    status: 'aprobado' | 'desaprobado' | 'pendiente';
}