import React from 'react';
import './ProjectsContent.css';

const projectData = [
  {
    id: 1,
    title: 'Backyard Makeover',
    description: 'Complete transformation with sod installation, new flower beds, and decorative stones.',
    image: 'https://via.placeholder.com/400x250?text=Backyard+Makeover',
  },
  {
    id: 2,
    title: 'Custom Patio & Firepit',
    description: 'Designed and built a stunning patio with integrated firepit for evening hangouts.',
    image: 'https://via.placeholder.com/400x250?text=Patio+%26+Firepit',
  },
  {
    id: 3,
    title: 'Drought-Tolerant Landscape',
    description: 'Low-maintenance xeriscaping with native plants and rock beds.',
    image: 'https://via.placeholder.com/400x250?text=Drought+Landscape',
  },
];

const ProjectsContent = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">Our Projects</h2>
      <p className="projects-subtitle">Check out some of the transformations we've brought to life.</p>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContent;