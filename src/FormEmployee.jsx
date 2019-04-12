import React, { Component } from 'react';


class FormEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
  
    const url = "http://campus-bordeaux.ovh:3001/api/quests/employees/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Employé ajouté avec l'ID ${res}!`);
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un employé');
      });
  }

  render() {
    return (
      <div className="FormEmployee">
        <h1>Saisi ton film préféré !</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="film">Film</label>
              <input
                type="text"
                id="film"
                name="film"
                onChange={this.onChange}
                value={this.state.film}
              />
            </div>

            <div className="form-data">
              <label htmlFor="url">URL</label>
              <input
                type="url"
                id="url"
                name="url"
                onChange={this.onChange}
                value={this.state.url}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <input
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default FormEmployee;