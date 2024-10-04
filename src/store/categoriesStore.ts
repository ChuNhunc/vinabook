import { makeAutoObservable } from "mobx";
import data from '../data/categories.json';

export type SubCategory = {
    id: number,
    name: string
}

export type Category = {
    id: number,
    name: string,
    subCategories: SubCategory[]
}

export class CategoriesStore {
    categories: Category[] = data;
    constructor() {
        makeAutoObservable(this);
    }
}