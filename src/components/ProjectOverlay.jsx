import React from 'react';
import { useProjectsValue } from '../context';

export const ProjectOverlay = ({ setPorject, showPorjectOverlay, setShowPorjectOverlay }) => {
  const { projects } = useProjectsValue();

  return (
    projects && showPorjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li
              key={project.projectId}
              data-testid="project-overlay-action"
            >
              <div
                onClick={() => {
                  setPorject(project.projectId);
                  setShowPorjectOverlay(false);
                }}
                onKeyDown={() => {
                  setPorject(project.projectId);
                  setShowPorjectOverlay(false);
                }}
                role="button"
                tabIndex={0}
                aria-label="Select the task project"
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
