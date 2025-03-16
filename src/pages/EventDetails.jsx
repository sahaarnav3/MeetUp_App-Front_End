import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

const EventDetails = () => {
  const eventId = useParams().eventId;
  console.log(eventId);
  // const url = `https://meet-up-app-back-end.vercel.app/events/${eventId}`;
  // const { data, error } = useFetch(url);
  // if(error)
  //   console.log("Some error occured while fetching event data. Please check logs", error);
  // console.log(data);

  return (
    <>
      <Header />
      <main className="bg-body-secondary">
        <div className="container py-4">
          <div className="row justify-content-between">
            <div className="col-md-7 pe-5">
              <h1>
                <strong>Marketing Seminar</strong>
              </h1>
              <p className="mb-0 pb-0">Hosted By:</p>
              <strong className="mt-0 pt-0">Marketing Experts</strong>
              <div className="my-4">
                <img
                  src="https://i.postimg.cc/L8FvgZ94/pexels-photo-6476776.jpg"
                  alt="bg-img"
                  className="img-fluid"
                />
              </div>
              <h3>
                <strong>Details:</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                dolor accusantium mollitia veniam. Quidem, cum incidunt
                reprehenderit magnam quod est! Enim ad voluptatum autem
                accusamus minima similique deserunt non eveniet cum
                exercitationem! Illo voluptatem atque nobis possimus ex officiis
                enim debitis in quo nesciunt eligendi fugiat itaque doloremque
                voluptas iure, tempora ratione esse. Cupiditate soluta a
                adipisci odit? Nesciunt, quasi odit ad, exercitationem molestiae
                eum sint velit fuga officia, eos at nostrum! Quidem ab sit
                deserunt minima quisquam. Eaque, nulla.
              </p>
              <h3>
                <strong>Additional Information:</strong>
              </h3>
              <p>
                <strong>Dress Code:</strong> Smart Casual
              </p>
              <p>
                <strong>Age Restrictions:</strong> 18 and above
              </p>
              <h3>
                <strong>Event tags:</strong>
              </h3>
              <div className="my-3">
                <button className="btn btn-danger me-4">marketing</button>
                <button className="btn btn-danger me-4">digital</button>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="bg-white rounded p-3">
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">🕛</div>
                  <div>
                    <span>August 15th at 10:00 AM</span> <br />
                    <span>August 15th at 12:00 PM</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">📍</div>
                  <div>
                    <span>789 Marketing Avenue, City</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">💵</div>
                  <div>
                    <span>
                      <span>₹</span> 3,000
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <h3>
                  <strong>Speakers: (2)</strong>
                </h3>
                <div className="d-flex justify-content-between align-items-center my-4">
                  <div className="bg-white rounded text-center p-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/21.jpg"
                      alt="profile"
                      className="img-fluid rounded-circle mb-2"
                    />
                    <div>
                      <strong>Sarah Johnson</strong>
                      <p className="p-0 m-0">Marketing Manager</p>
                    </div>
                  </div>
                  <div className="bg-white rounded text-center p-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/21.jpg"
                      alt="profile"
                      className="img-fluid rounded-circle mb-2"
                    />
                    <div>
                      <strong>Sarah Johnson</strong>
                      <p className="p-0 m-0">Marketing Manager</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                  <button className="btn btn-danger px-5">
                    RSVP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventDetails;
