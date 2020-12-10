# Material UI DateRange Picker

A react date range picker implementation using @material-ui and updated to russian.

<a href='https://www.npmjs.com/package/materialui-daterange-picker'>
    <img src='https://img.shields.io/npm/v/materialui-daterange-picker.svg' alt='Latest npm version'>
</a>

## Usage

```bash
npm install materialui-daterange-picker_ru --save

# or with yarn
yarn add materialui-daterange-picker_ru
```

## Basic example
```tsx
import React from "react";
import { DateRangePicker, DateRange } from "materialui-daterange-picker-pt";

type Props = {}

const App: React.FunctionComponent<Props> = props => {
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange>({});

  const toggle = () => setOpen(!open);

  return (
    <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}
    />
  );
}

export default App;
```

## Types
```ts
interface DateRange {
    startDate?: Date,
    endDate?: Date
}

interface DefinedRange {
    label: string,
    startDate: Date,
    endDate: Date
}
```

## Props

Name | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`onChange` | `(DateRange) => void` | _required_ | - | handler function for providing selected date range
`toggle` | `() => void` | _required_ | - | function to show / hide the DateRangePicker
`initialDateRange` | `DateRange` | _optional_ | `{}` | initially selected date range
`minDate` | `Date` or `string` | _optional_ | 10 years ago | min date allowed in range
`maxDate` | `Date` or `string` | _optional_ | 10 years from now | max date allowed in range
`definedRanges` | `DefinedRange[]` | _optional_ | - | custom defined ranges to show in the list
`closeOnClickOutside` | `boolean` | _optional_ | `true` | defines if DateRangePicker will be closed when clicking outside of it
`wrapperClassName` | `object` | _optional_ | `undefined` | defines additional wrapper style classes

