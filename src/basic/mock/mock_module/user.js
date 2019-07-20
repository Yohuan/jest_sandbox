import * as myModule from './my_module';

class User {
  static async all() {
    return myModule.asyncFetchUsers().then(resp => resp.data);
  }
}

export {
  User,
};
