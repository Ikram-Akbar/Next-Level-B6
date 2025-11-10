/* 
Example : Basic Object
Create a Book object with the following structure:
- title (string)
- author (string)
- pages (number)
- isPublished (boolean)

Then print a message:
👉 "Book Title: [title], written by [author]."
*/

interface Book {
  title: string;
  author: string;
  pages: number;
  isPublished: boolean;
}

const book: Book = {
  title: "Made in Bangladesh",
  author: "W.Y. Jas",
  pages: 250,
  isPublished: true,
};
console.log("Book Title: ", book.title, "written by ", book.author);

/* 
Todo : Q2.
Define a type called Employee with:
id (number, readonly)
name (string)
salary (number)
optional property department (string)
Then create one Employee object and log it.
*/
type Employee = {
   readonly id :number,
   name:string,
   salary:number,
   department?:string
};