import React from "react";
import styles from "../styles/legal.module.css";

const LegalPage = () => {
  return (
    <div className={styles.legal}>
      <h1 className={styles.title}>Aviso Legal</h1>
      <p className={styles.info}>
        Bienvenid@ a nuestro sitio web. Antes de utilizar nuestro sitio web, por
        favor lea detenidamente el siguiente aviso legal.
      </p>
      <ol className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Titularidad del sitio web:</h3>
          <p className={styles.info}>
            El presente sitio web es propiedad de [nombre del titular de la
            web], con NIF [número de identificación fiscal] y domicilio social
            en [dirección completa].
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Objeto del sitio web:</h3>
          <p className={styles.info}>
            El presente sitio web tiene como objeto proporcionar información
            sobre [especificar el objeto del sitio web].
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            Propiedad intelectual e industrial:
          </h3>
          <p className={styles.info}>
            Los contenidos de este sitio web, entendiendo por tales a título
            enunciativo, los textos, fotografías, gráficos, imágenes, iconos,
            tecnología, software, links y demás contenidos audiovisuales o
            sonoros, así como su diseño gráfico y códigos fuente (en adelante,
            los "Contenidos"), son propiedad del titular de la web o de
            terceros, sin que puedan entenderse cedidos al usuario, en virtud de
            lo dispuesto en el presente aviso legal, ningún derecho de
            explotación sobre los mismos más allá de lo estrictamente necesario
            para el correcto uso del sitio web.
          </p>
          <p className={styles.info}>
            El usuario se compromete a respetar los derechos de propiedad
            intelectual e industrial del titular de la web y de terceros.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Uso del sitio web:</h3>
          <p className={styles.info}>
            El usuario se compromete a utilizar el sitio web de forma diligente,
            correcta y lícita y, en particular, se compromete a no realizar las
            siguientes acciones:
          </p>
          <ul className={styles.inner_list}>
            <li className={styles.inner_item}>
              Utilizar los Contenidos de forma ilícita, ilegal o contraria a la
              buena fe y al orden público.
            </li>
            <li className={styles.inner_item}>
              Reproducir o copiar, distribuir, permitir el acceso del público a
              través de cualquier modalidad de comunicación pública, transformar
              o modificar los Contenidos, salvo que se cuente con la
              autorización del titular de la web o ello resulte legalmente
              permitido.
            </li>
            <li className={styles.inner_item}>
              Realizar cualquier acción que pueda causar daño o alteraciones al
              sitio web o a sus contenidos, o que impida el correcto
              funcionamiento del sitio web.
            </li>
            <li className={styles.inner_item}>
              Utilizar el sitio web para la transmisión, instalación o
              publicación de cualquier virus, código malicioso u otros programas
              o archivos perjudiciales.
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            Responsabilidad del titular de la web:
          </h3>
          <p className={styles.info}>
            El titular de la web no se responsabiliza de los errores u omisiones
            de los que pudieran adolecer los contenidos del sitio web, ni asume
            ninguna responsabilidad derivada del uso que los usuarios hagan de
            los contenidos del sitio web.
          </p>
          <p className={styles.info}>
            Asimismo, el titular de la web se reserva el derecho a modificar,
            actualizar o eliminar los contenidos del sitio web en cualquier
            momento y sin previo aviso.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Enlaces:</h3>
          <p className={styles.info}>
            El presente sitio web puede contener enlaces a sitios web de
            terceros. El titular de la web no se hace responsable de los
            contenidos, informaciones, opiniones o servicios ofrecidos en los
            sitios web de terceros a los que se pueda acceder a través de los
            enlaces establecidos en el sitio web.
          </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>
            Legislación aplicable y jurisdicción:
          </h3>
          <p className={styles.info}>
            El presente aviso legal se regirá e interpretará de acuerdo con la
            legislación española. Para cualquier controversia que pudiera
            derivarse del acceso o uso del sitio web, ambas partes se someten a
            los Juzgados y Tribunales de la ciudad de [ciudad], renunciando a
            cualquier otro fuero que pudiera corresponderles.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default LegalPage;
