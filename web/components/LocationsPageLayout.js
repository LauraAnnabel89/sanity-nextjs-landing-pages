import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { LogoJsonLd } from "next-seo";
import Header from "./Header";

function LocationsPageLayout(props) {
  const { config, children } = props;

  if (!config) {
    console.error("Missing config");
    return <div>Missing config</div>;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
      </Head>
      <div className="container">
        This is a locations page
        <div className="content">{children}</div>
      </div>
    </>
  );
}

LocationsPageLayout.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    url: PropTypes.string,
  }),
};

export default LocationsPageLayout;
