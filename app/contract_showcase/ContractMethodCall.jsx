import { getContract } from 'ethvtx/lib/contracts/helpers/getters';
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody
} from 'shards-react';
import { connect } from 'react-redux';

export class ContractMethodCallRaw extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Constant Calls</CardHeader>
                    <CardBody>
                        <p>Constant Calls are made by the store and data is refreshed automatically</p>
                        <p>Value stored by contracts is: <span style={{
                            fontSize: 20
                        }}>{this.props.simplestorage_get || 'Loading ...'}</span></p>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    simplestorage_get: getContract(state, 'SimpleStorage', '@simplestorage').fn.get()
});

export const ContractMethodCall = connect(mapStateToProps)(ContractMethodCallRaw);
