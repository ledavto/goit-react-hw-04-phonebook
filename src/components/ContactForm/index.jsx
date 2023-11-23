import { useState } from 'react';
// import { Component } from 'react';

export const ContactForm = ({ addCont }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e);
    addCont({ name: name, number: number });

    e.target.name.value = '';
    e.target.number.value = '';
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="form-control"
          id="exampleFormControlInput1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Telephone
        </label>
        <input
          type="tel"
          name="number"
          required
          className="form-control"
          id="exampleFormControlInput2"
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Add contact
      </button>
    </form>
  );
};
