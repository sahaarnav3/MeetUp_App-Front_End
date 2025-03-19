import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import EventList from "./components/EventList";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

function App() {
  const url = "https://meet-up-app-back-end.vercel.app/events";
  const { data, error } = useFetch(url);
  const [finalData, setFinalData] = useState("");
  const searchHandlerFilter = (value) => {
    setFinalData(
      data.filter(
        (event) =>
          event.title.toLowerCase().includes(value) ||
          event.tags.join(" ").toLowerCase().includes(value) ||
          event.mode.toLowerCase().includes(value)
      )
    );
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFinalData(data);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [data]);

  return (
    <section>
      <Header
        searchHandlerFilter={searchHandlerFilter}
      />
      <EventList data={finalData} error={error} />
    </section>
  );
}

export default App;
