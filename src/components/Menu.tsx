import React from 'react';
import {
  Paper,
  Grid,
  Typography,
  Divider,
  makeStyles,
  // eslint-disable-next-line no-unused-vars
  Theme, ListItem, ListItemText,
} from '@material-ui/core';
import { format, differenceInCalendarMonths } from 'date-fns';
import localePtBr from 'date-fns/locale/pt';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import Month from './Month';
import DefinedRanges from './DefinedRanges';
import {
  // eslint-disable-next-line no-unused-vars
  DateRange,
  // eslint-disable-next-line no-unused-vars
  DefinedRange,
  // eslint-disable-next-line no-unused-vars
  Setter,
  // eslint-disable-next-line no-unused-vars
  NavigationAction,
} from '../types';
import { MARKERS } from './DateRangePicker';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: '20px 70px',
  },
  headerItem: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.action.hover}`,
    marginBottom: 20,
  },
}));

interface MenuProps {
    dateRange: DateRange;
    ranges: DefinedRange[];
    minDate: Date;
    maxDate: Date;
    firstMonth: Date;
    secondMonth: Date;
    setFirstMonth: Setter<Date>;
    setSecondMonth: Setter<Date>;
    setDateRange: Setter<DateRange>;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
    clearValue?: string;
    okValue?: string;
    onClear?: () => void;
    onOk?: () => void;
    startDateText?: string;
    endDateText?: string;
    cancelValue?: string;
    onCancel?: () => void;
    pickerColor:string
}

const Menu: React.FunctionComponent<MenuProps> = (props: MenuProps) => {
  const classes = useStyles();

  const {
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers,
    clearValue,
    okValue,
    onClear,
    onOk,
    startDateText,
    endDateText,
    cancelValue,
    onCancel, pickerColor,
  } = props;

  const { startDate, endDate } = dateRange;
  const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange, minDate, maxDate, helpers, handlers,
  };
  return (
    <Paper elevation={5} square>
      <Grid container direction="row" wrap="nowrap">
        <Grid>
          <Grid container className={classes.header} alignItems="center">
            <Grid item className={classes.headerItem}>
              <Typography variant="subtitle1">
                {startDate ? format(startDate, 'DD/MM/YYYY', { locale: localePtBr }) : startDateText || 'Start date' }
              </Typography>
            </Grid>
            <Grid item className={classes.headerItem}>
              <ArrowRightAlt color="action" />
            </Grid>
            <Grid item className={classes.headerItem}>
              <Typography variant="subtitle1">
                {endDate ? format(endDate, 'DD/MM/YYYY', { locale: localePtBr }) : endDateText || 'End date'}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction="row" justify="center" wrap="nowrap">
            <Month
              {...commonProps}
              value={firstMonth}
              setValue={setFirstMonth}
              navState={[true, canNavigateCloser]}
              marker={MARKERS.FIRST_MONTH}
              pickerColor={pickerColor}
            />
            <div className={classes.divider} />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
              marker={MARKERS.SECOND_MONTH}
              pickerColor={pickerColor}
            />
          </Grid>
        </Grid>
        <div className={classes.divider} />
        <Grid>
          <DefinedRanges
            selectedRange={dateRange}
            ranges={ranges}
            setRange={setDateRange}
          />
          <div>
            {clearValue && (
            <ListItem button onClick={() => (onClear ? onClear() : null)}>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'body2',
                  style: {
                    color: pickerColor,
                  },
                }}
              >
                {clearValue}
              </ListItemText>
            </ListItem>
            )}
            {okValue && (
            <ListItem button onClick={() => (onOk ? onOk() : null)}>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'body2',
                  style: {
                    color: pickerColor,
                  },
                }}
              >
                {okValue}
              </ListItemText>
            </ListItem>
            )}
          </div>
          <div>
            {cancelValue && (
            <ListItem button onClick={() => (onCancel ? onCancel() : null)}>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'body2',
                  style: {
                    color: pickerColor,
                  },
                }}
              >
                {cancelValue}
              </ListItemText>
            </ListItem>
            )}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Menu;
