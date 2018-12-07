
type TTour = {
  id: string;
  points: number;
};

type TDateRangeEvent = {
  dateFrom: string;
  dateTo: string;
  description: string;
};

type TSpecialSingleDayEvent = {
  date: string;
  description: string;
};

type TTourEvent = {
  date: string;
  tours: TTour[];
};

export type TSeason = {
  id: string;
  title: string;
  events: TEvent[];
};

type TEvent = TTourEvent | TDateRangeEvent | TSpecialSingleDayEvent;

export const tourEvent = (event: TEvent): event is TTourEvent => {
  if (event) {
    const tourEvent = <TTourEvent>event;
    return tourEvent.tours && tourEvent.tours.length > 0;
  }

  return false;
}

export const dateRangeEvent = (event: TEvent): event is TDateRangeEvent => {
  if (event) {
    const dateRangeEvent = <TDateRangeEvent>event;
    return dateRangeEvent.dateFrom !== undefined && dateRangeEvent.dateTo !== undefined;
  }

  return false;
}

export const specialDateEvent = (event: TEvent): event is TSpecialSingleDayEvent => {
  if (event) {
    const specialDateEvent = <TSpecialSingleDayEvent>event;
    return specialDateEvent.date !== undefined && specialDateEvent.description !== undefined;
  }

  return false;
}