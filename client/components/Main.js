import React from 'react';
import { Link } from 'react-router';
import pic from '../images/abc.jpg'

class Main extends React.Component{
    render() {
        return (
            <div className="dashboard">
                <div className="menu">
                    <div className="flag"></div>
                    <div className="title"><Link to="/">SciDex</Link></div>
                    <div className="profile">
                    <img src={pic}/>
                    <span>Chris Zhou</span>
                    </div>
                    <div className="submenu">
                        <Link className="jump" to="/photos">Photos</Link>
                        <Link className="jump" to="/search">Search</Link>
                        <Link className="jump" to="/animations">Animations</Link>
                    </div>
                </div>
                <div className="content">
                    {React.cloneElement(this.props.children,this.props)}
                </div>
            </div>
        )  
    }
};
 
export default Main;