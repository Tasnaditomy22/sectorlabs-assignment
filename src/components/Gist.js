import React, {Component} from "react";
import GistForks from "./GistForks";
import GistFiles from "./GistFiles";

export default class Gist extends Component {
    constructor(props) {
        super(props);
        this.toggleState = this.toggleState.bind(this);

        this.state = {
            active: false
        }
    }

    toggleState(){
        this.setState(prevState => ({
            active: !prevState.active
        }));
    }

    render() {

        const { active } = this.state;
        const value = this.props.value;

        return (
            <div>
                <li className={"gist-container"} onClick={this.toggleState}>
                    <div>{value.description ? value.description : "no description"}</div>
                    <div>
                        <GistForks forksUrl={value.forks_url} />
                    </div>
                </li>
                { active && <GistFiles files={value.files}/>}
            </div>
        );
    }

}