import React, {Component} from "react";
import GistForks from "./GistForks";

export default class Gist extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const value = this.props.value;

        return (
            <div>
                <li className={"gist-container"}>
                    <div>{value.description ? value.description : "no description"}</div>
                    <div>
                        <GistForks forksUrl={value.forks_url} />
                    </div>
                </li>
            </div>
        );
    }

}