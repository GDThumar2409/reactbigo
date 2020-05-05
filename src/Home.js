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
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8">
            <div>
            <div style={{float:'right'}}>
              <Link to="/Add-Lab"  className="btn btn-outline-info" type="submit">Add new Lab</Link>
             
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
                  <a className="article-title" href="#">Lab 1</a>
                  <hr />

                </div>
              </div>
            </div>
            <div className="media content-section">
              <div className="media-body">
                <div className="article-metadata" style={articlestyle}>
                  <img style={imgstyle} className="thumbnail account-img" src="https://stackblitz.com/files/react-scepxt/github/GDThumar2409/react-BigO/master/download.png" />
                  <a className="article-title" href="#">Lab 2</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <br /><br /><br />
            <div className="content-section">
            <div>
              <h2 style={{textAlign:'center'}}> My subjects </h2>
              <hr/>
            </div>
          <div>
            <ul id="myUL">
              <li><span className="caret"><a href="#" >Java</a></span>
                <ul className="nested">
                  <li><span className="caret"><a href="#" >Lab 1</a></span>
                    <ul className="nested">
                      <li>Problem 1</li>
                      <li>Problem 2</li>
                      <li>Problem 3</li>
                    </ul>                 
                  </li>
                  <li><span className="caret"><a href="#" >Lab 2</a></span>
                    <ul className="nested">
                      <li>Problem 1</li>
                      <li>Problem 2</li>
                      <li>Problem 3</li>
                    </ul>                 
                  </li>                 
                </ul>
              </li>
              <li><span className="caret"><a href="#" >Dsa</a></span>
                <ul className="nested">
                  <li><span className="caret"><a href="#" >Lab 1</a></span>
                    <ul className="nested">
                      <li>Problem 1</li>
                      <li>Problem 2</li>
                      <li>Problem 3</li>
                    </ul>                 
                  </li>
                  <li><span className="caret"><a href="#" >Lab 2</a></span>
                    <ul className="nested">
                      <li>Problem 1</li>
                      <li>Problem 2</li>
                      <li>Problem 3</li>
                    </ul>                 
                  </li>                 
                </ul>
              </li>
            </ul>
          </div>

        </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
