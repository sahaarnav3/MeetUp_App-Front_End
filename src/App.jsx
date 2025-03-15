import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import EventList from "./components/EventList";

function App() {

  return (
    <section>
      <Header />
      <EventList />
    </section>
  )
}

export default App