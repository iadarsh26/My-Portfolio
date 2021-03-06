import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <h4><p className='font-weight-bold text-uppercase'>{item.subheading}</p></h4>
          <div className="has-text-centered">
            <div
              style={{
                width: '60%',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
          <p className='font-weight-bold'>{item.tags}</p>
          <button style={{position:'relative', bottom:'-5px',}} className="btn"><a className="text-decoration-none" href="https://github.com/iadarsh26">
              Source Code
            </a></button>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      tags: PropTypes.string,
      subheading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
