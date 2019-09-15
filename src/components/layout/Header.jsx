import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTasks';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoies" />
        </div>
        <div className="settings">
          <ul>
            <li
              className="settings__add"
              data-testid="quick-add-task-action"
            >
              <button
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                onKeyDown={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                type="button"
                aria-label="Quick add task"
              >
                +
              </button>
            </li>
            <li
              className="sttings__darkmode"
              data-testid="darkmode-action"
            >
              <button
                type="button"
                aria-label="Darkmode switcher"
                onClick={() => setDarkMode(!darkMode)}
                onKeyDown={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
