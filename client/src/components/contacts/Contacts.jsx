import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <h1>Car Dealership</h1>
      <p>
        Можете да се свържете с нас всеки делничен ден между 8:00 и 18:00 часа.
        През останалото време, можете да се свържете с нас на посочения имейл
        адрес.
      </p>
      <div className={styles.contactDetails}>
        <div>
          <strong>Телефон:</strong>
          <p>0894283645</p>
        </div>
        <div>
          <strong>Email:</strong>
          <p>info@cardealership.com</p>
        </div>
      </div>

      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11733.28828278205!2d23.36288445541856!3d42.67571956518862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbg!2sbg!4v1702033821468!5m2!1sbg!2sbg"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contacts;
