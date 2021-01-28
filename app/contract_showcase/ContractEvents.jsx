import { getContract } from 'ethvtx/lib/contracts/helpers/getters';
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'shards-react';

export class ContractEventsRaw extends React.Component {
    render() {

        const list = this.props.events.map((event, idx) => {
            return <Card key={idx} style={{marginTop: '20px'}}>
                <CardHeader>Event ValueChanged #{idx + 1}</CardHeader>
                <CardBody>
                    <p>This Event was made by {event.returnValues.who}</p>
                    <p>It changed the value to {event.returnValues.new_value}</p>
                </CardBody>
            </Card>;
        });

        return <Card>
            <CardHeader>Contract Events</CardHeader>
            <CardBody>
                <p>This list shows all the EVM Events "ValueChanged" emitted by the smart contract</p>
                {list}
            </CardBody>
        </Card>;
    }
}

const mapStateToProps = (state) => ({
    events: getContract(state, 'SimpleStorage', '@simplestorage').events.ValueChanged()
});

export const ContractEvents = connect(mapStateToProps)(ContractEventsRaw);
