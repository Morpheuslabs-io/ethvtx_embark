import React from 'react';
import { connect } from 'react-redux';
import { VtxStatus } from 'ethvtx/lib/state';

class StatusManagerRaw extends React.Component {
    render() {
        switch (this.props.status) {
            case VtxStatus.Loaded:
                return this.props.children;
            case VtxStatus.Loading:
                return (<div>
                    <p>Current Status: Loading</p>
                </div>);
            case VtxStatus.Unauthorized:
                return (<div>
                    <p>Current Status: Unauthorized</p>
                </div>);
            case VtxStatus.Authorizing:
                return (<div>
                    <p>Current Status: Authorizing</p>
                </div>);
            case VtxStatus.WrongNet:
                return (<div>
                    <p>Current Status: WrongNet</p>
                </div>);
            case VtxStatus.Error:
                return (<div>
                    <p>Current Status: Error</p>
                </div>);
            case VtxStatus.Idle:
                return (<div>
                    <p>Current Status: Idle</p>
                </div>);
        }
    }
}

const mapStateToProps = (state) => ({
    status: state.vtxconfig.status
});

export const StatusManager = connect(mapStateToProps)(StatusManagerRaw);
