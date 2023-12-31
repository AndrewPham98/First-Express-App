const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          ...
        </div>
      )
    })
  }
  return (
      <Def>
        <main>
          <div className="row">
            ...
            <div className="col-sm-6">
              <h1>{ data.place.name }</h1>
              <h2>
                Rating
              </h2>
              {rating}
              <br />
              ...
            </div>
          </div>
        </main>
      </Def>
    )
  }


  module.exports = show