import React, { useState, useMemo } from 'react';
import styles from './Projects.module.css';
import { PROJECTS, Project } from '../../constants/projects';
import { Link } from "react-router-dom"

// Project Card Component 
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className={styles.projectCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className={styles.featuredBadge}>★ Featured</div>
      )}
      
      <div className={styles.projectImageContainer}>
        <img 
          src={project.image} 
          alt={project.title}
          className={styles.projectImage}
        />
        <div className={`${styles.projectOverlay} ${isHovered ? styles.visible : ''}`}>
          <div className={styles.projectLinks}>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live
              </a>
            )}
            {project.about && (
                <Link className={styles.projectLink} preventScrollReset={false} to={`/about/${project.id}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>About</Link>
            )}
          </div>
        </div>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <span className={styles.projectDate}>{project.date}</span>
        </div>
        
        <p className={styles.projectDescription}>{project.description}</p>
        
        <div className={styles.projectTechnologies}>
          {project.technologies.map((tech) => (
            
              <a
                key={tech.name}
                href={tech.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.techTag} ${styles[`tech${tech.name.replace(/\s+/g, '')}`]}`}
                title={`Learn more about ${tech.name}`}
              >
              <img 
                src={tech.logo} 
                alt={tech.name}
                className={styles.techLogo}
              />
              {tech.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Filter Button Component
interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, active, onClick }) => (
  <button 
    className={`${styles.filterBtn} ${active ? styles.active : ''}`}
    onClick={onClick}
  >
    {label}
  </button>
);

// Main Projects Section Component
const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');


const filteredTechnologies = useMemo (() => {
  const projectCounts = PROJECTS.flatMap(p => p.technologies.map(t => t.name))
  .reduce((acc, tech) => {
    acc[tech] = (acc[tech] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.keys(projectCounts).filter((tech) => projectCounts[tech] > 2);
}, []);



  // Filter projects
  const filteredProjects = useMemo (() => {
    if (filter === 'all') return PROJECTS;

    if (filter === 'featured') {
      return PROJECTS.filter((p) => p.featured);
    }

    return PROJECTS.filter((p) => 
    p.technologies.some((t) => t.name === filter)
  );
  }, [filter]);
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectsContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My Projects</h2>
          <p className={styles.sectionSubtitle}>
            A collection of things I've built while learning and experimenting
          </p>
        </div>

        <div className={styles.filterContainer}>
          <FilterButton 
            label="All" 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          />
          <FilterButton 
            label="Featured" 
            active={filter === 'featured'} 
            onClick={() => setFilter('featured')}
          />
           {filteredTechnologies.map((tech) => (
            <FilterButton 
              key={tech}
              label={tech} 
              active={filter === tech} 
              onClick={() => setFilter(tech)}
            />
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <p>No projects found with that filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;