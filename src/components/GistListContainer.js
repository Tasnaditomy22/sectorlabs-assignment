import React, { Component } from "react";
import GistServices from "../apis/gist-api";
import '../App.css';
import Gist from "./Gist";

export default class GistListContainer extends Component{
    constructor(props) {
        super(props);
        this.retrieveGistList = this.retrieveGistList.bind(this);

        this.state = {
            gistList: []
        }
    }

    componentDidMount() {
        this.retrieveGistList(this.props.userName);
    }

    retrieveGistList(userName){

        GistServices.getGistsForUser(userName)
            .then( response => {
                this.setState({
                    gistList : response.data
                });
                //console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {

        const { gistList } = this.state;

        return (
            <div>
                <GistList data={gistList} />
            </div>
        );
    }

}

function GistList(props) {

    const data = props.data;

    const listItems = data.map((gist) =>
        <Gist key={gist.id} value={gist}/>
    );
    return (
        <ul>{listItems}</ul>
    );
}