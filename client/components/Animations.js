import React from 'react';

class Animations extends React.Component{
  render() {
    return (
      <div className="animations">
        <h1>Animations</h1>
        <div className="buttons">
          <button className="grow">grow</button>
          <button className="shrink">shrink</button>
          <button className="change-color">color change</button>
        </div>

        <div className="wrapper">
          <div className="ball"></div>
        </div>
        <p className="line anim-typewriter">Animation is interesting,enjoy!</p>
      </div>
    )
  }
}

export default Animations;