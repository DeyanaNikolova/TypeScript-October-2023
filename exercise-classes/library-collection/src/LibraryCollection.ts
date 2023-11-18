export type Book = {
  bookName: string;
  bookAuthor: string;
  payed: boolean;
};

export class LibraryCollection {
  capacity: number;
   books: Book[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName: string, bookAuthor: string): string {
    if (this.books.length >= this.capacity) {
      throw new Error("Not enough space in the collection.");
    }
    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName: string): string {
    const book = this.books.find((b) => b.bookName === bookName);

    if (!book) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (book.payed === true) {
      throw new Error(`${bookName} has already been paid.`);
    }

    book.payed = true;
    return `${book.bookName} has been successfully paid.`;
  }

  removeBook(bookName: string): string {
    const book = this.books.find((b) => b.bookName === bookName);

    if (!book) {
      throw new Error("The book you are looking for is not found.");
    }

    if (book.payed === false) {
      throw new Error(
        `${book.bookName} need to be payed before removing from the collectrion.`
      );
    }
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);

    return `${bookName} removed from the collection.`;
  }

  getStatistics(bookAuthor?: string): string{
    if(bookAuthor === undefined){
        const emptySpots = this.capacity - this.books.length;
        const result: string[] = [`The book collection has ${emptySpots} empty spots left.`];
        this.books.sort((a, b)=> a.bookName.localeCompare(b.bookName)).forEach(b =>{
            let hasPaid = b.payed ? 'Has Paid' : 'Not Paid';
            result.push(`${b.bookName} == ${b.bookAuthor} - ${hasPaid}.`);
        });
        return result.join('\n');
    } 

    if(bookAuthor){
        const book = this.books.find(b => b.bookAuthor === bookAuthor);
        let hasPaid = book?.payed ? 'Has Paid' : 'Not Paid';
        return `${book?.bookName} == ${book?.bookAuthor} - ${hasPaid}.`;
    }else{
        throw new Error(`${bookAuthor} is not in the collection.`);  
    }

  }
}
