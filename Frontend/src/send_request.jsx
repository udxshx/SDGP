import React from 'react';
import './RequestForm.css';

class RequestForm extends React.Component {
  // Initialize state, handle changes, and form submission as needed

  render() {
    return (
      <div className="request-form-container">
        <header className="header">
          <button className="back-button">← Back</button>
          <h1>Request form</h1>
        </header>
        <form className="request-form">
          <input className="fuck" type="text" placeholder="School Name" />
          <input className="fuck" type="date" />
          <input className="fuck" type="text" placeholder="Location" />
          <input className="fuck" type="text" placeholder="Subject" />
          <button type="submit" className="submit-button">Confirm Request</button>
          <label className="checkbox-container">
            <input type="checkbox" />
            Send me helpful emails
          </label>
          <label className="checkbox-container">
            <input type="checkbox" />
            Yes, I understand and agree to the Wixit Terms of Service, including the User Agreement and Privacy Policy.
          </label>
        </form>
        <footer className="form-footer">
          Step 02 of 03
        </footer>
      </div>
    );
  }
}

export default RequestForm;