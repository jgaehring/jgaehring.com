import React from 'react'
import Link from 'gatsby-link'
import styles from './post-preview.module.css'

const PostPreview = ({ frontmatter: { title, date }, fields: { slug }, excerpt }) => (
  <div className={styles.post}>
    <Link to={`/${slug}`}>
      <h2>{title}</h2>
    </Link>
    <h6>{date}</h6>
    <p>{excerpt}</p>
  </div>
)

export const query = graphql`
  fragment PostPreviewFragment on MarkdownRemark {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      cover {
        publicURL
      }
      thumb {
        publicURL
      }
      github
      link
      description
      stack
    }
    fields {
      slug
    }
    excerpt
    collection
  }
`

export default PostPreview
