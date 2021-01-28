import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Form,
    FormGroup,
    FormInput,
} from 'shards-react';
import { addAccount } from 'ethvtx/lib/dispatchers';
import { connect } from 'react-redux';

export class AccountsAddRaw extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddressInput = this.handleAddressInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            address: ''
        };

    }

    handleAddressInput(e) {
        this.setState({address: e.target.value});
    }

    handleButtonClick() {
        this.props.add(this.state.address);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Add Address</CardHeader>
                    <CardBody>
                        <p>Add address to follow their balance and transaction count</p>
                        <Form>
                            <FormGroup>
                                <label htmlFor="#to">Address</label>
                                <FormInput id="#to" placeholder="address" onChange={this.handleAddressInput}/>
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.handleButtonClick} outline theme="dark">
                                    Add Account
                                </Button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    add: (address) => addAccount(dispatch, address)
});

export const AccountsAdd = connect(mapStateToProps, mapDispatchToProps)(AccountsAddRaw);
