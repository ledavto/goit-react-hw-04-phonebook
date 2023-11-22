import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCont(this.state);
    e.target.name.value = '';
    e.target.number.value = '';
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
