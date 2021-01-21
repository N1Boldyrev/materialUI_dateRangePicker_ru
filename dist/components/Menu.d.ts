import React from 'react';
import { DateRange, DefinedRange, Setter, NavigationAction } from '../types';
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
}
declare const Menu: React.FunctionComponent<MenuProps>;
export default Menu;
