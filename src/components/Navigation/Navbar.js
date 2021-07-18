import React from 'react';
import {Link} from 'react-router-dom';

const navbar = () => {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <Link className="navbar-brand" to="/">ORGALIFE</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/TodoApp">TodoApp</Link>
                <Link className="nav-link" to="pl.reactjs.org">What is React?</Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default navbar;