import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataTable from '.';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import CurrencyTransformer from '../../../core-utils/transformer/CurrencyTransformer';

const formatter = CurrencyTransformer('en-IN', 'INR', false);

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
  },
  {
    field: 'amount',
    headerName: 'Per payment',
    width: 166,
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
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
  },
  {
    field: 'totalPayment',
    headerName: 'Payment Amount',
    width: 166,
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return formatter.format(params.value);
    },
  },
];

const contractData: GridRowsProp = [
  {
    id: 1,
    name: 'Contract 1',
    type: 'Monthly',
    amount: 12000.25,
    termLength: '12 months',
    totalPayment: 126772.64,
  },
  {
    id: 2,
    name: 'Contract 2',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 3,
    name: 'Contract 3',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 4,
    name: 'Contract 4',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 5,
    name: 'Contract 5',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 6,
    name: 'Contract 6',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 7,
    name: 'Contract 7',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
];


it('Renders data table', () => {
  render(<DataTable pageSize={5} data={contractData} columns={contractColumns} setSelectedContracts={[]} selectedContracts={[]} />);

  const text = screen.getByText(/Contract 1/i);
  expect(text).toBeInTheDocument();
});
