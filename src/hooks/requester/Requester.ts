import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Requester {
  // eslint-disable-next-line class-methods-use-this
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
