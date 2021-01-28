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
import { followTransaction } from 'ethvtx/lib/dispatchers';
import { connect } from 'react-redux';

export class TxFollowRaw extends React.Component {

    constructor(props) {
        super(props);

        this.handleHashInput = this.handleHashInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            hash: ''
        };
    }

    handleHashInput(e) {
        this.setState({hash: e.target.value});
    }

    handleButtonClick() {
        this.props.follow(this.state.hash);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Follow Transactions</CardHeader>
                    <CardBody>
                        <p>You can follow transaction statuses. Just input the hash of the transaction and all the
                            informations will be fetched in the store.</p>
                        <Form>
                            <FormGroup>
                                <label htmlFor="#to">Transaction Hash</label>
                                <FormInput id="#to" placeholder="hash" onChange={this.handleHashInput}/>
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.handleButtonClick} outline theme="dark">
                                    Follow Transaction
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
    follow: (hash) => followTransaction(dispatch, hash)
});

export const TxFollow = connect(mapStateToProps, mapDispatchToProps)(TxFollowRaw);
