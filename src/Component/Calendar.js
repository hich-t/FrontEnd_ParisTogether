import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = (props) => {
  const [date, setDate] = useState(new Date());
  const [userByDate, setUserByDate] = useState("");
  const token = localStorage.getItem("auth-token");
  const [events,setEvents] = useState([])


  const DisplayUser = async (value) => {
    const userOnDate = events.filter(event => event.date === value.toLocaleString().slice(-20, -9))
    setUserByDate(userOnDate);
  };

  const EventTile = ({ events }) =>
    events.map((event, i) => (
      <p key={i} style={{ color: "red" }}>
        {event.user.length} per
      </p>
    ));

    const fetchByEventId = () => {
        axios.get(`http://localhost:3001/request/dateForEvent/all/${props.id}`)
        .then(res => setEvents(res.data))
        .catch(err => console.log(err))
    }
    const addUserEvent = (dateSelect) => {
      axios.put(`http://localhost:3001/request/dateForEvent/${props.id}`, {date : dateSelect.toLocaleString().slice(-20, -9)},{ headers: { authorization: token } })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
      fetchByEventId()
    },[events])
    
  return (
    <div className="app">
    <div style={{display:"flex" ,flexDirection : "row"}}>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          onClickDay={(value) => DisplayUser(value)}
          value={date}
          selectRange={false}
          minDetail="year"
          tileContent={({ date }) => {
            const eventsOnDate = events.filter(
              (event) => event.date === date.toLocaleString().slice(-20, -9)
            );
            return eventsOnDate.length > 0 ? (
              <EventTile date={date} events={eventsOnDate} />
            ) : null;
          }}
        />
      </div>
      {userByDate.length>0 && (
        
          <div className="text-center">
            <span className="bold">Participants:</span>{" "}
            {userByDate.map((el) => el.user.map((e, i) => <p key={i}>{e}</p>))}
          </div>
    
      )}
      </div>
      {date && (
        <div>
          <p className="text-center">
            <span className="bold">Date selectionné:</span>{" "}
            {date.toLocaleString().slice(-20, -9)}
          </p>
          <button onClick={() => addUserEvent(date)}>Je participe aussi</button>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
