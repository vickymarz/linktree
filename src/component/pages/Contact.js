import React from 'react';
import styles from '../../css/contact.module.css';
import Footer from '../Footer';
import Input from '../Input';

const Contact = () => (
  <>
    <section className={styles.container}>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form className={styles.form}>
        <div className={styles.name}>
          <Input type="text" name="First name" placeholder="Enter your first name" className={styles.inputContainer} />
          <Input type="text" name="Last name" placeholder="Enter your last name" className={styles.inputContainer} />
        </div>
        <Input type="email" name="Email" placeholder="yourname@email.com" className={styles.inputContainer} />
        <textarea className={styles.textarea}>
          Send me a message and I&rsquo;ll reply you as soon as possible...
        </textarea>
        <div className={styles.conditions}>
          <Input type="checkbox" className={styles.checkbox} name="" />
          <span>You agree to providing your data to Victor Okoroji who may contact you.</span>
        </div>
        <button type="submit" className={styles.submitButton}> Send message </button>
      </form>
    </section>
    <Footer />
  </>
);

export default Contact;
