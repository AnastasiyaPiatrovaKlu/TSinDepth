import { format, freeze, logParameter, logger, writable } from '../decorators';
import * as Interfaces from './../interfaces';


// @freeze(UniversityLibrarian.name)
// @logger
class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A {
    @format() name: string;
    email: string;
    department: string;

    a: number = 1;

    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachComunity(): void {
        console.log('Teaching community');
    }
};

export { UniversityLibrarian };