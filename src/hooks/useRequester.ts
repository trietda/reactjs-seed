import ApiRequester from './requester/ApiRequester';
import Requester from './requester/Requester';

const useRequester = () => {
  const requester = new Requester();
  const apiRequest = new ApiRequester();

  return { requester, apiRequest };
};

export default useRequester;
