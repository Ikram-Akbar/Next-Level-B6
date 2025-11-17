{
  interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }

  const filterActiveUsers = (users: User[]): User[] => {
    const result: User[] = [];

    for (let i = 0; i < users.length; i++) {
      const current = users[i];

      if (typeof current.isActive === "boolean" && current.isActive === true) {
        result.push(current);
      }
    }

    return result;
  };

  const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

}
