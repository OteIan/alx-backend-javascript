export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Joe',
    lastName: 'Doe',
    age: 40,
    location: 'Eldoret',
}

const student2: Student = {
    firstName: 'Mark',
    lastName: 'Collins',
    age: 29,
    location: 'Nairobi',
}

const studentsList: Array<Student> = [student1, student2];

