import React from 'react';
import Link from 'gatsby-link';
import { project, projectsContainer } from './project-previews.module.css';

const ProjectPreviews = ({data}) => {
  return (
  <div className={projectsContainer} >
    {
      data.map(({
        node: {
          frontmatter: {
            title,
            thumb,
            description,
          },
          fields: {
            slug
          }}
      }, i) => (
        <div className={project} key={`project-${i}`}>
          <Link to={`/${slug}`}>
            <img
              src={thumb.publicURL}
              alt={`Screenshot of ${title}`}
            />
          </Link>
          <Link to={`/${slug}`}>
            <h3>{title}</h3>
          </Link>
          <p><i>{description}</i></p>
        </div>
      ))
    }
  </div>
)}

export default ProjectPreviews;
