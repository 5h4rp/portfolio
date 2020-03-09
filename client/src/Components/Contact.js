import React from 'react';
import ContactForm from './layout/ContactForm';

const Contact = () => {
  return (
    <main class='contact'>
      <section>
        <div class='contact-form'>
          <div class='title'>
            <h2>Contact</h2>
            <p>
              Would love to hear from you! Leave a message here or shoot me a
              mail using the link below.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
