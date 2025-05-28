import React from 'react';
import './ProjectsContent.css';
import job1 from '../../Assets/job1.JPG';
import job2 from '../../Assets/job2.JPG';
import job3 from '../../Assets/job3.JPG';
import { Helmet } from "react-helmet-async";

const projectData = [
  {
    id: 1,
    title: 'Full Property Clean-Out + Junk Hauling',
    description:
      'We cleared out years of debris, hauled away junk, and prepped the entire property for new landscaping. A complete reset that opened the space up for fresh design.',
    services: ['Junk Hauling', 'Property Clean Out', 'Dump Runs'],
    image: job1,
  },
  {
    id: 2,
    title: 'Desert-Friendly Landscape Design',
    description:
      'Transformed a plain front yard with drought-resistant plants, gravel, and succulents. Reduced water usage while adding serious curb appeal.',
    services: ['Landscape Design', 'Gravel', 'Planting', 'Xeriscaping'],
    image: job2,
  },
{
  id: 3,
  title: 'Fallen Tree Clean-Up & Yard Restoration',
  description:
    'Removed a large fallen tree from a storm, cleared debris, and restored the yard with fresh gravel and trimmed bushes.',
  services: ['Fallen Tree Clean-Up', 'Gravel Installation', 'Bush Trimming'],
  image: job3, // Replace this with the appropriate image file, e.g. `job4` if you're tracking separately
}
];

const ProjectsContent = () => {
  return (
    <>
     <Helmet>
        <title>Customer Testimonials | Forefront Landscaping Tucson</title>
        <meta name="description" content="Read reviews and testimonials from our happy customers about Forefront Landscaping in Tucson." />
        <meta name="keywords" content="landscaping reviews, customer testimonials Tucson, Forefront Landscaping reviews" />
      </Helmet>
<section className="projects">
  <h2 className="projects-title">Our Projects</h2>
  <p className="projects-subtitle">
    Real transformations. Real results. Here’s what we’ve been working on.
  </p>
  <div className="projects-grid">
    {projectData.map((project) => (
      <div key={project.id} className="project-card">
        <img src={project.image} alt={project.title} />
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="service-tags">
            {project.services.map((service, index) => (
              <li key={index} className="service-tag">{service}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>
</>
  );
};

export default ProjectsContent;