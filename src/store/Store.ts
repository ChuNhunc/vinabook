import { makeAutoObservable } from "mobx";
import { CategoriesStore } from "./categoriesStore";
import { BooksStore } from "./booksStore";
import { PublisherStore } from "./publisherSrore";
import { FooterListStore } from "./footerListStore";
import { TabProductStore } from "./TabProductStore";
import { CartStore } from "./CartStore";



export class Store {
    categoriesStore = new CategoriesStore(); 
    booksStore = new BooksStore();
    publisherStore = new PublisherStore();
    footerListStore = new FooterListStore();
    tabProductStore = new TabProductStore();
    cartStore = new CartStore();
    constructor() {
        makeAutoObservable(this);
    }

    
    getCatName = (catId: number): string => {
        for (const category of this.categoriesStore.categories) {
            if (category.id === catId) {
                return category.name;
            }
            if (category.subCategories) {
                for (const subCategory of category.subCategories) {
                    if (subCategory.id === catId) {
                        return subCategory.name;
                    }
                }
            }
        }
        return "Category not found";
    }
}