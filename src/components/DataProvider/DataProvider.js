import React, { Component } from 'react';

class DataProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { loadData } = this.props;
    loadData()
      .then((data) =>
        this.setState({
          data,
        })
      )
      .catch((error) => this.setState({ isError: error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return this.props.children(this.state);
  }
}

export default DataProvider;
