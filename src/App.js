import React from "react";
import "./styles.css";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Results from "./components/Results";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: {
        loading: false,
        error: false,
        data: []
      }
    };
  }
  getGifs = str => {
    this.setState({
      ...this.state.gifs,
      loading: true
    });
    axios
      .get("https://api.tenor.com/v1/search?q=" + str + "&key=LTQPU1Q2IFKT")
      .then(results => {
        this.setState({
          gifs: {
            ...this.state.gifs,
            data: [...results.data.results],
            loading: false
          }
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <h1>GIF SEARCHER</h1>
        <Form getGifs={this.getGifs} />
        {this.state.gifs.loading && <Loading />}
        {this.state.gifs.data.length !== 0 && (
          <Results gifs={this.state.gifs.data} />
        )}
      </div>
    );
  }
}
