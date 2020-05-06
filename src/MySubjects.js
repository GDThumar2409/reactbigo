import React, { Component } from 'react';

export default class MySubjects extends Component {
  render() {
    return (
        <div className="col-md-4">
        <br /><br /><br />
        <div className="content-section">
          <div>
            <h2 style={{ textAlign: 'center' }}> My subjects </h2>
            <hr />
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
    );
  }
}
