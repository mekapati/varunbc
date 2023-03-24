import { GridColDef } from '@mui/x-data-grid';
import CurrencyTransformer from '../../core-utils/transformer/CurrencyTransformer';
import React from 'react';
import Typography from '../../components/atoms/typography';

const formatter = CurrencyTransformer('en-US', 'USD', false);
const feePercentage = '12.0% fee';

const contractColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 166,
    headerClassName: 'header-styling',
    cellClassName: 'contract-styling',
    flex: 1,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 166,
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params: any) => {
      return params.value.name;
    },
  },
  {
    field: 'value',
    headerName: 'Per payment',
    width: 166,
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params: any) => {
      return formatter.format(params.value);
    },
  },
  {
    field: 'termLength',
    headerName: 'Term Length',
    width: 166,
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <div>
          <Typography variant="body2">{params.value} months</Typography>
          <Typography variant="caption">{feePercentage}</Typography>
        </div>
      );
    },
  },
  {
    field: 'totalPayment',
    headerName: 'Payment Amount',
    width: 166,
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params: any) => {
      return formatter.format(params.value);
    },
  },
];

export default contractColumns;
