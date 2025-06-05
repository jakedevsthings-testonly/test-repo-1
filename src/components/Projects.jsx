import React from 'react';

const projects = [
  { title: 'Project One', description: 'First amazing project.' },
  { title: 'Project Two', description: 'Another cool project.' },
  { title: 'Project Three', description: 'Yet another project.' },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <ul>
      {projects.map((p) => (
        <li key={p.title}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
