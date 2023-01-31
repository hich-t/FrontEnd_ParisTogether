import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
 


  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
 
         onClickDay={({ action, activeStartDate, title, view }) => console.log('New view is: ', title)}
          value={date}
          selectRange={false}
          minDetail='year'
         // value={{title : "test" , start: "Sun Jan 01 2023 00:00:00 GMT+0100 (heure normale d’Europe centrale)"}}

        />
      </div>
      {date && (
        <p className='text-center'>
          <span className='bold'>Date selectionné:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default CalendarComponent;