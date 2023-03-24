import React, { useEffect, useState } from 'react';
import theme from '../../theme';
import Typography from '../../components/atoms/typography';
import LeftNavBar from '../../components/organisms/leftNavBar';
import {
  contentList,
  footerList,
} from '../../components/organisms/leftNavBar/leftNavBarList';
import BasicTemplate from '../../components/templates/BasicTemplate';
import Avatar from '../../components/atoms/avatar';
import avatarImage from '../../../public/assets/icons/avatarImage.svg';
import dropdown from '../../../public/assets/images/dropdown.svg';
import AnalyticsCard from '../../components/molecules/analyticsCard';
import CalenderIcon from '../../../public/assets/icons/calender.svg';
import RateIcon from '../../../public/assets/icons/rate.svg';
import CreditIcon from '../../../public/assets/icons/credit.svg';
import LaunchCard from '../../components/molecules/launchCard';
import TabsComponent, { Tab } from '../../components/molecules/tabs';
import DataTable from '../../components/organisms/dataTable';
import { GridColDef } from '@mui/x-data-grid';
import InfoIcon from '../../../public/assets/images/info-circle.svg';
import SyncNowIcon from '../../../public/assets/images/refresh-icon.svg';
import Cheque from '../../../public/assets/images/cheque.svg';
import EmptyContracts from '../../../public/assets/images/empty-contracts.svg';
import { ContractService } from '../../service-api/contract';
import { Contract } from '../../model/Contract';
import Chips from '../../components/atoms/chips';
import { UserService } from '../../service-api/user';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CASH_ACCELERATION,
  DASHBOARD,
  NEW_CASH_KICK,
} from '../../core-utils/routes';
import { NumberRenderer } from '../../core-utils/renderer/NumberRenderer';
import { CashkickService } from '../../service-api/cashkick';
import { CashKick } from '../../model/CashKick';
import { labels } from '../../core-utils/messages/labels';
import { MenuItem, Menu, Grid } from '@mui/material';
import moment from 'moment';

let feePercentage: number;

const cashkickColumns: GridColDef[] = [
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
      return (
        <Chips
          label={params.value.name}
          sx={{
            color: `${theme.palette.textColor.mediumEmphasis}`,
            backgroundColor: `${theme.palette.structural.elevation2}`,
          }}
        />
      );
    },
  },
  {
    field: 'dueDate',
    headerName: 'Due Date',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      const date = new Date(params.value);
      const formattedDate = moment(date).format('MMM DD, YYYY');
      return formattedDate;
    },
  },
  {
    field: 'received',
    headerName: 'Total received',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div>{NumberRenderer(params.row.value)}</div>
          <div>{params.row.intRate}% fee</div>
        </div>
      );
    },
  },
  {
    field: 'financed',
    headerName: 'Total financed',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return NumberRenderer(params.row.value + (((params.row.intRate/100)*params.row.value)));
    },
  },
];

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
        backgroundColor:
          value === 'Pending'
            ? `${theme.palette.structural.elevation2}`
            : 'red',
        color: `${theme.palette.textColor.mediumEmphasis}`,
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
    field: 'amount',
    headerName: 'Per payment',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return NumberRenderer(params.row.value / 12);
    },
  },
  {
    field: 'financed',
    headerName: 'Total financed',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return NumberRenderer(params.value);
    },
  },
  {
    field: 'totalPayment',
    headerName: 'Total Available',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return NumberRenderer(params.row.value - params.row.financed);
    },
  },
];

const emptyPaymentsStyle: React.CSSProperties = {
  width: '340px',
  height: '189px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  justifyContent: 'center',
};

const emptyPayments = 'You have not created any cashkicks yet!';
const EmptyCashkickMessage: React.ReactNode = (
  <div style={emptyPaymentsStyle}>
    <img src={Cheque}></img>
    <Typography
      children={emptyPayments}
      variant="heading2"
      color={theme.palette.textColor.lowEmphasis}
    />
    <Typography
      children="Launch a new cash kick"
      variant="button"
      color={theme.palette.primary.main400}
    />
  </div>
);

const emptyContractsStyle: React.CSSProperties = {
  width: '307px',
  height: '189px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  justifyContent: 'center',
};

const emptyContracts =
  'Connect payment platforms to understand reccurrence of revenue and import contracts';
