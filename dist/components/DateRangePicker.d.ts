import * as React from 'react';
import { DateRange, DefinedRange } from '../types';
declare type Marker = symbol;
export declare const MARKERS: {
    [key: string]: Marker;
};
interface DateRangePickerProps {
    open: boolean;
    initialDateRange?: DateRange;
    definedRanges?: DefinedRange[];
    minDate?: Date | string;
    maxDate?: Date | string;
    onChange: (dateRange: DateRange) => void;
    clearValue?: string;
    okValue?: string;
    onClear?: () => void;
    onOk?: () => void;
    startDateText?: string;
    endDateText?: string;
}
declare const DateRangePicker: React.FunctionComponent<DateRangePickerProps>;
export default DateRangePicker;
