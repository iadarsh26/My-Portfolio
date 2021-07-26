import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



import linkedin from '../img/social/linkedin.png'
import twitter from '../img/social/twitter.jpg'
import github from '../img/social/github.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="p-4 mb-0 bg-primary text-white text-center static-bottom">

        <div className="p-3 mb-0 bg-primary text-white text-center">
          <div className="p-3 mb-0 bg-primary text-white text-center">
            <div style={{ maxWidth: '100vw' }} className="columns">
             
              <div className="column is-13 social">
                <a title="linkedin" href="https://www.linkedin.com/in/adarsh-singh03/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1.7em', height: '1.7em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/arshsingh03">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1.5em', height: '1.5em' }}
                  />
                </a>
                <a title="github" href="https://github.com/iadarsh26">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '1.5em', height: '1.5em' }}
                  />
                </a>
              </div>
              <div>
              
            </div>  
            </div>
            <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Portfolio project build under the guidance of {' '}
          <a className="text-decoration-none" href="https://www.agarkarmedia.com/" target="_blank" rel="noopener noreferrer">
            <span className="font-weight-bold text-white"> AgarkarMedia</span>
          </a>
        </p>  
        
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
