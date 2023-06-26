import { Category } from './enums';

interface Book {
    id: number | string;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages?: number;
    markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
};

interface DamageLogger {
    (resson: string): void;
};

interface Person {
    name: string;
    email: string;
};

interface Author extends Person {
    numBookPublished: number;
};

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
};

interface TOptions {
    duration?: number;
    speed?: number;
};

interface A {
    a: number;
};

interface Magazine {
    title(title: any): unknown;
    titles: string;
    publishers: string;
}

interface Shelfitem {
    titles: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export {
    A,
    Author,
    Book,
    DamageLogger as Logger,
    Librarian,
    Magazine,
    Person,
    TOptions,
    Callback
};
