import React, {Component} from "react";

export default class Gist extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const value = this.props.value;

        return (
            <div>
                <li className={"flex-container"}>
                    <div>{value.description ? value.description : "no description"}</div>
                </li>
            </div>
        );
    }

}