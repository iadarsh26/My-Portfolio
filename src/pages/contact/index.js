import React from 'react'
import Layout from '../../components/Layout'



export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container pb-5 mb-3">
            <div className="content">
              <h1 className='column is-12 has-text-centered'
              style={{
                fontFamily:'serif',
                fontSize:'3rem',
              }}
              >Get in Touch</h1>
              <hr>
              </hr>
            </div>
              <div className='row'>
                <div class="col">
                </div>
                <div className='col col-md-5 order-1 has-text-centered'>
                  <p
                  style={{
                    fontFamily:'serif',
                    fontSize:'2rem',
                    marginLeft: 'auto',
                    marginRight:'auto',
                  }} 
                  >
                  Have a little something, something you want to 
                  talk to me about? Well give me a ring, send me an email. 
                  </p>
                </div>
                <div class="col order-5">
                </div>
              </div>

                <a
                  href='mailto:singhaadarsh26@gmail.com?subject=The%20subject%20of%20the%20mail'
                >
                <br/>
                <div class="text-center">
                  <button className="btn">
                      Let's Talk
                  </button>
                </div>
                </a>
            </div>
        </section>
      </Layout>
    )
  }
}
