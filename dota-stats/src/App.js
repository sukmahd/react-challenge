import React, { Component } from 'react';
import axios from 'axios'
import Heroes from './components/Heroes'

let putih = {
  backgroundColor: 'white'
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      heroes: []
    }
  }

  render() {
    return (
      <div className="container">
        <div style={putih} className="jumbotron jumbotron-fluid">
          <img className="img-fluid" src="http://static.tumblr.com/72dcd145aaa2943bfee6bcf24843dfa6/zfkxrla/vABmxijsn/tumblr_static_dota2logo123.png" alt="Card image cap"/>
        </div>
          <Heroes heroes={this.state.heroes}></Heroes>
      </div>
    );
  }

  componentDidMount() {
    const self = this
    axios.get('https://api.opendota.com/api/heroStats')
    .then(response => {
      let data = response.data
      console.log(data);
      self.setState({
        heroes: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}



export default App;
