import { ComponentStory } from '@storybook/react';
import DataTable from '.';
import React from 'react';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import CurrencyTransformer from '../../../core-utils/transformer/CurrencyTransformer';
import theme from '../../../theme';

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
    field: 'status',
    headerName: 'Status',
    width: 166,
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return (
        <div
          style={{
            display: 'flex',
            width: '4.875rem',
            height: '1.563rem',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.structural.elevation2,
          }}
        >
          {params.value}
        </div>
      );
    },
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
    renderCell: (params) => {
      return (
        <div>
          {params.value}
          <br />
          {feePercentage}
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
    renderCell: (params) => {
      return formatter.format(params.value);
    },
  },
];

const contractData: GridRowsProp = [
  {
    id: 1,
    name: 'Contract 1',
    status: 'Available',
    type: 'Monthly',
    amount: 12000.25,
    termLength: '12 months',
    totalPayment: 126772.64,
  },
  {
    id: 2,
    name: 'Contract 2',
    type: 'Monthly',
    status: 'Available',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 3,
    name: 'Contract 3',
    status: 'Available',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 4,
    name: 'Contract 4',
    status: 'Available',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 5,
    name: 'Contract 5',
    status: 'Available',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 6,
    name: 'Contract 6',
    status: 'Available',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
  {
    id: 7,
    name: 'Contract 7',
    status: 'Available',
    type: 'Monthly',
    amount: 6000,
    termLength: '12 months',
    totalPayment: 63630.0,
  },
];

export default {
  title: 'Organisms/Data Table',
  component: DataTable,
};

const Template: ComponentStory<typeof DataTable> = (args) => (
  <div style={{ backgroundColor: '#201F24' }}>
    <DataTable {...args} />
  </div>
);

export const ContractsTable = Template.bind({});

ContractsTable.args = {
  columns: contractColumns,
  data: contractData,
  checkboxDisplay: true,
  pageSize: 5,
};
