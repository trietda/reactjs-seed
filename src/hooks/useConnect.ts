import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";

const SUPPORTED_CHAIN_IDS = [
  +(process.env.REACT_APP_CHAIN_BSC_ID || '97'),
];

const useConnect = () => {
  const { activate } = useWeb3React();

  const connect = async () => {
    const connector = new InjectedConnector({
      supportedChainIds: SUPPORTED_CHAIN_IDS,
    });

    const handleError = (error: Error): void => {
      if (error instanceof NoEthereumProviderError) {
        console.log('Metamask is not installed');
        // TODO: show toast
      }

      if (error instanceof UserRejectedRequestError) {
        console.log('User rejected connect request');
        // TODO: show toast
      }

      if (error instanceof UnsupportedChainIdError) {
        console.log('Unsupported chain ID');
        // TODO: show toast
      }
    }

    await activate(connector, handleError);
  };

  return { connect };
}

export default useConnect;
