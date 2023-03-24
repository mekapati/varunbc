import React, { useState, useEffect } from 'react';
import BasicTemplate from '../../components/templates/BasicTemplate';
import LeftNavBar from '../../components/organisms/leftNavBar';
import {
  contentList,
  footerList,
} from '../../components/organisms/leftNavBar/leftNavBarList';
import Avatar from '../../components/atoms/avatar';
import AvatarImage from '../../../public/assets/icons/avatarImage.svg';
import DropDown from '../../../public/assets/icons/dropDown.svg';
import Typography from '../../components/atoms/typography';
import theme from '../../theme';
import Button from '../../components/atoms/button';
import BackIcon from '../../../public/assets/icons/back.svg';
import InfoIcon from '../../../public/assets/icons/info.svg';
import DataTable from '../../components/organisms/dataTable';
import SummaryCard from '../../components/organisms/summaryCard';
import { useLocation, useNavigate } from 'react-router-dom';
import contractColumns from './contractColumns';
import Modal from '../../components/organisms/modal';
import { CASH_ACCELERATION, DASHBOARD } from '../../core-utils/routes';
import TextField from '../../components/molecules/inputFieldWithLabel';
import Icon from '../../components/atoms/icon';
import ReviewGif from '../../../public/assets/gifs/review.gif';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { CashkickService } from '../../service-api/cashkick';
import { toast } from 'react-toastify';
import { MenuItem, Menu, Box, Grid } from '@mui/material';
import { UserService } from '../../service-api/user';

const Title = (
  <Typography
    variant="title"
    sx={{ color: theme.palette.textColor.highEmphasis }}
  >
    New cash kick
  </Typography>
);

const Caption = (
  <Typography
    variant="heading2"
    sx={{ color: theme.palette.textColor.lowEmphasis }}
  >
    Let’s setup a new cash kick to power your Saas
  </Typography>
);

const ReviewCredit: React.FC = () => {
  const navigate = useNavigate();
  const onClickCashAcceleration = () => {
    navigate(CASH_ACCELERATION);
  };

  const onClickHome = () => {
    navigate(DASHBOARD);
  };

  const contractData: any = useLocation().state;
  const selectedContracts: readonly [] = contractData;
  const [success, setSuccess] = useState<boolean>(false);
  const [userSettings, setUserSettings] = useState<any>();
  const [value, setValue] = useState('');
  const [open, setOpen] = React.useState(false);
  const [snackOpen, toggleSnack] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
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
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    if (value.length !== 0 && !isSubmitted) {
      toggleSnack(true);
      setValue('');
    }
    setOpen(false);
  };
  const handleViewCashKick = () => {
    navigate(CASH_ACCELERATION, { state: { tabValue: '2' } });
  };
  const onSubmit = async () => {
    let receivedAmount: number = 0.0;
    contractData.forEach((contract: any) => {
      receivedAmount += contract.totalPayment;
    });
    const regex = /^[a-zA-Z ]{8,25}$/;
    if (value.match(regex)) {
      const status = {
        code: 'PENDG',
        name: 'Pending'
      };
      const postData = await CashkickService.postCashKick({
        name: value,
        userId: localStorage.getItem('userID'),
        status: status,
        intRate: userSettings?.interestRate,
        term: userSettings?.termCap,
        created: new Date(),
        contracts: contractData,
      });
      if (postData) {
        setSuccess(true);
        setSubmitted(true);
      }
    } else {
      toast.info('Minimum 8 charcters & only alphabets supported!');
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSnackClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    toggleSnack(false);
  };

  const BackButton = (
    <Grid>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        data-testid="menuItem"
        open={open1}
        onClose={handleClose1}
        onClick={handleClose1}
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
      <Button
        variant="contained"
        startIcon={<img src={BackIcon} alt="backIcon" />}
        onClick={() => navigate(-1)}
        style={{
          background: theme.palette.structural.elevation1,
          color: theme.palette.textColor.highEmphasis,
          border: `1px solid ${theme.palette.borders.lowEmphasis}`,
          marginTop: theme.spacing(4),
          borderRadius: theme.spacing(3),
        }}
      >
        Back
      </Button>
    </Grid>
  );

  const BottomSection = (
    <Box sx={{ marginTop: theme.spacing(8), height: '100vh' }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: theme.spacing(5),
        }}
      >
        <Grid item sx={{ width: '75%' }}>
          <Box
            sx={{
              background: theme.palette.structural.elevation1,
              border: `1px solid ${theme.palette.borders.lowEmphasis}`,
              borderRadius: theme.spacing(3),
            }}
          >
            <Box
              sx={{
                paddingTop: theme.spacing(8),
                paddingLeft: theme.spacing(8),
                display: 'flex',
                flexDirection: 'row',
                gap: theme.spacing(2.5),
              }}
            >
              <Typography
                variant="heading1"
                color={theme.palette.textColor.highEmphasis}
              >
                Selected contracts
              </Typography>
              <img src={InfoIcon} alt="infoIcon" />
            </Box>
            <Box
              sx={{
                marginTop: theme.spacing(8),
                marginLeft: theme.spacing(8),
                marginBottom: theme.spacing(8),
                marginRight: theme.spacing(8),
              }}
            >
              <DataTable
                columns={contractColumns}
                data={selectedContracts}
                checkboxDisplay={false}
                pageSize={8}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item sx={{ width: '25%' }}>
          <SummaryCard
            contracts={selectedContracts}
            slider={false}
            maxValue={0}
            rate={'12.00%'}
            onSliderChange={() => {}}
            termLength={'12 months'}
            handleSubmit={handleClickOpen}
          />
        </Grid>
      </Grid>
      {!success ? (
        <Modal
          heading="Name your cash kick"
          subHeading="Add a name to identify your cash kick"
          submitLabel="Create Cash Kick"
          onSubmit={onSubmit}
          open={open}
          handleClose={handleClose}
          disabled={value.length === 0}
        >
          <TextField
            labelText="Cash kick name"
            placeholder="Ex: marketing expenses"
            onChange={handleInputChange}
            value={value}
          />
        </Modal>
      ) : (
        <Modal
          heading="Cash kick launched successfully!"
          subHeading="We are reviewing your cash kick"
          submitLabel="View Cash Kick"
          onSubmit={handleViewCashKick}
          open={open}
          handleClose={handleClose}
          disabled={false}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Icon src={ReviewGif} />

            <Typography variant="heading1" sx={{ color: '#E8E7F0' }}>
              Your cash kick is under review
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#A5A5A6', textAlign: 'center', marginTop: '8px' }}
            >
              It will remain on pending state until we review it internally.
              This can take upto 5 mins to couple of hours. Once reviewed, the
              cash will be transferred to your account and you’ll be notified.
            </Typography>
          </Box>
        </Modal>
      )}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackOpen}
        autoHideDuration={6000}
        data-testid="snackClose"
        onClose={handleSnackClose}
        sx={{ alignItems: 'center' }}
      >
        <Alert
          onClose={handleSnackClose}
          severity="warning"
          sx={{ width: '100%' }}
        >
          Your changes are not saved!
        </Alert>
      </Snackbar>
    </Box>
  );

  return (
    <>
      <BasicTemplate
        leftNavBar={
          <LeftNavBar
            contentList={contentList}
            footerList={footerList}
            selected={1}
            onClickCashAcceleration={onClickCashAcceleration}
            onClickHome={onClickHome}
          />
        }
        title={Title}
        dropDownIcon={
          <img
            src={DropDown}
            alt="dropDown"
            onClick={handleClick}
            data-testid="dropdown"
            style={{ cursor: 'pointer' }}
          />
        }
        caption={Caption}
        avatar={<Avatar src={AvatarImage} alt="avatar" />}
        middleSection={BackButton}
        bottomSection={BottomSection}
      />
    </>
  );
};

export default ReviewCredit;
