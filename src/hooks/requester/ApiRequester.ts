import { AxiosRequestConfig } from 'axios';
import Requester from './Requester';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_VERSION = process.env.REACT_APP_API_VERSION;

export default class ApiRequester extends Requester {
  // eslint-disable-next-line class-methods-use-this
  getOptions(): Partial<AxiosRequestConfig<any>> {
    return {
      baseURL: new URL(`/api/v${API_VERSION}`, API_BASE_URL).href,
    };
  }
}
