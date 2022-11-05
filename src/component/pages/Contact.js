import React, { useState, useRef } from 'react';
import styles from '../../css/contact.module.css';
import Footer from '../Footer';
import Input from '../Input';

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const validate = () => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (firstNameRef.current.value.length === 0 || firstNameRef.current.value.trim() === '') {
      errors.first_name = 'Please enter a message';
      firstNameRef.current.focus();
      firstNameRef.current.style.border = '1px solid #F89687';
    }

    if (lastNameRef.current.value.length === 0 || lastNameRef.current.value.trim() === '') {
      errors.last_name = 'Please enter a message';
      lastNameRef.current.focus();
      lastNameRef.current.style.border = '1px solid #F89687';
    }

    if (!regex.test(emailRef.current.value)) {
      errors.email = 'This is not a valid email format!';
      emailRef.current.focus();
      emailRef.current.style.border = '1px solid #F89687';
    }

    if (emailRef.current.value.length === 0 || firstNameRef.current.value.trim() === '') {
      errors.email = 'Please enter a message';
      emailRef.current.focus();
      emailRef.current.style.border = '1px solid #F89687';
    }

    if (textAreaRef.current.value.length === 0 || firstNameRef.current.value.trim() === '') {
      errors.message = 'Please enter a message';
      textAreaRef.current.focus();
      textAreaRef.current.style.border = '1px solid #F89687';
      textAreaRef.current.style.boxShadow = '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC';
    }

    return errors;
  };

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate);
  };

  return (
    <>
      <section className={styles.container}>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.name}>
            <Input
              type="text"
              text="First name"
              name="first_name"
              placeholder="Enter your first name"
              className={styles.inputContainer}
              id="first_name"
              value={user.first_name}
              innerRef={firstNameRef}
              onChange={handleChange}
              errorMessage={errors.first_name}
            />
            <Input
              type="text"
              text="Last name"
              name="last_name"
              placeholder="Enter your last name"
              className={styles.inputContainer}
              id="last_name"
              value={user.last_name}
              innerRef={lastNameRef}
              onChange={handleChange}
              errorMessage={errors.last_name}
            />
          </div>
          <Input
            type="email"
            text="Email"
            name="email"
            placeholder="yourname@email.com"
            className={styles.inputContainer}
            id="email"
            value={user.email}
            innerRef={emailRef}
            onChange={handleChange}
            errorMessage={errors.email}
          />
          <div className={styles.textareaContainer}>
            <textarea
              className={styles.textarea}
              name="message"
              id="message"
              ref={textAreaRef}
              onChange={handleChange}
              value={user.message}
              placeholder="Send me a message and I&rsquo;ll reply to you as soon as possible...
"
            />
            <small>{errors.message}</small>
          </div>
          <div className={styles.conditions}>
            <Input type="checkbox" className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`} text="checkbox" checked={isChecked} onChange={handleCheckbox} id="checkbox" />
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
