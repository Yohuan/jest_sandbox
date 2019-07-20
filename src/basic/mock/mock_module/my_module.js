export const asyncFetchUsers = () => {
  const users = [
    {
      name: 'yohuan 1',
      age: 26,
    },
    {
      name: 'yohuan 2',
      age: 27,
    },
  ];

  const res = {
    data: users,
  };

  // Simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 300);
  });
};
