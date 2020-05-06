import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  NavLink,
  Link
} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var imgstyle = {
      width: 50,
      height: 50
    };
    var articlestyle = {
      border: 1,
      borderColor: "#5f788a"
    };
    return (

          <div className="col-md-8">
            <div>
              <div style={{ float: 'right' }}>
                <Link to="/Add-Lab" className="btn btn-outline-info" type="submit">Add new Lab</Link>

              </div>
              <div>
                <h2>Dsa</h2>
              </div>

            </div>
            <br />
            <div className="media content-section">
              <div className="media-body">
                <div className="article-metadata" style={articlestyle}>
                  <img style={imgstyle} className="thumbnail account-img" src="https://stackblitz.com/files/react-scepxt/github/GDThumar2409/react-BigO/master/download.png" />
                  <Link to="/Challenge" className="article-title" href="#">Lab 1</Link>
                </div>
              </div>
            </div>
            <div className="media content-section">
              <div className="media-body">
                <div className="article-metadata" style={articlestyle}>
                  <img style={imgstyle} className="thumbnail account-img" src="https://stackblitz.com/files/react-scepxt/github/GDThumar2409/react-BigO/master/download.png" />
                  <Link to="/Challenge" className="article-title" href="#">Lab 2</Link>
                </div>
              </div>
            </div>
          </div>
        
    );
  }
}

export default Home;
