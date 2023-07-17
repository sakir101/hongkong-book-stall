export interface IBook {
    _id: number;
    title: string;
    author: string;
    genre: string;
    img: string;
    publicationDate: string;
    publisherEmail: string;
}

export interface IResponse {
    data?: {
        data?: {
            name?: {
                firstName: string
            };
            img?: string;
            email?: string;

        };
    };
    error?: object
}

export interface IBookList {
    _id: number;
    title: string;
    author: string;
    genre: string;
    img: string;
    publicationDate: string;
    publisherEmail: string;
    status: string
}

