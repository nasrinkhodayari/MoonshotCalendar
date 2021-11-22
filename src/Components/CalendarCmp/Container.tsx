import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {
  CalendarContainer,
  InputSubmit,
  SubmitFormInputContainer,
} from './styles';
import 'react-calendar/dist/Calendar.css';
import { useForm } from 'react-hook-form';

const CalendarCmp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [date, setDate] = useState(new Date());
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const [openToCalendar, setOpenToCalendar] = useState(false);
  const [openFromCalendar, setOpenFromCalendar] = useState(false);

  const onSubmit = (data: any) => {
    setOpenFromCalendar(false);
    setOpenToCalendar(false);
    console.log(data);
  };

  return (
    <CalendarContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubmitFormInputContainer>
          <input
            {...register('From Date', { required: true })}
            placeholder="From Date"
            autoComplete="off"
            value={fromDate}
            type="text"
            onClick={() => {
              setOpenFromCalendar(true);
              setOpenToCalendar(false);
            }}
          />
          <input
            {...register('To Date', { required: true })}
            placeholder="To Date"
            autoComplete="off"
            value={toDate}
            type="text"
            onClick={() => {
              setOpenToCalendar(true);
              setOpenFromCalendar(false);
            }}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </SubmitFormInputContainer>
        <InputSubmit type="submit" />
      </form>

      {openFromCalendar && (
        <Calendar
          onChange={(eDate: Date) => {
            setDate(eDate);
            setFromDate(eDate.toString());
          }}
          value={date}
        />
      )}
      {openToCalendar && (
        <Calendar
          onChange={(eDate: Date) => {
            setDate(eDate);
            setToDate(eDate.toString());
          }}
          value={date}
        />
      )}
    </CalendarContainer>
  );
};

export default CalendarCmp;
