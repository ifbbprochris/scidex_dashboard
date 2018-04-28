import React from 'react';

class SinglePhoto extends React.Component{

  render() {
    const { photo } = this.props;
    return (
      <div className="single-photo">
        <img src={photo && photo['thumbnailUrl'] ? photo['thumbnailUrl'] : ''}/>
      </div>
    )
  }
}

export default SinglePhoto;