import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injected, walletconnect } from "../helpers/connectors";
import { useEagerConnect, useInactiveListener } from "../helpers/hooks";
import getErrorMessage from "../helpers/getErrorMessage";
import { Spinner } from "./Spinner";

enum ConnectorNames {
  Injected = 'Injected',
  WalletConnect = 'WalletConnect'
}

const connectorsByName: { [connectorName in ConnectorNames]: any} = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect
}

export default function Web3ConnectionButtons() {
  const context = useWeb3React<Web3Provider>();
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>()

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '20rem',
          margin: 'auto'
        }}
      >
        {Object.keys(connectorsByName).map((name: any) => {
          const currentConnector = connectorsByName[name as keyof typeof ConnectorNames];
          const activating = currentConnector === activatingConnector;
          const connected = currentConnector === connector;
          const disabled = !triedEager || !!activatingConnector || connected || !!error;

          return (
            <button
              style={{
                height: '3rem',
                borderRadius: '1rem',
                borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
                cursor: disabled ? 'unset' : 'pointer',
                position: 'relative'
              }}
              disabled={disabled}
              key={name}
              onClick={() => {
                setActivatingConnector(currentConnector);
                activate(connectorsByName[name as keyof typeof ConnectorNames]);
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'black',
                  margin: '0 0 0 1rem'
                }}
              >
                {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
                {connected && (
                  <span role="img" aria-label="check">
                      ✅
                    </span>
                )}
              </div>
              {name}
            </button>
          )
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {(active || error) && (
          <button
            style={{
              height: '3rem',
              marginTop: '2rem',
              borderRadius: '1rem',
              borderColor: 'red',
              cursor: 'pointer'
            }}
            onClick={() => {
              deactivate();
            }}
          >
            Deactivate
          </button>
        )}

        {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
      </div>

      <hr style={{ margin: '2rem' }} />

      <div
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: 'fit-content',
          maxWidth: '20rem',
          margin: 'auto'
        }}
      >
        {/*{!!(library && account) && (*/}
        {/*  <button*/}
        {/*    style={{*/}
        {/*      height: '3rem',*/}
        {/*      borderRadius: '1rem',*/}
        {/*      cursor: 'pointer'*/}
        {/*    }}*/}
        {/*    onClick={() => {*/}
        {/*      library*/}
        {/*        .getSigner(account)*/}
        {/*        .signMessage('👋')*/}
        {/*        .then((signature: any) => {*/}
        {/*          window.alert(`Success!\n\n${signature}`)*/}
        {/*        })*/}
        {/*        .catch((error: any) => {*/}
        {/*          window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))*/}
        {/*        })*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Sign Message*/}
        {/*  </button>*/}
        {/*)}*/}
        {connector === connectorsByName[ConnectorNames.WalletConnect] && (
          <button
            style={{
              height: '3rem',
              borderRadius: '1rem',
              cursor: 'pointer'
            }}
            onClick={() => {
              ;(connector as any).close()
            }}
          >
            Kill WalletConnect Session
          </button>
        )}
      </div>

      {/*<Button variant="contained" color="secondary" className="connectButton" >*/}
      {/*  Connect*/}
      {/*</Button>*/}
      {/*<Button variant="contained" color="secondary" className="disconnectButton">*/}
      {/*  Disconnect*/}
      {/*</Button>*/}
    </>
  )
}
