import React, { Component } from "react";
import GistServices from "../apis/gist-api";
import '../App.css';

export default class GistForks extends Component{
    constructor(props) {
        super(props);
        this.retrieveForksList = this.retrieveForksList.bind(this);

        this.state = {
            gistForks: []
        }
    }

    componentDidMount() {
        this.retrieveForksList(this.props.forksUrl);
    }

    retrieveForksList(url){


        GistServices.getForksForGist(url)
            .then( response => {
                this.setState({
                    gistForks : response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {

        const { gistForks } = this.state;

        return (
            <div>
                { gistForks.length > 0 ?
                    <ForksList data={gistForks}/> : "No forks"
                }
            </div>
        );
    }

}

function ForksList(props) {

    const data = props.data;

    const listItems = data.slice(-3).map((fork) =>
        <li className={"fork-container"} key={fork.owner.id}>
            <div>{fork.owner.login ? fork.owner.login : ""}</div>
        </li>
    );
    return (
        <div>
            <p>Lastest forks: </p>
            <ul>{listItems}</ul>
        </div>
    );
}