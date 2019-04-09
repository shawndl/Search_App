import AbstractAPI from '../AbstractAPI'

export default class UserService extends AbstractAPI {
  static _url = 'https://staging.api.kintell.com/kintell-cards?include=user&page%5Bsize%5D=999'
}
