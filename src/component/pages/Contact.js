import React, { useState } from 'react';
import styles from '../../css/contact.module.css';
import Footer from '../Footer';
import Input from '../Input';

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <section className={styles.container}>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form className={styles.form}>
          <div className={styles.name}>
            <Input type="text" name="First name" placeholder="Enter your first name" className={styles.inputContainer} id="first_name" />
            <Input type="text" name="Last name" placeholder="Enter your last name" className={styles.inputContainer} id="last_name" />
          </div>
          <Input type="email" name="Email" placeholder="yourname@email.com" className={styles.inputContainer} id="email" />
          <textarea
            className={styles.textarea}
            id="message"
            placeholder="Send me a message and I&rsquo;ll reply to you as soon as possible...
"
          />
          <div className={styles.conditions}>
            <Input type="checkbox" className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`} name="checkbox" checked={isChecked} onChange={handleCheckbox} id="checkbox" />
            <span>You agree to providing your data to Victor Okoroji who may contact you.</span>
          </div>
          <button type="submit" className={styles.submitButton} id="btn__submit"> Send message </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
