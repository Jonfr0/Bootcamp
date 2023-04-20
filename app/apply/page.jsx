import { Fragment } from "react";
import styles from "../styles/apply.module.css";
import Link from "next/link";

const ApplyPage = () => {
  return (
    <div className={styles.section_apply}>
      <h1 className={styles.title}>Aplicar a la Bootcamp</h1>
      <h2 className={styles.subtitle}>¡Gracias por tu interés en nosotros!</h2>
      <p className={styles.info}>
        Por favor, completa el formulario para empezar tu proceso de admisión al
        Bootcamp.
      </p>
      <form className={styles.form} action="GET">
        <input
          required
          className={styles.input}
          type="text"
          id="fname"
          name="fname"
          placeholder="Nombre"
        />
        <input
          required
          className={styles.input}
          type="text"
          id="lname"
          name="lname"
          placeholder="Apellido"
        />
        <input
          required
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Teléfono"
        />
        <input
          required
          className={styles.input}
          type="email"
          id="emial"
          name="email"
          placeholder="Correo electrónico"
        />
        <div className={styles.selector}>
          <label htmlFor="q1" className={styles.label}>
            ¿Que nivel de experiencia tienes en programación? *
          </label>
          <select
            name="q1"
            id="q1"
            className={styles.select}
            required
            autoFocus
          >
            <option value="default" className="default"></option>
            <option value="option1">Principiante</option>
            <option value="option2">Intermedio</option>
            <option value="option3">Avanzado</option>
          </select>
        </div>
        <div className={styles.textarea_div}>
          <label htmlFor="question" className={styles.label}>
            ¿Por qué te gustaría realizar este Bootcamp?
          </label>
          <textarea
            className={styles.textarea}
            id="question"
            name="question"
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
  );
};

export default ApplyPage;
