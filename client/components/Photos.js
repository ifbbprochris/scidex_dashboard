import React from 'react';
import SinglePhoto from './SinglePhoto';
import axios from 'axios';

class Photos extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      photos:[]
    }
  }

  componentWillMount(){
    let that = this
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        that.setState({photos:response.data})
      });
  }

  render() {
    return (
      <div className='photos'>
        <h1>Photos</h1>
        {this.state.photos ? this.state.photos.map( (i) => 
          <SinglePhoto photo={i} key={i['id']}/>) : ''}
      </div>
    )
  }
}

export default Photos;