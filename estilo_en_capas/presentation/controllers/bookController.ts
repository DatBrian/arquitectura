import { Book } from "../../business/models/book";
import BookService from "../../business/services/bookServices";

class bookController{
    private service: BookService;
    constructor() {
        this.service = new BookService();
    }

    getAllBooks():Promise <Book[]> {
        return this.service.getAllBooks();
    }

    getBookById(id: number): Promise<Book | null>{
        return this.service.getBookById(id);
    }
}
export default bookController;