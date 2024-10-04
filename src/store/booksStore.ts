import { makeAutoObservable } from "mobx"
import data from '../data/book.json'

export function convertString(str: string) {
    return str
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/ /g, '-')
        .replace(/_/g, '-')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9-]/g, '');
}

export type Book = {
    id: string,
    image: string,
    title: string,
    author: string,
    price: number,
    priceSale: number | null,
    supplier: string,
    publisher: string,
    publishYear: number,
    language: string,
    categoryId: number,
    sale: number,
    description: string,
}

export class BooksStore {
    books: Book[] = data

    constructor() {
        makeAutoObservable(this)
    }
}