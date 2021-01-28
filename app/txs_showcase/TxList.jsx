import React from 'react';
import {
    Card,
    CardHeader,
    CardBody
} from 'shards-react';
import { getTransactions } from 'ethvtx/lib/getters';
import { connect } from 'react-redux';

const TxStatusName = [
    'Broadcasted',
    'Confirming',
    'Confirmed',
    'Unknown',
    'Error'
]

export class TxListRaw extends React.Component {
    render() {
        const list = this.props.txs.map((e, idx) => {
            return (
                <Card key={idx} style={{marginTop: '10px'}}>
                    <CardHeader>{e.hash}</CardHeader>
                    <CardBody>
                        <p>Status: {e.status}</p>

                        <p>From: {e.infos.from}</p>

                        <p>To: {e.infos.to}</p>

                        <p>Value: {e.infos.value}</p>

                    </CardBody>
                </Card>
            );
        });
        return (
            <div>
                <Card>
                    <CardHeader>Broadcasted Transactions</CardHeader>
                    <CardBody>
                        <p>Transactions that are followed by the redux store will be shown here</p>
                        {list}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    txs: getTransactions(state)
});

export const TxList = connect(mapStateToProps)(TxListRaw);
