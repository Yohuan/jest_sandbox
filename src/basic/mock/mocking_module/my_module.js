export const asyncFetchUsers = () => {
  const users = [
    {
      name: 'yohuan',
      age: 26,
    },
    {
      name: 'John',
      age: 30,
    },
  ];

  const res = {
    data: users,
  };

  // Simulate sync operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 300);
  });
};
