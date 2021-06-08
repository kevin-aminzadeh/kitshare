import React, { useState } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import 'react-dates/initialize';
import { START_DATE } from 'react-dates/constants';
import './datePicker.css';

import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';

function DateRangePicker({ bookings, dates, setDates }) {
  const defaultFocusedInput = START_DATE;
  const [focusedInput, setFocusedInput] = useState(defaultFocusedInput);

  const isOutsideRange = (momentObject) => {
    // Search array of bookings and determine if momentObject is in the range of any of the bookings
    let reserved;
    if (bookings) {
      reserved = bookings.some((booking) =>
        moment(momentObject).isBetween(
          moment(booking.time_from),
          moment(booking.time_to),
          'days',
          '[]'
        )
      );
    }

    // If momentObject is before current date OR falls in the reserved range of a booking, return true
    if (moment(momentObject).isBefore(moment(), 'days') || reserved) {
      return true;
    }

    // If momentObject is before the selected start date, return true
    if (momentObject.isBefore(dates.startDate, 'days')) {
      return true;
    }

    // Limit selection end date to the last day before a future booking's start date to stop selection of ranges which include booked out days
    if (bookings) {
      return bookings.some(
        (booking) =>
          moment(momentObject).isAfter(moment(booking.time_from), 'days', '[]') &&
          moment(booking.time_from).isAfter(moment(dates.startDate), 'days', '[]')
      );
    }

    return false;
  };

  const clearDateSelection = () => {
    setDates({ startDate: null, endDate: null });
    setFocusedInput(defaultFocusedInput);
  };

  const renderControls = () => (
    <section
      className="calendar_controls h-100"
      style={
        !dates.startDate && focusedInput !== 'endDate'
          ? { visibility: 'hidden' }
          : { visibility: 'visible' }
      }
    >
      <button className="btn btn-link link-dark" type="button" onClick={clearDateSelection}>
        Clear dates
      </button>
    </section>
  );

  return (
    <DayPickerRangeController
      startDate={dates.startDate}
      endDate={dates.endDate}
      onDatesChange={(selectedDates) => {
        setDates(selectedDates);
      }}
      focusedInput={focusedInput}
      onFocusChange={(currentFocusedInput) => {
        setFocusedInput(currentFocusedInput || START_DATE);
      }}
      initialVisibleMonth={() => moment()}
      numberOfMonths={1}
      minDate={moment()}
      maxDate={moment().add(1, 'year')}
      hideKeyboardShortcutsPanel
      enableOutsideDays={false}
      isOutsideRange={isOutsideRange}
      daySize={100}
      noBorder
      renderDayContents={(dayContents) => <div className="dayContents">{dayContents.date()}</div>}
      renderCalendarInfo={renderControls}
    />
  );
}

DateRangePicker.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.object),
  dates: PropTypes.shape({ startDate: instanceOf(moment), endDate: instanceOf(moment) }).isRequired,
  setDates: PropTypes.func.isRequired,
};

DateRangePicker.defaultProps = {
  bookings: [],
};

export default DateRangePicker;
