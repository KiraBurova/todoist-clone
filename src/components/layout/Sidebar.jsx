import React, { useState } from 'react';
import {
  FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar,
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { Projects } from './Projects';
import { AddProject } from '../AddProject';


export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('INBOX');
  const [showProjects, setShowProjects] = useState(true);
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === 'inbox' ? 'active' : ''}
          data-testid="inbox"
        >
          <div
            onClick={() => { setActive('inbox'); setSelectedProject('INBOX'); }}
            onKeyDown={() => { setActive('inbox'); setSelectedProject('INBOX'); }}
            role="button"
            tabIndex={0}
            aria-label="Show inbox task"
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li className={active === 'today' ? 'active' : ''} data-testid="today">
          <div
            onClick={() => { setActive('today'); setSelectedProject('TODAY'); }}
            onKeyDown={() => { setActive('today'); setSelectedProject('TODAY'); }}
            role="button"
            tabIndex={0}
            aria-label="Show today's task"
          >
            <span><FaRegCalendar /></span>
            <span>Today</span>
          </div>
        </li>
        <li className={active === 'next_7' ? 'active' : ''} data-testid="next-seven">
          <div
            onClick={() => { setActive('next_7'); setSelectedProject('NEXT_7'); }}
            onKeyDown={() => { setActive('next_7'); setSelectedProject('NEXT_7'); }}
            role="button"
            tabIndex={0}
            aria-label="Show tasks for the next 7 days"
          >
            <span><FaRegCalendarAlt /></span>
            <span>Next 7 Days</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
        tabIndex={0}
        aria-label="Show/Hide projects"
      >
        <span><FaChevronDown className={!showProjects ? 'hidden-projects' : ''} /></span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
