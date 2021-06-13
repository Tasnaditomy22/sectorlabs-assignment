import React, {Component} from "react";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.onChangeName = this.onChangeName.bind(this);


        this.state = {
            userName: ''
        }
    }

    handleClick() {
        this.props.handleClick(this.state.userName);
    }

    onChangeName(e){
        this.setState({
            userName: e.target.value
        });
        this.props.handleChange();
    }

    render() {

        return (
            <div className="header">
                <label htmlFor="Name">Enter Username:</label>
                <input
                    type="text"
                    id="userName"
                    required
                    value={this.state.userName}
                    onChange={this.onChangeName}
                    name="userName"
                />
                <button onClick={this.handleClick}>Search</button>
            </div>
        );
    }
}