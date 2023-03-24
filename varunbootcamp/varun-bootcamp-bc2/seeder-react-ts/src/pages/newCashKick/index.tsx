import React, { useEffect, useState } from 'react';
import {
  contentList,
  footerList,
} from '../../components/organisms/leftNavBar/leftNavBarList';
import LeftNavBar from '../../components/organisms/leftNavBar';
import Typography from '../../components/atoms/typography';
import Avatar from '../../components/atoms/avatar';
import avatarImage from '../../../public/assets/icons/avatarImage.svg';
import theme from '../../theme';
import DataTable from '../../components/organisms/dataTable';
import { GridColDef } from '@mui/x-data-grid';
import SummaryCard from '../../components/organisms/summaryCard';
import Icon from '../../components/atoms/icon';
import avatarIcon from '../../../public/assets/icons/avatarIcon.svg';
import Button from '../../components/atoms/button';
import backIcon from '../../../public/assets/icons/back.svg';
import infoIcon from '../../../public/assets/icons/info.svg';
import { ContractService } from '../../service-api/contract';
import { Contract } from '../../model/Contract';
import { useNavigate } from 'react-router-dom';
import BasicTemplate from '../../components/templates/BasicTemplate';
import { CASH_ACCELERATION, DASHBOARD } from '../../core-utils/routes';
import { NumberRenderer } from '../../core-utils/renderer/NumberRenderer';
import Chips from '../../components/atoms/chips';
import { MenuItem, Menu, Grid } from '@mui/material';

const contractColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'header-styling',
    cellClassName: 'contract-styling',
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      const value = params.value.name;
      const sx = {
        backgroundColor: value === 'Pending' ? '#2D2D30' : '#FF0000',
        color: '#C9C8CC',
      };

      if (value === 'Available') {
        sx.backgroundColor = `${theme.palette.structural.elevation2}`;
      }

      return <Chips label={value} sx={sx} />;
    },
  },
  {
    field: 'type',
    headerName: 'Type',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return params.value.name;
    },
  },
  {
    field: 'value',
    headerName: 'Per payment',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return NumberRenderer(params.value);
    },
  },
  {
    field: 'termLength',
    headerName: 'Term Length',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return (
        <div>
          {params.value} months
          <br />
          {params.value}% fee
        </div>
      );
    },
  },
  {
    field: 'totalPayment',
    headerName: 'Payment Amount',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return NumberRenderer(params.value);
    },
  },
];

