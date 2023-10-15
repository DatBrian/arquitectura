import BookRepository from "../../data/repositories/bookRepository";
import { Book } from "../models/book";

class BookService {
    private bookRepository: BookRepository;

    constructor() {
        this.bookRepository = new BookRepository();
    }

    async getAllBooks(): Promise<Book[]> {
        return this.bookRepository.getAllBooks();
    }

    async getBookById(id: number): Promise<Book | null> {
        return this.bookRepository.getBookById(id);
    }

    async createBook(book: Book): Promise<Book> {
        return this.bookRepository.createBook(book);
    }
}

export default BookService;
