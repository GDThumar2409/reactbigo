import React, { Component } from 'react';
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";


class Editor extends Component {
    constructor(props) {
      super(props);
    }


// Render editor
render(){
    return(
        <AceEditor
            mode="java"
            theme="github"
            name="editor"
            editorProps={{ $blockScrolling: true }}
        />
    );
}

}

export default Editor;

