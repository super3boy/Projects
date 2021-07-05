import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transaprent">
    <Link className="navbar-brand font-weight-bold" to="/home">Noxe</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/movies">Movies</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/tv">Tv Shows</Link>
        </li>
    </ul>
    </div>
</nav>
            </>
        )
    }
}
