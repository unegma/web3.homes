import React from "react";
// import { useWeb3React } from "@web3-react/core";
import Balance from "./Balance";
import Account from "./Account";

export default function WalletDetails() {
  // const { active, error } = useWeb3React();

  return (
    <>
      {/*<h1 style={{ margin: '1rem', textAlign: 'right' }}>{active ? '🟢' : error ? '🔴' : '🟠'}</h1>*/}
      <h3
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: '1fr min-content 1fr',
          maxWidth: '20rem',
          lineHeight: '2rem',
          margin: 'auto'
        }}
      >
        <Account />
        <Balance />
      </h3>
    </>
  )
}
