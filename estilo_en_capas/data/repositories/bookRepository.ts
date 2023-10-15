import { Book } from "../../business/models/book";

class BookRepository {
    private books: Book[] = [];

    getAllBooks(): Promise<Book[]> {
        return Promise.resolve(this.books);
    }

    getBookById(id: number): Promise<Book | null> {
        const book = this.books.find((b) => b.id === id);
        return Promise.resolve(book || null);
    }

    createBook(book: Book): Promise<Book> {
        this.books.push(book);
        return Promise.resolve(book);
    }
}

export default BookRepository;
