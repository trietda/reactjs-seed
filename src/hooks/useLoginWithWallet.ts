import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import useRequester from './useRequester';

export type GetNonceDto = {
  address: string;
};
export type NonceDto = {
  nonce: string;
};

export type SignInWithWeb3Dto = {
  signature: string;
  walletAddress: string;
};
export type SessionDto = {
  accessToken: string;
};

const useLoginWithWallet = () => {
  const { apiRequest } = useRequester();
  const { library } = useWeb3React<ethers.providers.Web3Provider>();

  const login = async (walletAddress: string) => {
    if (library == null) {
      return;
    }

    const params: GetNonceDto = { address: walletAddress };
    const { data: { nonce } } = await apiRequest.request<NonceDto>({
      params,
      url: '/sessions/nonces',
    });

    const signingMessage = `I am signing my one-time nonce: ${nonce}`;
    const signedMessage = await library.getSigner().signMessage(signingMessage);
    const { data: { accessToken} }  = await apiRequest.request<SessionDto, any,SignInWithWeb3Dto>({
      method: 'POST',
      url: '/sessions/web3',
      data: {
        walletAddress,
        signature: signedMessage,
      },
    });
    console.log('accessToken', accessToken);
  };

  return { login };
};

export default useLoginWithWallet;
