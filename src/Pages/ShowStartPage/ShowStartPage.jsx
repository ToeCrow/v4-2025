import React from 'react';

const ex2 = `
import { useState } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={\`theme-\${theme}\`}>
      <p>Nuvarande tema: {theme}</p>
      <button onClick={toggleTheme}>Byt tema</button>
    </div>
  );
}

export default ThemeSwitcher;
  `

const ShowStartPage = () => {
  return (
    <main>
      <h2>Egna Övningar</h2>

      <h3>Här är fem relativt lätta övningar där du ska hitta och identifiera vilket state som används i komponenterna:</h3>
      <div>
        <h5>1</h5>
        <pre>
          <code>
            import {'{ useState }'} from 'react';{'\n\n'}
            function ClickCounter() {'{'}{'\n'}
            {'  '}const [count, setCount] = useState(0);{'\n\n'}
            {'  '}const handleClick = () => {'{'}{'\n'}
            {'    '}setCount(count + 1);{'\n'}
            {'  '}{'}'};{'\n\n'}
            {'  '}return ({'\n'}
            {'    '}&lt;div&gt;{'\n'}
            {'      '}&lt;p&gt;Du har klickat {'{'}count{'}'} gånger.&lt;/p&gt;{'\n'}
            {'      '}&lt;button onClick={'{'}handleClick{'}'}&gt;Klicka mig&lt;/button&gt;{'\n'}
            {'    '}&lt;/div&gt;{'\n'}
            {'  '});{'\n'}
            {'}'}{'\n\n'}
            export default ClickCounter;
          </code>
        </pre>
        <p>Uppgift: Vilket state används här och hur uppdateras det?</p>
        <p>Svar:</p>
    </div> 
    <div>
      <h5>2</h5>
      <pre>
        <code>
          {ex2}
        </code>
      </pre>
      <p>Uppgift: Vilket state används för att hantera temat och hur ändras det?</p>
      <p>Svar:</p>
    </div>
    </main>
  );
};

export default ShowStartPage;
