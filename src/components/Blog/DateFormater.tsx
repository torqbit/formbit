import { parseISO, format } from 'date-fns';
import { FC } from 'react';

const DateFormater: FC<{ dateString: string }> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'mm/dd/yyyy')}</time>;
};

export default DateFormater;
