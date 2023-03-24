import { Checkbox, Grid, Pagination, PaginationItem } from '@mui/material';
import React from 'react';
import {
  DataGrid,
  GridColDef,
  GridInputSelectionModel,
  gridPageCountSelector,
  GridRowsProp,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { makeStyles, withStyles } from '@mui/styles';
import theme from '../../../theme';
import ArrowForwardIcon from '../../../../public/assets/images/pagination-end-icon.svg';
import ArrowBackIcon from '../../../../public/assets/images/pagination-start-icon.svg';
import Icon from '../../atoms/icon';

interface Table {
  columns?: GridColDef[];
  data?: GridRowsProp;
  checkboxDisplay?: boolean;
  pageSize: number;
  setSelectedContracts?: any;
  selectedContracts?: GridInputSelectionModel;
  customNoRowsOverlay?: string;
  customMessage?: React.ReactNode;
}

const sxStyles = {
  main: {
    '& .row-styling': {
      color: theme.palette.textColor.lowEmphasis,
    },
    '& .contract-styling': {
      color: 'white',
    },
  },
  dataTable: {
    '&. Mui-selected': {
      color: theme.palette.structural.main,
    },
  },
};

const CustomCheckbox = withStyles({
  root: {
    color: theme.palette.icon.lowEmphasis,
    '& .Mui-checked': {
      color: theme.palette.primary.main400,
    },
    '& .MuiSvgIcon-root': {
      borderRadius: '50%',
      outline: 'none',
    },
  },
})(Checkbox);

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      margin: '0.5rem',
      borderRadius: '0.5rem',
      width: '2rem',
      height: '2rem',
      border: `1px solid ${theme.palette.borders.highEmphasis}`,
      '&.Mui-selected': {
        backgroundColor: `${theme.palette.primary.main600}`,
        color: `${theme.palette.textColor.mediumEmphasis}`,
        border: `1px solid ${theme.palette.primary.main400}`,
      },
    },
  },
  root: {
    '& .MuiPaginationItem-previousNext': {
      border: '1px solid white',
      marginRight: '1.125rem',
      marginLeft: '1.125rem',
    },
    '& .Mui-disabled': {
      border: 'none',
      backgroundColor: `${theme.palette.structural.elevation2}`,
    },
  },
}));

const CustomPagination = () => {
  const apiRef = useGridApiContext();

  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const styles = useStyles();

  const customStartIcon = () => <Icon src={ArrowBackIcon} />;
  const customEndIcon = () => <Icon src={ArrowForwardIcon} />;

  return (
    <div className={styles.root}>
      <Pagination
        color="primary"
        count={pageCount}
        classes={{
          root: styles.ul,
        }}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: customStartIcon, next: customEndIcon }}
            {...item}
          />
        )}
        variant="outlined"
        shape="rounded"
        onChange={(_event, value) => apiRef.current.setPage(value - 1)}
      />
    </div>
  );
};

const DataTable: React.FC<Table> = ({
  columns,
  data,
  checkboxDisplay,
  pageSize,
  setSelectedContracts,
  selectedContracts,
  customMessage,
}) => {
  return (
    <Grid sx={sxStyles.main}>
      <DataGrid
        rows={data!}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectedContracts(newSelectionModel);
        }}
        selectionModel={selectedContracts}
        components={{
          BaseCheckbox: CustomCheckbox,
          Pagination: CustomPagination,
          NoRowsOverlay: () => (
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '80px',
              }}
            >
              {customMessage}
            </Grid>
          ),
        }}
        columns={columns!.map((column) => ({ ...column, sortable: false }))}
        pageSize={pageSize}
        disableColumnMenu
        disableSelectionOnClick
        hideFooterPagination={data && data.length > pageSize ? false : true}
        hideFooterSelectedRowCount
        checkboxSelection={checkboxDisplay}
        autoHeight
        sx={sxStyles.dataTable}
      />
    </Grid>
  );
};

export default DataTable;
