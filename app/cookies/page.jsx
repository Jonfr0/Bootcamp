import React from "react";
import styles from "../styles/cookies.module.css";

const CookiesPage = () => {
  return (
    <div className={styles.cookies}>
      <h1 className={styles.title}>Política de Cookies</h1>
      <p className={styles.info}>
        Nuestra página web utiliza cookies de Google Analytics para recopilar
        información anónima sobre la navegación de nuestros usuarios. A
        continuación, explicamos qué son las cookies, qué información recopilan
        y cómo puede el usuario configurar su navegador para controlar el uso de
        las mismas.
      </p>
      <ol className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>¿Qué son las cookies?</h3>
          <p className={styles.info}>
            Las cookies son pequeños fragmentos de texto que los sitios web que
            visitas envían al navegador. Permiten que los sitios web recuerden
            información sobre tu visita, lo que puede hacer que sea más fácil
            volver a visitar los sitios y hacer que estos te resulten más
            útiles. Otras tecnologías, como los identificadores únicos que se
            usan para identificar un navegador, aplicación o dispositivo, los
            píxeles y el almacenamiento local, también se pueden usar para estos
            fines. Las cookies y otras tecnologías que se describen en esta
            página pueden usarse para los fines indicados más abajo.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            ¿Qué información recopila Google Analytics?
          </h3>
          <p className={styles.info}>
            Google Analytics es una herramienta de análisis web que nos permite
            conocer el uso que los usuarios hacen de nuestra página web. Las
            cookies de Google Analytics recopilan información sobre la
            navegación del usuario, como el número de visitas, la duración de la
            sesión, las páginas visitadas, etc. Esta información es anónima y no
            permite identificar al usuario.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Configuración de cookies:</h3>
          <p className={styles.info}>
            El usuario puede configurar su navegador para aceptar o rechazar las
            cookies, o para que le avise cuando un sitio web intenta instalar
            una cookie. Cada navegador tiene su propia configuración, que se
            puede encontrar en el menú de ayuda del mismo.
          </p>
          <p className={styles.info}>
            A continuación, se detallan los enlaces a las instrucciones para
            desactivar las cookies en los navegadores más comunes:
          </p>
          <ul className={styles.inner_list}>
            <li className={styles.inner_item}>
              Internet Explorer:
              http://windows.microsoft.com/es-es/windows-vista/block-or-allow-cookies
            </li>
            <li className={styles.inner_item}>
              Google Chrome:
              https://support.google.com/chrome/bin/answer.py?hl=es&answer=95647
            </li>
            <li className={styles.inner_item}>
              Firefox:
              http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
            </li>
            <li className={styles.inner_item}>
              Safari: http://support.apple.com/kb/ph5042
            </li>
          </ul>
          <p className={styles.info}>
            Es importante tener en cuenta que la desactivación de las cookies
            puede impedir el correcto funcionamiento de algunas partes de
            nuestro sitio web.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            Modificaciones en la política de cookies:
          </h3>
          <p className={styles.info}>
            Nos reservamos el derecho a modificar la presente política de
            cookies en cualquier momento y sin previo aviso, siempre en
            cumplimiento de la normativa aplicable en materia de protección de
            datos personales. Cualquier cambio en la política de cookies será
            publicado en nuestro sitio web.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default CookiesPage;
