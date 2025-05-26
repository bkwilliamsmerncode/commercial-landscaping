import React from 'react';
import './ServicesContent.css';
import { FaTruckLoading, FaBroom, FaLeaf, FaTree, FaTint, FaCogs, FaSeedling, FaWater } from 'react-icons/fa';

const services = [
  { icon: <FaTruckLoading />, title: "Junk Hauling", description: "Quick and efficient junk removal to clear your space." },
  { icon: <FaBroom />, title: "Property Clean Out", description: "Complete cleanouts for homes, offices, and properties." },
  { icon: <FaLeaf />, title: "Landscape Maintenance", description: "Regular maintenance to keep your yard fresh and inviting." },
  { icon: <FaTree />, title: "Tree Trimming", description: "Expert trimming to keep your trees healthy and beautiful." },
  { icon: <FaLeaf />, title: "Weeding & Hand Weeding", description: "Thorough weeding to keep your garden neat and healthy." },
  { icon: <FaCogs />, title: "Wrip-Wrap", description: "Professional root protection and erosion control." },
  { icon: <FaBroom />, title: "Dirt Moving", description: "Grading and moving dirt for a perfect landscape foundation." },
  { icon: <FaTruckLoading />, title: "Dump Runs", description: "Hassle-free dump runs for debris and unwanted items." },
  { icon: <FaSeedling />, title: "Planting Services", description: "Planting plants, shrubs, bushes, trees, cactus, and succulents." },
  { icon: <FaTint />, title: "Irrigation Repair", description: "Irrigation system troubleshooting and repairs." },
  { icon: <FaLeaf />, title: "Bush Trimming", description: "Professional trimming to keep bushes shaped and healthy." },
  { icon: <FaBroom />, title: "Gravel Installation", description: "Expert gravel spreading for clean, durable landscapes." },
  { icon: <FaSeedling />, title: "Landscape Design", description: "Custom designs to transform your outdoor space." },
  { icon: <FaTree />, title: "Palm Tree Trimming (up to 20 feet)", description: "Safe and skilled trimming of palm trees up to 20 feet." },
  { icon: <FaTree />, title: "Fallen Tree Clean Up", description: "Fast and safe removal of fallen trees to restore your property's appearance and safety." },
];

const ServicesContent = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">Quality landscaping, maintenance, and hauling solutions for your home or business.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesContent;