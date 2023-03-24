import React, { useEffect, useState } from 'react';
import theme from '../../theme';
import Typography from '../../components/atoms/typography';
import LeftNavBar from '../../components/organisms/leftNavBar';
import {
  contentList,
  footerList,
} from '../../components/organisms/leftNavBar/leftNavBarList';
import BasicTemplate from '../../components/templates/BasicTemplate';
import moment from 'moment';
import Avatar from '../../components/atoms/avatar';
import avatarImage from '../../../public/assets/icons/avatarImage.svg';
import dropdown from '../../../public/assets/images/dropdown.svg';
import LaunchCard from '../../components/molecules/launchCard';
import DataTable from '../../components/organisms/dataTable';
import { GridColDef } from '@mui/x-data-grid';
import InfoIcon from '../../../public/assets/images/info-circle.svg';
import WelcomeCard from '../../components/molecules/welcomeCard';
import backgroundImage from '../../../public/assets/images/welcome-card.svg';
import Cheque from '../../../public/assets/images/cheque.svg';
import { UserService } from '../../service-api/user';
import { useNavigate } from 'react-router-dom';
import {
  CASH_ACCELERATION,
  DASHBOARD,
  HOME_ROUTE,
  NEW_CASH_KICK,
} from '../../core-utils/routes';
import { NumberRenderer } from '../../core-utils/renderer/NumberRenderer';
import { Utils } from '../../core-utils/utility';
import { Payment } from '../../model/Payment';
import Chips from '../../components/atoms/chips';
import CircularBar from '../../components/atoms/circularProgress';
import AnalyticsData from '../../components/molecules/analyticsData';
import receiptText from '../../../public/assets/icons/receiptText.svg';
import { CashkickService } from '../../service-api/cashkick';
import { MenuItem, Menu, Grid } from '@mui/material';

function toMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}

const formatDate = (dueDate: any) => {
    const value = dueDate;
    
    const year = value[0];
    const month = toMonthName(value[1]);
    const date = parseInt(value[2]);

      return `${month} ${date}, ${year}`;
  };

const paymentColumns: GridColDef[] = [
  {
    field: 'dueDate',
    headerName: 'Due Date',
    headerClassName: 'header-styling',
    cellClassName: 'contract-styling',
    flex: 1,
    renderCell: (params) => {
      const value = params.value;
      
      const year = value[0];
      const month = toMonthName(value[1]);
      const date = parseInt(value[2]);

      return `${month} ${date}, ${year}`;
    },
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
            backgroundColor: `${theme.palette.structural.elevation2}`,
            color: `${theme.palette.textColor.mediumEmphasis}`,
          }}
        />
      );
    },
  },
  {
    field: 'expected',
    headerName: 'Expected amount',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return `-${NumberRenderer(params.value)}`;
    },
  },
  {
    field: 'outstanding',
    headerName: 'Outstanding',
    headerClassName: 'header-styling',
    cellClassName: 'row-styling',
    flex: 1,
    renderCell: (params) => {
      return NumberRenderer(params.value);
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

const emptyPayments = 'You don’t have any payments pending';
const EmptyPaymentsMessage: React.ReactNode = (
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

export const Dashboard: React.FC<{}> = () => {
  const [userSettings, setUserSettings] = useState<any>();
  const [payments, setPayments] = useState<any[]>();
  const [cashkick, setCashkick] = useState<any[]>();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  useEffect(() => {
    const userId = localStorage.getItem('userID') + '';
    getUserPayments(userId);
  }, []);

  const getUserPayments = (userId: string) => {
    UserService.getUserPayments(userId)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const setTableData = (data: any[]) => {
    setPayments(data);
  };

  const midStyles = {
    main: {
      marginTop: '32px',
      display: 'flex',
      gap: '20px',
    },
    container: {
      height: '300px',
      width: '1220px',
    },
  };

  useEffect(() => {
    const userId = localStorage.getItem('userID') + '';
    getCashkicks(userId);
  }, []);

  const getCashkicks = (userId: string) => {
    CashkickService.getAllForUser(userId)
      .then((res) => {
        setCashkick(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const clearStorageAndNavigateToHome = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userLocale');
    navigate(HOME_ROUTE);
  };

  const PaymentsMiddleSection: React.ReactNode = (
    <Grid>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        data-testid="closeMenu"
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem
          onClick={() => {
            clearStorageAndNavigateToHome();
          }}
        >
          Logout
        </MenuItem>
      </Menu>

      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: theme.spacing(5),
          mt: theme.spacing(8),
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            backgroundColor: theme.palette.structural.elevation1,
            pt: theme.spacing(5),
            pr: theme.spacing(5),
            pl: theme.spacing(8),
            borderRadius: theme.spacing(3),
          }}
        >
          <Chips
            label={'Due in 30 days'}
            sx={{
              backgroundColor: '#E39AB2',
              color: '#201F24',
              ml: theme.spacing(80),
            }}
          />
          <AnalyticsData
            icon={<img src={receiptText} />}
            label={
              payments && payments.length > 0
                ? formatDate(payments[0].dueDate)
                : 'N/A'
            }
            value={
              payments && payments.length > 0
                ? NumberRenderer(payments[0].expected)
                : 'N/A'
            }
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            backgroundColor: theme.palette.structural.elevation1,
            pt: theme.spacing(11.375),
            pr: theme.spacing(5),
            pl: theme.spacing(8),
            borderRadius: theme.spacing(3),
          }}
        >
          <AnalyticsData
            icon={<CircularBar progress={0}></CircularBar>}
            label={'Outstanding Amount'}
            value={
              payments && payments.length > 0
                ? NumberRenderer(payments[0].outstanding)
                : 'N/A'
            }
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            backgroundColor: theme.palette.structural.elevation1,
            borderRadius: theme.spacing(3),
          }}
        >
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
    </Grid>
  );

  const HomeMiddleSection: React.ReactNode = (
    <Grid>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem
          data-testid="logout"
          onClick={() => {
            clearStorageAndNavigateToHome();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
      <Grid sx={midStyles.main}>
        <Grid sx={midStyles.container}>
          <WelcomeCard
            src={backgroundImage}
            mainText={'Congratulations you are ready to start!'}
            subText={
              'You are approved for funding. We are ready to advance you upto '
            }
            amount={userSettings?.availableCredit}
            buttonLabel={'Learn more'}
          />
        </Grid>
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

  const bottomStyles = {
    main: {
      backgroundColor: '#201F24',
      border: '1px solid #28272B',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginTop: '20px',
      padding: '32px',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    flex: {
      display: 'flex',
      gap: '9.67px',
    },
  };

  const HomeBottomSection: React.ReactNode = (
    <Grid sx={bottomStyles.main}>
      <Grid sx={bottomStyles.container}>
        <Grid sx={bottomStyles.flex}>
          <Typography
            variant="heading1"
            children="Your Payments"
            color={theme.palette.textColor.highEmphasis}
          />
          <img src={InfoIcon} />
        </Grid>
      </Grid>
      <Grid>
        <DataTable
          columns={paymentColumns}
          customMessage={EmptyPaymentsMessage}
          data={payments}
          pageSize={5}
        />
      </Grid>
    </Grid>
  );

  const title = `${Utils.getGreetingMessage()} ✋`;
  const caption = moment().format('MMMM DD, YYYY');
  const navigate = useNavigate();

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
          selected={0}
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
      middleSection={
        cashkick?.length ? PaymentsMiddleSection : HomeMiddleSection
      }
      dropDownIcon={
        <img
          src={dropdown}
          width={16}
          height={16}
          style={{ cursor: 'pointer' }}
          onClick={handleClick}
          data-testid="dropdown"
        />
      }
      bottomSection={HomeBottomSection}
    />
  );
};
