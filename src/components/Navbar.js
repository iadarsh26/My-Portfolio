 /* eslint-disable */ 
import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent navbar-expand-lg navbar-light bg-light"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
         <div className="navbar-item has-text-weight-bold is-size-3 text-decoration-none text-secondary">
              Adarsh S.
         </div>
            {/* Hamburger menu */}
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '4px',
            }}
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu  ${this.state.navBarActiveClass}`}
          >
            <div className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-end ml-auto">
            <Link className="navbar-item text-decoration-none" to="/">
                Home
              </Link>
              <Link className="navbar-item text-decoration-none" to="/about">
                About
              </Link>
              <Link className="navbar-item text-decoration-none" to="/projects">
                Projects
              </Link>
              <Link className="navbar-item text-decoration-none" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item text-decoration-none" to="/contact">
                Contact
              </Link>
              
            </div>
            
          </div>
      </nav>
    )
  }
}

export default Navbar
