import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author
            position
            description
            authorDescription
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
}
