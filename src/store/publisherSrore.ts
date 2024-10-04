import { makeAutoObservable } from 'mobx';
import data from '../data/publisher.json';

export type Publisher = {
    id: number,
    name: string,
    image: string
}

export class PublisherStore {
    publishers: Publisher[] = data
    constructor() {
        makeAutoObservable(this)
    }
}