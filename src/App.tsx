import { FC } from 'react';
import { Box } from '@mui/material';
import { DataGridPro, GridActionsCellItem } from '@mui/x-data-grid-pro';

import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';

// Source of example: https://codesandbox.io/s/qf6uqi?file=/demo.tsx

const rows = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
  },
];

const App: FC = () => {
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'age', headerName: 'Age', flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      flex: 1,
      getActions: () => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label='Delete'
          onClick={undefined}
        />,
        <GridActionsCellItem
          icon={<SecurityIcon />}
          label='Do something'
          onClick={undefined}
          showInMenu
          // props in question: nonce, onResize, onResizeCapture
          // nonce={undefined}
          // onResize={undefined}
          // onResizeCapture={undefined}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ height: '500px' }}>
      <DataGridPro columns={columns} rows={rows} />
    </Box>
  );
};

export default App;
