import React from "react";

export default class Props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: {
        value: "",
        error: false
      }
    };
  }

  handleField = e => {
    this.setState({
      searchStr: {
        ...this.state.searchStr,
        value: e.target.value,
        error: false
      }
    });
  };
  submitHandler = e => {
    e.preventDefault();
    if (this.state.searchStr.value !== "") {
      this.props.getGifs(this.state.searchStr.value);
    } else {
      this.setState({
        searchStr: {
          ...this.state.zoekHet,
          error: true
        }
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.searchStr.value}
          onChange={this.handleField}
          className={this.state.searchStr.error ? "error" : "field"}
        />
        <input type="submit" value="Search" className="button" />
      </form>
    );
  }
}
