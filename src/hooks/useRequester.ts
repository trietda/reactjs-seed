import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_VERSION = process.env.REACT_APP_API_VERSION

export class Requester {
  getOptions(): Partial<AxiosRequestConfig<any>> {
    return {};
  }

  async request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
    const defaultOptions = this.getOptions();

    return axios.request({
      ...defaultOptions,
      ...config,
    });
  }
}

export class ApiRequester extends Requester {
  getOptions(): Partial<AxiosRequestConfig<any>> {
    return {
      baseURL: (new URL(`/api/v${API_VERSION}`, API_BASE_URL)).href,
    };
  }
}

const useRequester = () => {
  const requester = new Requester();
  const apiRequest = new ApiRequester();

  return { requester, apiRequest };
};

export default useRequester;
