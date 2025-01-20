import React from 'react';
import { Link } from 'react-router-dom';


// Definiera typ för tasks arrayen
const tasks = ['Home'];  // Du kan lägga till fler här


const Navbar = () => {
  return (
    <nav>
      <ul>
        {tasks.map((task) => (
          <li key={task}>
            {/* Dynamisk generering av länk för varje task */}
            <Link to={`/${task.toLowerCase()}`}>{task}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