export const NewCashKick: React.FC<{}> = () => {
  const [contractData, setContractData] = useState<any>([]);
  const [selectedContracts, setSelectedContracts] = useState<any>([]);
  const [selectedContractsTable, setSelectedContractsTable] = useState<any>([]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const onClickCashAcceleration = () => {
    navigate(CASH_ACCELERATION);
  };

  const onClickHome = () => {
    navigate(DASHBOARD);
  };

  const onDataSelect = (id: any) => {
    const selectedIDs = new Set(id);
    const selectedRows = contractData.filter((row: any) =>
      selectedIDs.has(row.id),
    );

    setSelectedContractsTable(id);
    setSelectedContracts(selectedRows);
  };

  const handleReset = () => {
    setSelectedContracts([]);
    setSelectedContractsTable([]);
  };

  const handleSliderChange = (e: any) => {
    const sliderValue = e.target.value;

    const currentValue = selectedContractSum();

    if (sliderValue > currentValue) {
      const filteredArray = getFilteredContracts();
  
      const newSelectedContracts = [...selectedContracts];
      const newSelectedContractsTable = [...selectedContractsTable];
      newSelectedContracts.push(filteredArray[0]);
      newSelectedContractsTable.push(filteredArray[0].id);

      setSelectedContracts(newSelectedContracts);
      setSelectedContractsTable(newSelectedContractsTable);  
    } else if (sliderValue < currentValue) {
      const newSelectedContracts = [...selectedContracts];
      const newSelectedContractsTable = [...selectedContractsTable];
      newSelectedContracts.pop();
      newSelectedContractsTable.pop();

      setSelectedContracts(newSelectedContracts);
      setSelectedContractsTable(newSelectedContractsTable);  
    }
  };

  const getFilteredContracts = () => {
    return contractData.filter((object1: any) => {
      return !selectedContracts.some((object2: any) => {
        return object1.id === object2.id;
      });
    });
  };
  const selectedContractSum = () => {
    let totalSelectedValue: number = 0;

  
    selectedContracts.map((contracts: any) => {
      totalSelectedValue += contracts.totalPayment;
    });

    return totalSelectedValue;
  };

  const totalSum = () => {
    let sum: number = 0;
    contractData.map((contract: any) => {
      sum += contract.totalPayment;
    });

    return sum;
  };

  useEffect(() => {
    ContractService.getAvailableContracts()
      .then((res) => {
        const data: Contract[] = [];

        for (const item of res.data) {
          const tableItem: Contract = {
            id: '',
            value: 0,
            name: '',
            status: {
              code: "",
              name: "",
            },
            termLength: 12,
            financed: 0,
            totalPayment: 0,
            type: {
              code: "",
              name: "",
            },
          };

          tableItem.id = item.id;
          tableItem.name = item.name;
          tableItem.status = item.status;
          tableItem.type = item.type;
          tableItem.value = item.value / 12;
          tableItem.financed = item.financed;
          tableItem.totalPayment = item.value - item.financed;

          data.push(tableItem);
        }

        data.sort(compare);

        setContractData(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);
  const compare = (a: any, b: any) => {
    if (a.totalPayment < b.totalPayment) {
      return -1;
    }
    if (a.last_nom > b.last_nom) {
      return 1;
    }
    return 0;
  };

  return (
    <BasicTemplate
      leftNavBar={
        <LeftNavBar
          contentList={contentList}
          footerList={footerList}
          selected={1}
          onClickCashAcceleration={onClickCashAcceleration}
          onClickHome={onClickHome}
        ></LeftNavBar>
      }
      title={
        <Typography
          variant="title"
          color={theme.palette.textColor.highEmphasis}
        >
          New Cash Kick
        </Typography>
      }
      dropDownIcon={
        <img
          src={avatarIcon}
          style={{ cursor: 'pointer' }}
          onClick={handleClick}
        ></img>
      }
      caption={
        <Typography
          variant="heading2"
          color={theme.palette.textColor.lowEmphasis}
        >
          Let's setup a new cash kick to power your SaaS
        </Typography>
      }
      avatar={<Avatar src={avatarImage} alt="avatarImage"></Avatar>}
      middleSection={
        <Grid>
          <Grid>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
            >
              <MenuItem
                onClick={() => {
                  localStorage.removeItem('userId');
                  localStorage.removeItem('userLocale');
                  navigate('/');
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Grid>
          <Button
            onClick={() => navigate(-1)}
            startIcon={<img src={backIcon} alt="backIcon" />}
            children={'Back'}
            sx={{
              width: theme.spacing(21.75),
              height: theme.spacing(7.75),
              borderRadius: theme.spacing(3),
              px: theme.spacing(3),
              py: theme.spacing(1.5),
              backgroundColor: theme.palette.structural.elevation1,
              mt: theme.spacing(4),
              mb: theme.spacing(8),
            }}
          ></Button>
        </Grid>
      }
      bottomSection={
        <Grid
          item
          sx={{
            display: 'flex',
            gap: theme.spacing(5),
            mb: theme.spacing(12.25),
            height: '100%',
          }}
        >
          <Grid
            item
            xs={8}
            sx={{
              backgroundColor: theme.palette.structural.elevation1,
              borderRadius: theme.spacing(3),
              padding: theme.spacing(8),
              gap: theme.spacing(5),
            }}
          >
            <Grid
              item
              sx={{
                display: 'flex',
                gap: theme.spacing(2.4),
                mb: theme.spacing(5),
                width: '75%',
              }}
            >
              <Typography
                variant="heading2"
                fontWeight={600}
                color={theme.palette.textColor.highEmphasis}
                fontSize={'1.5rem'}
              >
                Your Contracts
              </Typography>
              <Icon src={infoIcon}></Icon>
            </Grid>
            <DataTable
              columns={contractColumns}
              data={contractData}
              checkboxDisplay={true}
              pageSize={10}
              setSelectedContracts={onDataSelect}
              selectedContracts={selectedContractsTable}
            ></DataTable>
          </Grid>
          <Grid item sx={{ width: '25%' }}>
            <SummaryCard
              contracts={selectedContracts}
              slider={true}
              handleReset={handleReset}
              maxValue={totalSum()}
              rate={'12.00%'}
              termLength={'12 months'}
              onSliderChange={handleSliderChange}
              handleSubmit={() =>
                navigate('/review', { state: selectedContracts })
              }
            ></SummaryCard>
          </Grid>
        </Grid>
      }
    ></BasicTemplate>
  );
};

export default NewCashKick;
