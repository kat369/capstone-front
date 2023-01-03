import React from 'react'

function Profile({data}) {
  return (
    <div className="col-4">
     <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={data.pic}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p>
                      <small className="text-muted">
                        Working with us since Jan-2020 
                      </small>
                    </p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{data.email}</li>
                      <li className="list-group-item">{data.mobile}</li>
                      <li className="list-group-item">Available</li>
                    </ul>
                    <div className="card-body">
                      <a href="#" className="card-link">
                        View Full Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Profile