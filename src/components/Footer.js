import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



import linkedin from '../img/social/linkedin.svg'
import twitter from '../img/social/twitter.svg'
import github from '../img/social/github.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="p-3 mb-0 bg-primary text-white text-center static-bottom">

        <div className="p-3 mb-0 bg-primary text-white text-center">
          <div className="p-3 mb-0 bg-primary text-white text-center">
            <div style={{ maxWidth: '100vw' }} className="columns">
             
              <div className="column is-13 social">
                <a title="linkedin" href="https://linkedIn.com">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="github" href="https://github.com">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
              <div>
              
            </div>  
            </div>
            <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Portfolio project developed under the guidance of {' '}
          <a className="text-decoration-none" href="https://www.agarkarmedia.com/" target="_blank" rel="noopener noreferrer">
            <span className="text-dark"> AgarkarMedia</span>
          </a>
        </p>  
        
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
