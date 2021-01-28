import React from 'react';
import { TxBroadcast } from './TxBroadcast';
import { TxList } from './TxList';
import { Grid, Box } from 'grommet';
import { TxFollow } from './TxFollow';

export class TxsShowcase extends React.Component {
    render() {
        return (
            <div style={{marginTop: '20px'}}>
                <h2>Transactions</h2>
                <Grid
                    rows={['auto']}
                    columns={['auto', 'auto', 'auto']}
                    gap="medium"
                    margin="medium"
                    areas={[
                        {name: 'broadcast', start: [0, 0], end: [1, 0]},
                        {name: 'follow', start: [1, 0], end: [2, 0]},
                        {name: 'list', start: [2, 0], end: [3, 0]},
                    ]}
                >
                    <Box gridArea="broadcast">
                        <TxBroadcast/>
                    </Box>
                    <Box gridArea="follow">
                        <TxFollow/>
                    </Box>
                    <Box gridArea="list">
                        <TxList/>
                    </Box>

                </Grid>
            </div>
        );
    }
}
