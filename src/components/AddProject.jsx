import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('');

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () => {
    projectName
      && firebase
        .firestore()
        .collection('projects')
        .add({
          projectId,
          name: projectName,
          userId: 'mraVUGvZ5ZVtW6rjHIWr',
        }).then(() => {
          setProjects([]);
          setProjectName('');
          setShow(false);
        });
  };

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__inner">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            placeholder="Name you project"
          />
          <button className="add-project__submit" type="button" onClick={() => addProject()} data-testid="add-project-submit">Add project</button>
          <span
            className="add-project__cancel"
            role="button"
            tabIndex={0}
            aria-label="Cancel adding project"
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
          >
            Cancel

          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        className="add-project__text"
        role="button"
        aria-label="Add project"
        tabIndex={0}
        data-testid="add-project-action"
        onClick={() => setShow(!show)}
        onKeyDown={() => setShow(false)}
      >
        Add Project

      </span>
    </div>
  );
};
