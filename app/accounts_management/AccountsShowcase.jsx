import React from 'react';
import { Box, Grid } from 'grommet';
import { AccountsList } from './AccountsList';
import { AccountsAdd } from './AccountsAdd';

export class AccountsShowcase extends React.Component {
    render() {
        return <div style={{marginTop: '20px'}}>
            <h2>Accounts</h2>
            <Grid
                rows={['auto']}
                columns={['auto', '1/3']}
                gap="medium"
                margin="medium"
                areas={[
                    {name: 'add', start: [0, 0], end: [0, 0]},
                    {name: 'list', start: [1, 0], end: [1, 0]},
                ]}
            >
                <Box gridArea="add">
                    <AccountsAdd/>
                </Box>
                <Box gridArea="list">
                    <AccountsList/>
                </Box>
            </Grid>

        </div>;
    }
}
