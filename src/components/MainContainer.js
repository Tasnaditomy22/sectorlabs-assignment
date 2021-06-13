import React, {Component} from "react";
import SearchBar from "./SearchBar";
import GistListContainer from "./GistListContainer";

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            inputText: null
        }
    }

    handleClick(userName){
        this.setState({inputText : userName});
    }

    handleChange(){
        this.setState({inputText : null});
    }

    render() {

        const { inputText } = this.state;

        return (
            <div>
                <SearchBar handleClick={this.handleClick} handleChange={this.handleChange}/>
                { inputText && <GistListContainer userName = {inputText}/> }
            </div>
        );
    }
}