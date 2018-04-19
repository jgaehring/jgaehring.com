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
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } } ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;