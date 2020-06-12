import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";
import styles from "./Footer.module.css";
import SimpleBlockContent from "./SimpleBlockContent";
import ImageSection from "./sections/ImageSection";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(client);

function Footer(props) {
  const { navItems, text, router, image, alt, caption, asset, sociallogos } = props;
  return (
    <div className={styles.root}>
      <div className={styles.footerlogo}>
        <img src="static/images/blacklogo.jpg" alt="Dawn Production Logo" />
      </div>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
      <div className={styles.sociallogos}>
        <a href="https://www.instagram.com/dawnmoretti/?hl=en" target="_blank">
          <img src="static/images/instagram.jpg" alt="Instagram Logo" />
        </a>
        <a href="https://www.linkedin.com/in/dawn-moretti-95208714">
          <img src="static/images/linkedin.jpg" alt="LinkedIn Logo" />
        </a>
      </div>
      <nav>
        <ul className={styles.items}>
          {navItems &&
            navItems.map((item) => {
              const isActive =
                router.pathname === "/LandingPage" && router.query.slug === item.slug.current;
              return (
                <li key={item._id} className={styles.item}>
                  <Link
                    href={{
                      pathname: "/LandingPage",
                      query: { slug: item.slug.current },
                    }}
                    as={`/${item.slug.current}`}
                    prefetch
                  >
                    <a data-is-active={isActive ? "true" : "false"}>{item.title}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className={styles.membershiplogos}>
        <img src="static/images/aop.jpg" alt="AOP Logo" />
        <img src="static/images/apa.jpg" alt="APA Logo" />
        <img src="static/images/b.jpg" alt="B Logo" />
      </div>
      <div className={styles.copyright}>&copy; DAWN Production 2020.</div>
    </div>
  );
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string,
      }).isRequired,
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

export default withRouter(Footer);
