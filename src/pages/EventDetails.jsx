import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

const EventDetails = () => {
  const eventId = useParams().eventId;
  // console.log(eventId);
  const url = `https://meet-up-app-back-end.vercel.app/events/${eventId}`;
  const { data, error } = useFetch(url);
  if (error)
    console.log(
      "Some error occured while fetching event data. Please check logs",
      error
    );

  return (
    <>
      <Header />
      <main className="bg-body-secondary">
        <div className="container py-4">
          <div>
            {error ? (
              <h1>
                <strong>Error Fetching Data. Please try again.</strong>
              </h1>
            ) : data ? (
              <div className="row justify-content-between">
                <div className="col-md-7 pe-5">
                  <h1>
                    <strong>{data.title}</strong>
                  </h1>
                  <p className="mb-0 pb-0">Hosted By:</p>
                  <strong className="mt-0 pt-0">{data.hostedBy}</strong>
                  <div className="my-4">
                    <img
                      src={data.imageLink}
                      alt="bg-img"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="mb-3">
                    <strong>Details:</strong>
                  </h3>
                  <p className="mb-4">{data.details}</p>
                  <div className="my-4">
                    <h3 className="mb-3">
                      <strong>Additional Information:</strong>
                    </h3>
                    <p>
                      <strong>Dress Code:</strong> {data.dressCode}
                    </p>
                    <p>
                      <strong>Age Restrictions:</strong> {data.ageRestriction}
                    </p>
                  </div>
                  <h3>
                    <strong>Event tags:</strong>
                  </h3>
                  <div className="my-3">
                    <button className="btn btn-danger px-4 me-4">
                      {data.tags[0]}
                    </button>
                    <button className="btn btn-danger px-4 me-4">
                      {data.tags[1]}
                    </button>
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <div className="bg-white rounded p-3">
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-3">🕛</div>
                      <div>
                        <span>{data.dateTimeFrom}</span> <br />
                        <span>{data.dateTimeTo}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-3">📍</div>
                      <div>
                        <span>{data.location}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">💵</div>
                      <div>
                        <span>
                          <span>₹</span> {data.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <h3>
                      <strong>Speakers: (2)</strong>
                    </h3>
                    <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                      <div className="bg-white rounded text-center p-3">
                        <img
                          src={data.speakers[0].imageUrl}
                          alt="profile"
                          className="img-fluid rounded-circle mb-2"
                        />
                        <div>
                          <strong>{data.speakers[0].name}</strong>
                          <p className="p-0 m-0">
                            {data.speakers[0].designation}
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded text-center p-3">
                        <img
                          src={data.speakers[1].imageUrl}
                          alt="profile"
                          className="img-fluid rounded-circle mb-2"
                        />
                        <div>
                          <strong>{data.speakers[1].name}</strong>
                          <p className="p-0 m-0">
                            {data.speakers[1].designation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-danger px-5">RSVP</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default EventDetails;
