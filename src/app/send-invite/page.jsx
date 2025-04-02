'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Alert, Chip } from '@mui/material';
import { useRouter } from 'next/navigation';

const SendInvitePage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [invitedEmails, setInvitedEmails] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // TODO: Implement invite sending logic here
      setInvitedEmails([...invitedEmails, email]);
      setSuccess('Invitation sent successfully!');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to send invitation. Please try again.');
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setInvitedEmails(invitedEmails.filter(e => e !== emailToRemove));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Send Invitations
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Message (Optional)"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ mb: 2 }}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                sx={{ mb: 3 }}
              >
                Send Invitation
              </Button>
            </form>

            {invitedEmails.length > 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Invited Users
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {invitedEmails.map((invitedEmail) => (
                    <Chip
                      key={invitedEmail}
                      label={invitedEmail}
                      onDelete={() => handleRemoveEmail(invitedEmail)}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SendInvitePage; 