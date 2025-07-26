import { useRouter } from '@tanstack/react-router'
import { Stack, Typography, Button, Paper } from '@mui/material'

export function Home() {
  const router = useRouter()

  return (
    <>
      <Stack alignItems="center">
        <Typography variant="h1" marginBlockEnd={4}>
          Welcome to the Tome
        </Typography>

        <Typography variant="body1">
          Hello an welcome, this is just a small place for me to keep my notes, and other stuff in a central location. Thank you for taking the time to stop by and visit.
        </Typography>
      </Stack>
    </>
  )
}
