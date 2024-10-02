import { Post } from '../models/post.model';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Ocurrio un error al traer la información de los posts' + error);
  }
};
