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
      title
      date(formatString: "DD MMMM, YYYY")
    }
    fields {
      slug 
    }
    excerpt
  }
`

export default PostPreview
