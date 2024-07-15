import { Injectable } from "@nestjs/common";

export interface IProduct {
    name: string;
    price : number;
}


@Injectable()
export class ProductFactory {
    createProduct(type: string): IProduct {
        if( type === 'book') {
            return new Book();
        } else if(type === 'movie') {
            return new Movie();
        } else if(type === 'music') {
            return new Music();
        } else {
            throw new Error(`Invalid product type : ${type}`);
        }
    }
}

export class Book implements IProduct {
    name = 'Book';
    price = 100;
}
export class Movie implements IProduct {
    name = 'Movie';
    price = 200;
}
export class Music implements IProduct {
    name = 'Music';
    price = 5;
}