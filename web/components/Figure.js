import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Figure.module.css";
import client from "../client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function Figure({ node }) {
  const { alt, caption, asset, internalLink, router } = node;

  if (!asset) {
    return undefined;
  }

  const isActive = router.pathname === "/LandingPage" && router.query.slug === item.slug.current;
  return (
    <figure className={styles.content}>
      <Link
        href={{
          query: { slug: slug.current },
        }}
        as={`/${slug.current}`}
        prefetch
      >
        <img
          src={builder.image(asset).auto("format").width(2000).url()}
          className={styles.image}
          alt={alt}
        />
        {caption && (
          <figcaption>
            <div className={styles.caption}>
              <div className={styles.captionBox}>
                <p>{caption}</p>
              </div>
            </div>
          </figcaption>
        )}
      </Link>
    </figure>
  );
}

Figure.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
    route: PropTypes.shape({
      slug: PropTypes.shape({
        current: PropTypes.string,
      }),
    }),
    link: PropTypes.string,
  }),
};
export default Figure;
