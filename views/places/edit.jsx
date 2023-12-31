const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  <div className="row">
  <div className="form-group col-sm-6">
    <label htmlFor="name">Place Name</label>
    <input className="form-control" id="name" name="name"
    value={data.places.name}
     required />
  </div>
  <div className="form-group col-sm-6">
    <label htmlFor="pic">Place Picture</label>
    <input className="form-control" id="pic" name="pic"
    value={data.places.name} />
  </div>
  <div className="form-group col-sm-6">
    <label htmlFor="city">City</label>
    <input className="form-control" id="city" name="city"
    value={data.places.name} />
  </div>
  <div className="form-group col-sm-6">
    <label htmlFor="state">State</label>
    <input className="form-control" id="state" name="state"
    value={data.places.name} />
  </div>
  <div className="form-group col-sm-6">
    <label htmlFor="cuisines">Cuisines</label>
    <input className="form-control" id="cuisines" name="cuisines" required />
  </div>
  </div>
  <input className="btn btn-primary" type="submit" value="Add Place"/>
</form>


            </main>
        </Def>
    )
}

module.exports = edit_form

