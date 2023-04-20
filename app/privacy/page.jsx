import React from "react";
import styles from "../styles/privacy.module.css";

const PrivacyPage = () => {
  return (
    <div className={styles.policy}>
      <h1 className={styles.title}>Politica de Privacidad</h1>
      <p className={styles.info}>
        En esta Política de Privacidad se explica cómo se recopila, utiliza y
        protege la información personal de los usuarios de nuestro sitio web. Al
        utilizar nuestros servicios, el usuario acepta las condiciones de esta
        Política de Privacidad.
      </p>
      <ol className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Información que recopilamos</h3>
          <p className={styles.info}>
            Podemos recopilar información personal, como el nombre y el correo
            electrónico del usuario, cuando éste se registra en nuestro sitio
            web o se comunica con nosotros por correo electrónico. También
            podemos recopilar información no personal, como la dirección IP, el
            tipo de navegador utilizado, el sistema operativo, la fecha y hora
            de acceso y la dirección del sitio web que redireccionó al usuario a
            nuestro sitio web.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Utilización de la información</h3>
          <p className={styles.info}>
            La información personal recopilada se utiliza para responder a las
            solicitudes del usuario, para proporcionar los servicios solicitados
            y para mejorar la calidad de nuestro sitio web y servicios. La
            información no personal se utiliza para fines estadísticos y de
            análisis de la navegación en nuestro sitio web.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Divulgación de la información</h3>
          <p className={styles.info}>
            No vendemos ni alquilamos la información personal de los usuarios a
            terceros. Podemos divulgar la información personal si estamos
            obligados a hacerlo por ley, para proteger nuestros derechos legales
            o para cumplir con un procedimiento legal.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Seguridad de la información</h3>
          <p className={styles.info}>
            Implementamos medidas de seguridad técnicas para proteger la
            información personal contra la pérdida, el uso indebido y el acceso
            no autorizado, la divulgación, la alteración o la destrucción.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Enlaces a sitios web de terceros</h3>
          <p className={styles.info}>
            Nuestro sitio web puede contener enlaces a otros sitios web que no
            son propiedad ni están controlados por nosotros. No somos
            responsables de las prácticas de privacidad ni del contenido de
            estos sitios web.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Seguridad de transacciones</h3>
          <p className={styles.info}>
            En nuestro sitio web utilizamos Stripe como procesador de pagos para
            garantizar la seguridad de las transacciones financieras. Stripe es
            un procesador de pagos en línea de renombre internacional que cumple
            con los más altos estándares de seguridad y privacidad.
          </p>
          <p className={styles.info}>
            Stripe utiliza tecnología de encriptación SSL de 256 bits para
            proteger la información del usuario durante la transmisión. La
            información de la tarjeta de crédito se transfiere directamente a
            Stripe y no se almacena en nuestro sitio web.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Contacto</h3>
          <p className={styles.info}>
            Si tiene alguna pregunta o comentario sobre esta Política de
            Privacidad, puede ponerse en contacto con nosotros a través de
            nuestro sitio web o por correo electrónico a [inserta aquí la
            dirección de correo electrónico de tu empresa].
          </p>
        </li>
      </ol>
    </div>
  );
};

export default PrivacyPage;
