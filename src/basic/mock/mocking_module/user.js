import * as myModule from './my_module';

export class User {
  static async all() {
    return myModule.asyncFetchUsers().then(resp => resp.data);
  }
}
