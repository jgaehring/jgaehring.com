import React from 'react';

export default function BlogTemplate({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
