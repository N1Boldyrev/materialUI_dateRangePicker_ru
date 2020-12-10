/* eslint-disable import/prefer-default-export */

import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from 'date-fns';

// eslint-disable-next-line no-unused-vars
import { DefinedRange } from './types';

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: 'Сегодняшний день',
    startDate: date,
    endDate: date,
  },
  {
    label: 'Эта неделя',
    startDate: startOfWeek(date),
    endDate: endOfWeek(date),
  },
  {
    label: 'Этот месяц',
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
];

export const defaultRanges = getDefaultRanges(new Date());
