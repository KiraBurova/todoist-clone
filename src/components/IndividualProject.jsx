import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();
  const deleteProject = (docId) => {
    firebase.firestore().collection('projects').doc(docId).delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };

  return (
    <>
      <span className="sidebar__dot">&bull;</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="project-delete-action"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={() => setShowConfirm(!showConfirm)}
        role="button"
        tabIndex={0}
        aria-label="Confirm deletion of project"
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure?</p>
              <button type="button" onClick={() => deleteProject(project.docId)}>Delete</button>
              <span
                role="button"
                tabIndex={0}
                aria-label="Cancel adding project, do not delete"
                onClick={() => { setShowConfirm(!showConfirm); }}
                onKeyDown={() => { setShowConfirm(!showConfirm); }}
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
