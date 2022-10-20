import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alerts = ({ordersID}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Muchas Gracias por tu compra,tu ID de pedido es: {ordersID}</Alert>
    </Stack>
  );
}
export default Alerts;