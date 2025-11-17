{
  interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
  }

  const printBookDetails = (book: Book): void => {
    const availableText = book.isAvailable ? "Yes" : "No";

    console.log(
      `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`
    );
  };
}
