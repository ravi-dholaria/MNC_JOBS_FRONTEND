import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "https://mnc-jobs-backend.onrender.com/jobs/all";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  console.log(data);
  return (
    <>
      {data &&
        data.jobs.map((job, index) => (
          <div>
            <div id={index} class="row m-3 d-flex justify-content-center">
              <div class="card text-nowrap" style={{ width: "50rem" }}>
                <div class="card-body row">
                  <div class="col">
                    <h3 class="card-title mt-2 mb-4 text-start font-monospace">
                      {job.Company}
                    </h3>
                    <h5 class="card-subtitle mb-4 text-body-secondary text-start font-monospace">
                      {job.Position}
                    </h5>
                    <h6 class="text-start font-monospace fw-bold text-secondary">
                      {job.Location}
                    </h6>
                  </div>
                  <div class="col font-monospace">
                    <div class="row mt-2">
                      <p class="col fw-bold">Skills : </p>
                      <p class="col card-text fw-semibold text-secondary text-start">
                        {job.Skills}
                      </p>
                    </div>
                    <div class="row mt-2">
                      <p class="col fw-bold">Type : </p>
                      <p class="col card-text fw-semibold text-secondary text-start">
                        {job.Type}
                      </p>
                    </div>
                    <div class="row mt-2">
                      <p class="col card-text fw-semibold font-monospace text-end">
                        {job.Salary}
                      </p>
                    </div>
                    <div class="row mt-1">
                      <p class="col card-text fw-semibold font-monospace text-end">
                        {job.Experience}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={job.url}
                    type="button"
                    class="m-1 mt-3 p-2 btn btn-outline-primary stretched-link"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Home;
