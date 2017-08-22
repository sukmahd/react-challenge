import React, { Component } from 'react'

let marginRight = {
  marginRight: '2px'
}

let marginStyle = {
  marginBottom: "10px"
};

class Heroes extends Component {
  render () {
    return (
      <div className="row">
      {
        this.props.heroes.map((hero) => {
          let img = 'https://api.opendota.com' + hero.img
          return (
            <div className="col-sm-4 col-md-3" style={marginStyle} key={hero.id}>
              <div className="card text-center">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title">{hero.localized_name}</h4>
                    {
                      hero.roles.map((role, index) => {
                        return (
                          <span key={index} style={marginRight} className="badge badge-danger">{role}</span>
                        )
                      })
                    }
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  <a href="" className="btn btn-primary ">Details</a>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default Heroes
