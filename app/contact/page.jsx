import { Fragment } from "react";
import Link from "next/link";
import styles from "../styles/contact.module.css";

const ContactPage = () => {
  return (
    <Fragment>
      <div className={styles.section_contact}>
        <h1 className={styles.title}>Contacto</h1>
        <h2 className={styles.subtitle}>Solicitar información</h2>
        <p className={styles.info}>
          Nos comprometemos a satisfacer sus necesidades, completa el formulario
          con tus datos y te contactaremos lo antes posible.
        </p>
        <form action="GET" className={styles.form}>
          <input
            className={styles.input}
            type="text"
            id="fname"
            name="fname"
            placeholder="Nombre"
            required
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Apellido"
            required
          />
          <input
            className={styles.input}
            type="email"
            id="lname"
            name="lname"
            placeholder="Correo electrónico"
            required
          />
          <input
            className={styles.input}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Teléfono"
          />
          <div className={styles.textarea_div}>
            <label htmlFor="mensaje" className={styles.label}>
              Mensaje
            </label>
            <textarea
              className={styles.textarea}
              id="mensaje"
              name="mensaje"
              placeholder="Introduce tu mensaje"
              data-name="Mensaje"
            ></textarea>
          </div>
          <div className="policy">
            <label htmlFor="" className={styles.label}>
              Lee la política de privacidad.
            </label>
            <div className={styles.checkbox}>
              <input type="checkbox" />
              <p className={styles.line}>
                He leído y acepto la política de privacidad*
              </p>
            </div>
          </div>
          <div className={styles.cta}>
            <Link className={styles.btn} href="/">
              Enviar
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactPage;
