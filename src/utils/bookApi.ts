import axios from 'axios';

export async function fetchBookCover(query: string): Promise<string | null> {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const bookInfo = response.data.items[0].volumeInfo;
        return bookInfo.imageLinks?.thumbnail || null;
    } catch (error) {
        console.error('Error fetching book cover:', error);
        return null;
    }
}