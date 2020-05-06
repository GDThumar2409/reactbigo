import React, { Component } from 'react';
import {
    NavLink,
    Link
} from "react-router-dom";

export default class Challenge extends Component {
    render() {
        var imgstyle = {
            width: 50,
            height: 50
        };
        var articlestyle = {
            border: 1,
            borderColor: "#5f788a"
        };
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>Unable to log in with provided credentials.</p>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div style={{ float: 'right' }}>
                            <Link to="/Add-Challenge" className="btn btn-outline-info" type="submit">Add new Challenge</Link>
                        </div>
                        <div>
                            <h2>Lab 1</h2>
                        </div>
                        <hr/>
                        <div className="media content-section">

                            <div className="media-body">
                                <div className="article-metadata" style={articlestyle}>
                                    <img style={imgstyle} className="thumbnail account-img" src="https://stackblitz.com/files/react-scepxt/github/GDThumar2409/react-BigO/master/download.png" />
                                    <Link to="/Challenge" className="article-title" href="#">Challenge 1</Link>
                                    <Link to="/Add-Lab" style={{ float: 'right', margin: 10 }} className="btn btn-outline-info" type="submit">Update</Link>
                                    <Link to="/Add-Lab" style={{ float: 'right', margin: 10 }} className="btn btn-outline-danger" type="submit">Delete</Link>
                                </div>
                            </div>
                        </div>
                        <div className="media content-section">
                            <div className="media-body">
                                <div className="article-metadata" style={articlestyle}>
                                    <img style={imgstyle} className="thumbnail account-img" src="https://stackblitz.com/files/react-scepxt/github/GDThumar2409/react-BigO/master/download.png" />
                                    <Link to="/Challenge" className="article-title" href="#">Challenge 2</Link>
                                    <Link to="/Add-Lab" style={{ float: 'right', margin: 10 }} className="btn btn-outline-info" type="submit">Update</Link>
                                    <Link to="/Add-Lab" style={{ float: 'right', margin: 10 }} className="btn btn-outline-danger" type="submit">Delete</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
