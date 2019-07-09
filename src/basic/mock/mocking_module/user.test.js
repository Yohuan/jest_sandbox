import * as myModule from './my_module';
import { User } from './user';

jest.mock('./my_module');

test('should fetch users', () => {
  const users = [
    {
      name: 'Yohuan 1',
      age: 30,
    },
    {
      name: 'Yohuan 2',
      age: 50,
    }
  ];
  const resp = {
    data: users,
  };
  // Mock the called async function
  myModule.asyncFetchUsers.mockResolvedValue(resp);

  return User.all().then(data => {
    expect(data).toEqual(users);
  })
});
