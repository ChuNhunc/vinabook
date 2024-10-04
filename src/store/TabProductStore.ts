import { tab } from '@testing-library/user-event/dist/tab';
import books from '../data/book.json';
import { Book } from './booksStore';
import { Tab } from '@mui/material';
import { makeAutoObservable } from 'mobx';
export type TabProduct = {
    id: number,
    name: string,
    books: Book[]
}
const TabProduct: TabProduct[] =[
    {
        id: 1,
        name: 'Sách Mới Nổi Bật',
        books: books.slice(0, 8)
    },
    {
        id: 2,
        name: 'Sách Khuyến Mãi',
        books: books.slice(8, 15)
    }
]

export class TabProductStore {
    product: TabProduct[] = TabProduct;

    constructor() {
        makeAutoObservable(this);
    }
}