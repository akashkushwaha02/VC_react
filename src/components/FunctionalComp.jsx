import React, { useState } from "react";

const initialValue = {
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
function FunctionalComp() {
  const [values, setValues] = useState(initialValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="funcComp">
      <h1>Function Component</h1>
      <input
        name="Name"
        type="text"
        placeholder="Name"
        onChange={handleInputChange}
        value={values.Name}
      />
      Name : {values.Name}
      <input
        name="Email"
        type="email"
        placeholder="Email"
        onChange={handleInputChange}
        value={values.Email}
      />
      Email : {values.Email}
      <input
        name="Age"
        type="number"
        placeholder="Age"
        onChange={handleInputChange}
        value={values.Age}
      />
      Age : {values.Age}
      <input
        name="phone"
        type="number"
        placeholder="Mobile number"
        onChange={handleInputChange}
        value={values.phone}
      />
      Phone : {values.phone}
      <input
        name="address"
        type="text"
        placeholder="address"
        onChange={handleInputChange}
        value={values.address}
      />
      address : {values.address}
      <input
        name="city"
        type="text"
        placeholder="city"
        onChange={handleInputChange}
        value={values.city}
      />
      city : {values.city}
      <input
        name="State"
        type="text"
        placeholder="state"
        onChange={handleInputChange}
        value={values.State}
      />
      State : {values.State}
      <input
        name="Country"
        type="text"
        placeholder="Country"
        onChange={handleInputChange}
        value={values.Country}
      />
      Country : {values.Country}
      <input
        name="library"
        type="text"
        placeholder="javascript library"
        onChange={handleInputChange}
        value={values.library}
      />
      library : {values.library}
      <input
        name="laptop"
        type="text"
        placeholder="Name your laptop"
        onChange={handleInputChange}
        value={values.laptop}
      />
      laptop : {values.laptop}
    </div>
  );
}

export default FunctionalComp;
