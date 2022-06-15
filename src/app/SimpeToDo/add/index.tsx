import * as React from 'react'
import { Button, FormControl, Input, InputLabel, FormGroup } from '@mui/material'

function SimpleTodoAdd() {
    return (
        <FormControl>
            <FormGroup>
                <InputLabel htmlFor="my-input">Content</InputLabel>
                <Input id="content" aria-describedby="content" />
            </FormGroup>

            <Button variant="contained">SEND</Button>
        </FormControl>
    )
}

export default SimpleTodoAdd
