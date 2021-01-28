import React from 'react';
import { Box, Grid } from 'grommet';
import { ContractEvents } from './ContractEvents';
import { ContractMethodCall } from './ContractMethodCall';
import { ContractMethodTx } from './ContractMethodTx';

export class ContractShowcase extends React.Component {
    render() {
        return <div style={{marginTop: '20px'}}>
            <h2>Smart Contracts</h2>
            <Grid
                rows={['auto']}
                columns={['auto', 'auto', 'auto']}
                gap="medium"
                margin="medium"
                areas={[
                    {name: 'call', start: [0, 0], end: [0, 0]},
                    {name: 'tx', start: [1, 0], end: [1, 0]},
                    {name: 'event', start: [2, 0], end: [2, 0]}
                ]}
            >
                <Box gridArea="call">
                    <ContractMethodCall/>
                </Box>
                <Box gridArea="tx">
                    <ContractMethodTx/>
                </Box>
                <Box gridArea="event">
                    <ContractEvents/>
                </Box>
            </Grid>

        </div>;
    }
}
