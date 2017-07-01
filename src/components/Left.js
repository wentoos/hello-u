import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class App extends Component {
    state={
        num:0
    }
    setNum(num){
        this.setState({num})
    }
  render() {
    return (
        <div>
            {/* <a className="js-fh5co-nav-toggle fh5co-nav-toggle">
                <i></i>
            </a> */}
            <aside className="left">
                <h1 id="logo"><a>小u小虾</a></h1>
                <nav id="main-menu">
                    <ul>
                        <li><NavLink exact onClick={this.setNum.bind(this,0)} to='/'>Home</NavLink></li>
                        <li><NavLink  onClick={this.setNum.bind(this,1)} to='/blog'>Blog</NavLink></li>
                        <li><NavLink  onClick={this.setNum.bind(this,2)} to='/photo'>Photo</NavLink></li>
                        <li><NavLink  onClick={this.setNum.bind(this,4)} to='/user'>Me</NavLink></li>
                    </ul>
                </nav>

                {/* <div className="fh5co-footer">
                    <ul>
                        <li><a href="#"><i className="icon-facebook2"></i></a></li>
                        <li><a href="#"><i className="icon-twitter2"></i></a></li>
                        <li><a href="#"><i className="icon-instagram"></i></a></li>
                        <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                    </ul>
                </div> */}
            </aside>
        </div>

    );
  }
}

export default App;
