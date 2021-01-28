import * as React from 'react';
import './App.css';
import { ContractShowcase } from './contract_showcase/ContractShowcase';
import { TxsShowcase } from './txs_showcase/TxsShowcase';
import Title from './Title';
import { StatusManager } from './status_management/StatusManager';
import { AccountsShowcase } from './accounts_management/AccountsShowcase';

class App extends React.Component {
    render() {
        return (
            <div className='Demo'>
                <StatusManager>
                    <Title/>
                    <TxsShowcase/>
                    <ContractShowcase/>
                    <AccountsShowcase/>
                </StatusManager>
            </div>
        );
    }
}

export default App;
