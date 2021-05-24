import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Age: "",
      phone: "",
      address: "",
      city: "",
      State: "",
      Country: "",
      library: "",
      laptop: "",
    };
  }

  handleInput = (e) => {
    // this.setState({
    //   Name: e.target.value,
    //   Age: e.target.value,
    //   phone: e.target.value,
    //   address: e.target.value,
    //   city: e.target.value,
    //   State: e.target.value,
    //   Country: e.target.value,
    //   library: e.target.value,
    //   laptop: e.target.value,
    // });
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      Name,
      Email,
      Age,
      phone,
      address,
      city,
      State,
      Country,
      library,
      laptop,
    } = this.state;
    return (
      <div className="classComp">
        <h1>Class Component</h1>
        <input
          name="Name"
          type="text"
          placeholder="Name"
          onChange={this.handleInput}
        />
        Name : {Name}
        <input
          name="Email"
          type="email"
          placeholder="Email"
          onChange={this.handleInput}
        />
        Email : {Email}
        <input
          name="Age"
          type="number"
          placeholder="Age"
          onChange={this.handleInput}
        />
        Age : {Age}
        <input
          name="phone"
          type="number"
          placeholder="Mobile number"
          onChange={this.handleInput}
        />
        Phone : {phone}
        <input
          name="address"
          type="text"
          placeholder="address"
          onChange={this.handleInput}
        />
        address : {address}
        <input
          name="city"
          type="text"
          placeholder="city"
          onChange={this.handleInput}
        />
        city : {city}
        <input
          name="State"
          type="text"
          placeholder="state"
          onChange={this.handleInput}
        />
        State : {State}
        <input
          name="Country"
          type="text"
          placeholder="Country"
          onChange={this.handleInput}
        />
        Country : {Country}
        <input
          name="library"
          type="text"
          placeholder="javascript library"
          onChange={this.handleInput}
        />
        library : {library}
        <input
          name="laptop"
          type="text"
          placeholder="Name your laptop"
          onChange={this.handleInput}
        />
        laptop : {laptop}
      </div>
    );
  }
}

export default ClassComp;
