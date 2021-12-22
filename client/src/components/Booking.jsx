import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Booking() {
    
const [date, setDate] = useState(new Date());

 return (
<div className='Calendar'>
    
<div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
         <button className='calendarButton'>Reserve Now</button>
       </div>
       </div>
       )
       }



export default Booking;
