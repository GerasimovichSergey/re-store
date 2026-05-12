export default class BookStoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Asdf',
                author: 'Pedik',
                price: 100,
                coverImage: 'https://m.media-amazon.com/images/I/81P0NvoRrWL.jpg',
            },
            {
                id: 2,
                title: 'ZZZ',
                author: 'Gedik',
                price: 300,
                coverImage: 'https://m.media-amazon.com/images/I/81PndgdGCXL.jpg',
            },
        ];
    }
}