import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTexts } from '../actions/textsActions'

const HomePage = ({ dispatch, texts }) => {
  useEffect(() => {
    dispatch(fetchTexts())
  }, [dispatch])

  return (  <section className="homeSection">
      <div className="center">
        <h1>{texts}</h1>      
      </div>
      <h2 className="center">This is the dashboard.</h2>
    </section>
  )
}

const mapStateToProps = state => ({
  texts: state.texts.texts,
})

export default connect(mapStateToProps)(HomePage)

