import React from 'react';
import { Button, Typography } from '@mui/material';
import useConnect from '../hooks/useConnect';
import useLoginWithWallet from '../hooks/useLoginWithWallet';
import {useWeb3React} from '@web3-react/core';

function Home() {
  const { account } = useWeb3React();
  const { connect } = useConnect();
  const { login } = useLoginWithWallet();

  const handleLogin = async () => {
    if (account == null) {
      return;
    }

    login(account);
  };

  return (
    <>
      <Typography variant="h1">Home</Typography>
      {account == null
        ? <Button variant="contained" type="button" onClick={connect}>Connect</Button>
        : <Button variant="contained" type="button" onClick={handleLogin}>Login</Button>}
    </>
  );
};

export default Home;
