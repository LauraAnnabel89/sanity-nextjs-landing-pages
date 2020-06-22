import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { Component } from "react";
import NextSeo from "next-seo";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import LocationsPageLayout from "../../components/LocationsPageLayout";
import client from "../../client";
import RenderSections from "../../components/RenderSections";

const builder = imageUrlBuilder(client);

const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
  page-> {
    ...,
    content[] {
      ...,
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      }
    }
  }
}
`;

class Locations extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    disallowRobots: PropTypes.any,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    config: PropTypes.any,
    slug: PropTypes.any,
  };

  static async getInitialProps(context) {
    const { slug = "" } = context.query;
    if (!context.query) {
      console.error("no query");
      return;
    }
    if (slug && slug !== "/locations/[slug]") {
      return client.fetch(pageQuery, { slug }).then((res) => ({ ...res.page, slug }));
    }
    return await client.fetch(
      `
        *[_type == "locations" && slug.current == $slug][0]
      `,
      { slug }
    );
  }

  render() {
    const {
      title = "Missing title",
      description,
      disallowRobots,
      openGraphImage,
      content = [],
      config = {},
      slug,
    } = this.props;

    return (
      <LocationsPageLayout config={config}>
        {content && <RenderSections sections={content} slug={this.props.slug} />}
      </LocationsPageLayout>
    );
  }
}

export default Locations;
