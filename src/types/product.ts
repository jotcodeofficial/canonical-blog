import Category from "./category";

type Author = {
    id: number,
    name: string,
    url: string,
    link: string,
    description: string,
}


type Product = {
    id: number;
    date: string;
    type: string;
    link: string;
    title: {rendered: string};
    excerpt: {rendered: string};
    featured_media: string;
    categories: number[];
    _embedded: {author: Author[]};
    category: Category;
}

export default Product;