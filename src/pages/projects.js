import React from 'react';
import ProjectPreviews from '../components/ProjectPreviews'
import Layout from '../components/Layout';
import Header from '../components/Header';

export default ({ data }) => (
  <Layout>
    <Header/>
    <h1>Projects</h1>
    <ProjectPreviews data={data}/>
  </Layout>
)

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { collection: { eq: "projects" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          ...PostPreviewFragment
        }
      }
    }
  }
`;
