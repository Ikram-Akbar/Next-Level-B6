{
  interface Item {
    title: string;
    rating: number;
  }

  const filterByRating = (items: Item[]): Item[] => {
    const result: Item[] = [];

    for (let i = 0; i < items.length; i++) {
      const current = items[i];
      if (current.rating >= 4) {
        result.push(current);
      }
    }

    return result;
  };
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  console.log(filterByRating(books));
}
