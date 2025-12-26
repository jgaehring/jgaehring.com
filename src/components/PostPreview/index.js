import React from 'react';
import Link from 'gatsby-link';
import { post } from './post-preview.module.css';

const PostPreview = ({ frontmatter: { title, date }, fields: { slug }, excerpt }) => (
  <div className={post}>
    <Link to={`/${slug}`}>
      <h2>{title}</h2>
    </Link>
    <h6>{date}</h6>
    <p>{excerpt}</p>
  </div>
)

export default PostPreview
