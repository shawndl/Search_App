import axios from 'axios'

export default class AbstractService {
  static _url;

  /**
   * gets all records from the api
   * @return {AxiosPromise<any>}
   */
  static get () {
    return axios.get(this._url)
  }
  /**
   * finds and returns a single record from the database
   * @return {AxiosPromise<any>}
   */
  static find (id) {
    return axios.get(`${this._url}/${id}`)
  }
  /**
   * creates a new record in the database
   * @param form
   * @return {AxiosPromise<any>}
   */
  static create (form) {
    return axios.post(this._url)
  }
  /**
   * updates the record in the database
   * @param form
   * @param id
   * @return {AxiosPromise<any>}
   */
  static update (form, id) {
    return axios.put(`${this._url}/${id}`)
  }

  /**
   * delete a record from the database
   * @param id
   * @return {AxiosPromise}
   */
  static delete (id) {
    return axios.delete(this._url)
  }
}
