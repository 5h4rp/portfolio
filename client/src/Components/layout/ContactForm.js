import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ''
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action='https://formspree.io/mwkbyleb'
        method='POST'
      >
        <input
          className='field'
          type='text'
          name='name'
          placeholder='Name'
          required
        />
        <input
          className='field'
          type='email'
          name='email'
          placeholder='Email'
          required
        />

        <textarea
          className='field'
          name='message'
          placeholder='Message'
          required
        ></textarea>
        {status === 'SUCCESS' ? (
          <p className='success-msg'>Thanks!</p>
        ) : (
          <button>Submit</button>
        )}
        {status === 'ERROR' && (
          <p className='error-msg'>Ooops! There was an error.</p>
        )}
        <a href='mailto:ajayender@live.in'>
          <i class='fas fa-envelope'></i>
          <p>Email Me</p>
        </a>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}

export default ContactForm;
