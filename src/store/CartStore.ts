import { makeAutoObservable } from "mobx";
import { Book } from "./booksStore";

type Product = {
    book: Book
    amount: number
}

type Cart = {
    listCart: Product[];
}

export class CartStore {
    listCart: Product[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addProductToCart = (book: Book, amount: number) => {
        const index = this.listCart.findIndex((product) => product.book.id === book.id)
        if (index === -1) {
            this.listCart.push({ book, amount: amount })
        } else {
            this.listCart[index].amount += amount
        }
    }

    getAmount = () => {
        let amount = 0
        this.listCart.map((product) => {
            amount += product.amount
        })
        return amount
    }

    getTotalPrice = () => {
        let totalPrice = 0
        this.listCart.map((product) => {
            if(product.book.priceSale) {
                totalPrice += product.book.priceSale * product.amount
            }else{
                totalPrice += product.book.price * product.amount
            }
        })
        return totalPrice
    }

}