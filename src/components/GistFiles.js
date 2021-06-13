import React, { Component } from "react";
import '../App.css';

export default class GistFiles extends Component{

    render() {

        const files = Object.values(this.props.files)

        const listItems = files.map((file) =>
            <li className={"file-container"} key={file.filename}>
                <div>{ file.filename.toString().split(".").slice(0,1) } </div>
                <div className="tag"> .{ file.filename.toString().split(".").slice(1,2) } </div>
            </li>
        );

        return (
            <ul> {listItems} </ul>
        );
    }

}
