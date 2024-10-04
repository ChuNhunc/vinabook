import { makeAutoObservable } from 'mobx';
import data from '../data/footerList.json';


export type FooterList = {
    id: number,
    type: string,
    title: string,
    item: string[]
}

export class FooterListStore {
    footerList: FooterList[] = data;
    constructor() {
        makeAutoObservable(this);
    }
}