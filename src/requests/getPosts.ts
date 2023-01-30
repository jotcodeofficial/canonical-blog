import axios from 'axios';
import { SetStateAction } from 'react';
import Product from '../types/product';

/*
 *  This file is used to create a seperation of concern when sending our request to get our articles.
 *  We could do this directly in the useEffect hook, but this will ensure a seperation of concern.   
 */

const getPosts = async(callback: { (value: SetStateAction<Product[]>): void; (arg0: Product[]): void; }) => {

  try {

    let results: Product[] = [];

    await axios.get(
      '/api',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    ).then(res => {
        res.data.forEach((product: any) => {
            const newProduct = {
                id: product.id,
                date: product.date,
                type: product.type,
                link: product.link,
                title: {rendered: product.title.rendered},
                excerpt: {rendered: product.excerpt.rendered},
                featured_media: product.featured_media,
                categories: product.categories,
                _embedded: product._embedded,
                category: {value: product._embedded["wp:term"][0][0].slug, label: product._embedded["wp:term"][0][0].name}
            }
          
            results.push(newProduct);
        });
    }).catch(error => {
        console.log('parsing json error', error.message);
    }); 

    callback(results);

  } catch (error) {

    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }

  }
}

export default getPosts;
