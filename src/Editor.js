import React, { Component } from 'react';
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import MySubjects from './MySubjects';


class Editor extends Component {
    constructor(props) {
        super(props);
    }


    // Render editor
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <AceEditor className="shadow-lg p-4 mb-4 bg-white" style={{ width: 'auto' }}
                            mode="java"
                            theme="github"
                            name="editor"
                            editorProps={{ $blockScrolling: true }}
                        />
                        <button className="btn btn-outline-primary btn-sm" style={{ margin: 10 }}>Run Code</button>
                        <button className="btn btn-outline-success btn-sm">Submit Code</button>
                        <div >

                        </div>
                        <div class="alert alert-success alert-dismissible fade show">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Success!</strong> This alert box could indicate a successful or positive action.
                        </div>
                    </div>
                    <MySubjects></MySubjects>
                </div>
            </div>
        );
    }

}

export default Editor;

