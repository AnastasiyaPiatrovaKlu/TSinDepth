import { setDefaultConfig, printRefBook, purge, createCustomer, logCategorySearch, getBooksByCategory, getBooksByCategoryPromise, logSearchResult } from './functions';
import { A, Author, Book, Librarian, TOptions, Magazine } from './interfaces';
import { UL, RefBook, Shelf } from './classes';
import { Library } from './classes/library';
import { Category } from './enums';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';
import { UniversityLibrarian } from './classes/university-librarian';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
};

// ----------------------------------------------------------------

// const o = new Object();

// 02.01-1
// console.log(getAllBooks());
// 02.01-2
// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.TypeScript));
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// logBookTitles(getBookTitlesByCategory(Category.HTML));
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// console.log(getBookAuthorByIndex(0));

// console.log(calcTotalPages());

// 03.02
// createCustomer('Henri', 66, 'Filster');
// console.log(getBookTitlesByCategory());
// console.log(getBookByID(1));
// const myBooks = checkoutBooks('Anna', ...[1, 2, 4]);
// console.log(myBooks);
// getAllBooks();

// task 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(false));
// console.log(getTitles('Lea Verou'));

// task 03.04
// console.log(bookTitleTransform('Typescript'));
// console.log(bookTitleTransform('123'));

// task 04.01
// const myBook: Book = {
// id: 5,
// title: 'Colors, Background, and Gradients',
// author: 'Eric A. Meyer',
// available: true,
// category: Category.CSS,
// pages: 1000,
// markDamaged(reason: string) {
// console.log(`Damaged: ${reason}`);
// }
// year: 2015,
// copies: 3,
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// task 04.02
// const logDamage: DamageLogger = (reason: string) => {
// console.log(`Damage log: ${reason}`);
// };
// console.log(logDamage('missing back cover'));

// task 04.03
const favoriteAuthors: Author = {
    name: 'John',
    email: 'john@gmail.com',
    numBookPublished: 0
};

// const favoriteLibrarian: Librarian = {
// name: 'Laura',
// email: 'laura@gmail.com',
// department: 'Classical literature',
// assistCustomer(custName: string, bookTitle: string): void {
// console.log(`${custName} ${bookTitle}`);
// },
// };

// task 04.04
const offer: any = {
    book: {
        title: 'Essential Typescript',
    },
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors[0]);
// console.log(offer.book.authors[0].name);

// task 04.05
// console.log(getproperty(myBook, 'title'));
// console.log(getproperty(myBook, 'markDamaged'));
// console.log(getproperty(myBook, 'isbn'));

// task 05.01
// const ref = new ReferenceItem(1, 'Learn TS', 2013);
// console.log(ref);
// ref.printItem();
// ref.publisher ='abc';
// console.log(ref.publisher);
// console.log(ref.getID());

// task 05.02, 05.03
// const refBook = new Encyclopedia(3, 'Learn Programming', 2013, 3);
// const refBook = new RefBook(1, 'Learn TS', 2013, 2);
// refBook.printItem();
// console.log(refBook);
// refBook.printCitation();

// task 05.04
// interface  AA extends A, Librarian{

// }

// const favoriteLibrarian: A & Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'All about TS');
// console.log(favoriteLibrarian);
// favoriteLibrarian.a = 2;

// task 05.05
// const personBook: PersonBook = {
// author: 'Anna',
// name: "Laura",
// available: true,
// category: Category.TypeScript,
// email: 'anna@gmail.com',
// id: 1,
// title: 'All about TS',
// };
// console.log(personBook);

// const options: TOptions = { duration: 200 };
// setDefaultConfig(options);
// console.log(options);

// task 06.03
// const refBook = new RefBook(1, 'Learn TS', 2013, 2);
// printRefBook(refBook);
// const ul = new UL.UniversityLibrarian();
// printRefBook(ul);

// Task 06.05
// const isBoolean = true;

// if (isBoolean) {
// import('./classes')
// .then(m => {
// const reader = new  m.Reader();
// reader.name = 'Anna';
// console.log(reader);
// })
// .catch(err => console.log(err));
// const m = await import ('./classes');
// const reader = new m.Reader();
// reader.name = 'Boris';
// console.log(reader);
// }

// Task 06.06
// let lib: Library = new Library();
// let lib: Library = {
// id: 1,
// name: 'Anna',
// address: 'Grodno...'
// };
// console.log(lib);

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 10, title: 'Code Complete', author: 'Steve McComnel', available: true, category: Category.Software },
    { id: 10, title: '8-Bit Graphics with Cobol', author: 'A. B', available: true, category: Category.Software },
    { id: 10, title: 'Cool autoexec.bat Scripts', author: 'C. D', available: true, category: Category.Software }
];

// const r1: Book[] = purge(inventory);
// console.log(r1);
// const r2 = purge([1, 2, 3]);
// console.log(r2);
// const purgeNumbers = purge<number>;
// console.log(purgeNumbers([1, 2, 3]));
// console.log(purgeNumbers(['1', '2', '3']));

// task 07.02
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);
//
// const magazines: Magazine[] = [
// { title: 'Programming Language Monthly', publisher: 'Code Mags' },
// { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
// { title: 'Five Points', publisher: 'GSU' },
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five stories'));
// const numberShelf = new Shelf<Magazine>();
// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[3], 'author'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
// author: 'Anna',
// available: false,
// category: Category.Angular,
// id: 1,
// markDamaged: (a: string) => {},
// pages: 200,
// title: 'Unknown'
// };

// const updatedBook: UpdatedBook = {};

// const params: Parameters<CreateCustomerFunctionType> = ['Anna', 30, 'Grodno'];
// createCustomer(...params);

// export function createCustomer(name: string, age?: number, city?: string): void {

// const params: [string, number?, string?] = ['Anna',20, 'Grodno'];
// const params: Parameters<typeof createCustomer> = ['Anna',20, 'Grodno'];
// createCustomer(...params);

// Task 08.01
// const ul = new UL.UniversityLibrarian();
// UL.UniversityLibrarian['a'] = 1;
// console.log(UL.UniversityLibrarian['a'] );

// const proto = Object.getPrototypeOf(ul);
// proto['b'] = function () { };
// console.log(ul);

// Task 08.02
// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// console.log(ul);
// (ul as unknown as { printLibrarian: () => void}).printLibrarian();
// (ul as UL.UniversityLibrarian & { printLibrarian: () => void}).printLibrarian();
// (ul as any).printLibrarian();

// Task 08.03
// const ul = new UL.UniversityLibrarian();
// ul.assistCustomer = function () { };
// ul.assistFaculty();
// ul.teachComunity = function () { };
// Object.getPrototypeOf(ul).teachComunity = function () { };

// Task 08.04
// const refBook = new RefBook(1, 'Learn Programming', 2013, 2);
// refBook.printItem();

// Task 08.05, 08.06
// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// ul.assistCustomer('Boris', 'Learn TS');
// console.log(ul);

// Task 08.07
// const refBook = new RefBook(1, 'Learn Programming', 2013, 2);
// refBook.copies = 10;

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
// .then(data => {
// console.log(data);
// return Promise.resolve(data.length);
// })
// .then(len => {
// console.log(len);
// })
// .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
// .then(data => console.log(data))
// .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03
console.log('Begin');
logSearchResult(Category.JavaScript);
logSearchResult(Category.Software)
    .catch(console.log);
console.log('End');





