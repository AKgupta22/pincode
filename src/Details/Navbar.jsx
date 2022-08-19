import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top" id="navbar">
        <div className="container-fluid">
          < Link className="navbar-brand text-light" to="/" >Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/pincode">Pincode</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}
