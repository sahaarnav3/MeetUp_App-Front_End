import { NavLink } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const EventList = () => {
  const url = "https://meet-up-app-back-end.vercel.app/events";
  const { data, loading, error } = useFetch(url);
  let eventData = [data ? data: ""];
  const [ renderedEventData, setRenderedEventData ] = useState(data);

  function selectHandler(event) {
    // console.log(event.target.value);
    if (event.target.value === "All") eventData = [...data];
    else
     eventData = data.filter((eventData) => eventData.mode === event.target.value);
    console.log(eventData);
    setRenderedEventData(eventData);
  }
  

  return (
    <div className="bg-body-secondary py-4 px-3">
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center">
          <h1>
            <strong>Meetup Events</strong>
          </h1>
          <div>
            <select
              id="event-type"
              className="form-select"
              onChange={selectHandler}
            >
              <option value="All" selected disabled>
                Select Event Type
              </option>
              <option value="All">All</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
        <div id="event-cards">
          <div className="row justify-content-center my-4">
            {renderedEventData?.length > 0 ? (
              renderedEventData.map((event) => (
                <div
                  className="card rounded px-0 col-md-4 my-2 mx-4 text-center"
                  style={{ width: "22rem" }}
                  key={event._id}
                >
                  <img
                    src={event.imageLink}
                    className="card-img-top img-fluid"
                    alt="card-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title m-1">{event.title}</h5>
                    <p className="card-text m-1">{event.dateTimeFrom}</p>
                    {event.mode == "Online" ? (
                      <button className="btn btn-success">
                        Online
                      </button>
                    ) : (
                      <button className="btn btn-outline-secondary">
                        Offline
                      </button>
                    )}
                  </div>
                  <NavLink
                    className="btn btn-primary m-3"
                    to={`/event/${event._id}`}
                  >
                    Check Details
                  </NavLink>
                </div>
              ))
            ) : (
              <h2>Please select event type..</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