const EmptyContractsMessage: React.ReactNode = (
  <div style={emptyContractsStyle}>
    <img src={EmptyContracts}></img>
    <Typography
      children={emptyContracts}
      variant="heading2"
      color={theme.palette.textColor.lowEmphasis}
    />
    <Typography
      children="Connect now"
      variant="button"
      color={theme.palette.primary.main400}
    />
  </div>
);

export const CashAcceleration: React.FC<{}> = () => {
  const tabValue: any = useLocation().state;
  const [contractsData, setContractsData] = useState<Contract[]>([]);
  const [userSettings, setUserSettings] = useState<any>();
  const [cashKicksData, setCashKicksData] = useState<CashKick[]>([]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    ContractService.getAvailableContracts()
      .then((res) => {
        setContractsData(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    const userID = localStorage.getItem('userID');
    CashkickService.getAll(userID)
      .then((res) => {
        const cashKickData = res.data;
        setCashKicksData(cashKickData);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('userID');
    UserService.getUser(userId)
      .then((res) => {
        setUserSettings(res.data.settings);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  const Tabs: Tab[] = [
    {
      name: 'My Contracts',
      children: (
        <DataTable
          columns={contractColumns}
          customMessage={EmptyContractsMessage}
          pageSize={5}
          data={contractsData}
        />
      ),
    },
    {
      name: 'My Cash Kicks',
      children: (
        <DataTable
          columns={cashkickColumns}
          pageSize={10}
          customMessage={EmptyCashkickMessage}
          data={cashKicksData}
        />
      ),
    },
  ];

  const cards = [
    {
      icon: <img src={CalenderIcon} />,
      label: labels.termCap,
      value: `${userSettings?.termCap} months`,
    },
    {
      icon: <img src={CreditIcon} />,
      label: labels.availableCredit,
      value: `${NumberRenderer(userSettings?.availableCredit)}`,
    },
    {
      icon: <img src={RateIcon} />,
      label: labels.maxInterestRate,
      value: `${userSettings?.interestRate}%`,
    },
  ];

  const CashAccMiddleSection: React.ReactNode = (
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

      <Grid sx={{ marginTop: '32px', display: 'flex', gap: '20px' }}>
        <AnalyticsCard cards={cards} />
        <LaunchCard
          label="New Cash Kick"
          title="Launch a new Cash Kick"
          onClick={() => navigate(NEW_CASH_KICK)}
          description={
            <Typography variant="body1">
              You have upto{' '}
              <strong style={{ color: theme.palette.primary.main }}>
                {NumberRenderer(userSettings?.availableCredit)}
              </strong>{' '}
              available for a new cash advance
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );

  const CashAccBottomSection: React.ReactNode = (
    <Grid
      sx={{
        backgroundColor: '#201F24',
        border: '1px solid #28272B',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
        padding: '32px',
      }}
    >
      <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid sx={{ display: 'flex', gap: '9.67px' }}>
          <Typography
            variant="heading1"
            children="Cash Acceleration"
            color={theme.palette.textColor.highEmphasis}
          />
          <img src={InfoIcon} />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            gap: '9.67px',
            width: '150px',
            alignItems: 'center',
          }}
        >
          <img src={SyncNowIcon} />
          <Typography
            children="Sync now"
            variant="button"
            color={theme.palette.primary.main400}
          />
        </Grid>
      </Grid>
      <Grid>
        <TabsComponent
          tabs={Tabs}
          tabValue={tabValue ? tabValue.tabValue : '1'}
        />
      </Grid>
    </Grid>
  );

  const navigate = useNavigate();
  const title = 'Cash acceleration';
  const caption = 'Place to create new cash kicks to run your business';

  const onClickCashAcceleration = () => {
    navigate(CASH_ACCELERATION);
  };

  const onClickHome = () => {
    navigate(DASHBOARD);
  };
  return (
    <BasicTemplate
      leftNavBar={
        <LeftNavBar
          contentList={contentList}
          footerList={footerList}
          onClickCashAcceleration={onClickCashAcceleration}
          onClickHome={onClickHome}
          selected={1}
        />
      }
      title={
        <Typography
          variant="title"
          children={title}
          color={theme.palette.textColor.highEmphasis}
        />
      }
      caption={
        <Typography
          variant="heading2"
          children={caption}
          color={theme.palette.textColor.lowEmphasis}
        />
      }
      avatar={<Avatar src={avatarImage} alt="Avatar" />}
      middleSection={CashAccMiddleSection}
      dropDownIcon={
        <img
          src={dropdown}
          width={16}
          height={16}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
      }
      bottomSection={CashAccBottomSection}
    />
  );
};
