import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';

const buttonDesign2 = {
    backgroundColor: '#8A513D',
    padding: '15px 10px',
    borderRadius: '3px',
    marginLeft:'10px'
}

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://ancient-beyond-52818.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 900, textAlign:'left' }}>Make Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{width:"50%"}}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <Button style={{...buttonDesign2, color:'white'}} type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;