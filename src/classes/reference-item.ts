/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */

import { timeOut } from "../decorators";

// const RefItem = class ReferenceItem {
abstract class ReferenceItem {
    // title: string;
    // year: number;
    //
    // constructor(newTitle: string, year: number) {
    // console.log('Creating a new referenceItem...');
    // this.title = newTitle;
    // this.year = year;
    // }

    private _publisher: string;

    #id: number;

    static department: string = 'Research Dep.';
    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new referenceItem...');
        this.#id = id;
    };

    @timeOut(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);
    }

    getID(): number {
        return this.#id;
    }
    abstract printCitation(): void;
}

export { ReferenceItem };