import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.logo}>IZALCODE</h1>
      <ul className={styles.list}>
        <li className={styles.rights}>
          <span className={styles.span}>All rights reserved</span>
        </li>
        <li className={styles.item_rm}>
          <span className={styles.span}>|</span>
        </li>
        <li className={styles.rights}>
          <span className={styles.span}>© 2023 Izalcode LLC</span>
        </li>
        <li className={styles.item_rm}>
          <span className={styles.span}>|</span>
        </li>

        <li className={styles.item}>
          <Link className={styles.link} href="/legal">
            Legal
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/cookies">
            Cookies
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/privacy">
            Privacidad
          </Link>
        </li>

        <li className={styles.item_rm}>
          <span className={styles.last_span}>|</span>
        </li>

        <li className={styles.item}>
          <Link
            className={styles.socials}
            href="https://www.instagram.com/jonfroemming"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M16.5 7.5l0 .01"></path>
            </svg>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={styles.socials}
            href="https://twitter.com/Jonfr0"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-twitter-filled"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={styles.socials}
            href="https://www.linkedin.com/in/jon-froemming-093a2b206"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-linkedin"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
