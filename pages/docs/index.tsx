/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/no-unescaped-entities */
import type { FC } from 'react';

const DocsPage: FC = () => {
  return (
    <div className="dark:text-gray-100">
      <p>
        React is one of the most popular front-end libraries in the world used by websites such as Facebook, Instagram,
        Yahoo Mail, Dropbox, and more built by the Meta (formerly Facebook) company.
      </p>
      <p>
        Coupled with Tailwind CSS and the React components from Flowbite you will be able to develop applications faster
        than ever based on the <a href="https://flowbite-react.com">Flowbite React</a> library.
      </p>

      <h2 className="group relative">
        Create a React project
        <span id="create-a-react-project" className="absolute -top-[140px]"></span>{' '}
        <a
          className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
          href="#create-a-react-project"
          aria-label="Link to this section: Create a React project"
        >
          #
        </a>
      </h2>
      <p>
        The latest recommended way of creating a new React application is to use a front-end tooling software such as
        Vite or Parcel, but you can also use a more classic method such as Create React App.
      </p>

      <h3 className="group relative">
        Using Vite React
        <span id="using-vite-react" className="absolute -top-[140px]"></span>{' '}
        <a
          className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
          href="#using-vite-react"
          aria-label="Link to this section: Using Vite React"
        >
          #
        </a>
      </h3>
      <ol>
        <li>Create a new React project using Vite by running the following two commands:</li>
      </ol>
      <div className="highlight">
        <pre className="chroma language-bash" tabIndex={0}>
          <code className=" language-bash" data-lang="bash">
            npm create vite@latest my-project -- --template react cd my-project
          </code>
        </pre>
      </div>
      <p>
        Now that the project has been created you can start a local development server by running{' '}
        <code>npm run dev</code> and use the <code>npm run build</code> command to create an optimized build for
        production use.
      </p>

      <h3 className="group relative">
        Create React App
        <span id="create-react-app" className="absolute -top-[140px]"></span>{' '}
        <a
          className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
          href="#create-react-app"
          aria-label="Link to this section: Create React App"
        >
          #
        </a>
      </h3>
      <p>Follow the next steps to install Tailwind CSS and Flowbite with Create React App.</p>
      <ol>
        <li>
          Run the following command in your terminal to create a React application, if you don’t already have one:
        </li>
      </ol>
      <div className="highlight">
        <pre className="chroma language-bash" tabIndex={0}>
          <code className=" language-bash" data-lang="bash">
            npx create-react-app my-project cd my-project
          </code>
        </pre>
      </div>
      <p>
        You can now run <code>npm run start</code> to start a local server and <code>npm run build</code> to create a
        production build.
      </p>

      <h2 className="group relative">
        Install Tailwind CSS
        <span id="install-tailwind-css" className="absolute -top-[140px]"></span>{' '}
        <a
          className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
          href="#install-tailwind-css"
          aria-label="Link to this section: Install Tailwind CSS"
        >
          #
        </a>
      </h2>
      <p>Install Tailwind CSS by running the following two commands:</p>
      <div className="highlight">
        <pre className="chroma language-bash" tabIndex={0}>
          <code className=" language-bash" data-lang="bash">
            npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p
          </code>
        </pre>
      </div>
      <ol>
        <li>
          Configure the template paths inside the <code>tailwind.config.js</code> file:
        </li>
      </ol>
      <div className="highlight">
        <pre className="chroma language-javascript" tabIndex={0}>
          <code className=" language-javascript" data-lang="javascript">
            module<span className="token punctuation">.</span>exports <span className="token operator">=</span>{' '}
            <span className="token punctuation"></span>
            content<span className="token operator">:</span> <span className="token punctuation">[</span>
            <span className="token string">{`'./src/**/*.{js,jsx,ts,tsx}'`}</span>
            <span className="token punctuation">,</span>
            <span className="token punctuation">]</span>
            <span className="token punctuation">,</span>
            theme<span className="token operator">:</span> <span className="token punctuation"></span>
            extend<span className="token operator">:</span> <span className="token punctuation"></span>
            <span className="token punctuation">{'}'}</span>
            <span className="token punctuation">,</span>
            <span className="token punctuation">{'}'}</span>
            <span className="token punctuation">,</span>
            plugins<span className="token operator">:</span> <span className="token punctuation">[</span>
            <span className="token punctuation">]</span>
            <span className="token punctuation">,</span>
            <span className="token punctuation">{'}'}</span>
          </code>
        </pre>
      </div>
      <ol>
        <li>
          Set up the Tailwind directives inside the <code>./src/index.css</code> file:
        </li>
      </ol>
      <div className="highlight">
        <pre className="chroma language-css" tabIndex={0}>
          <code className=" language-css" data-lang="css">
            <span className="token atrule">
              <span className="token rule">@tailwind</span> base<span className="token punctuation">;</span>
            </span>
            <span className="token atrule">
              <span className="token rule">@tailwind</span> components<span className="token punctuation">;</span>
            </span>
            <span className="token atrule">
              <span className="token rule">@tailwind</span> utilities<span className="token punctuation">;</span>
            </span>
          </code>
        </pre>
      </div>
      <h2 className="group relative">
        Install Flowbite
        <span id="install-flowbite" className="absolute -top-[140px]"></span>{' '}
        <a
          className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
          href="#install-flowbite"
          aria-label="Link to this section: Install Flowbite"
        >
          #
        </a>
      </h2>
      <ol>
        <li>Install Flowbite and Flowbite React by running the following command in your terminal:</li>
      </ol>
      <div className="highlight">
        <pre className="chroma language-bash" tabIndex={0}>
          <code className=" language-bash" data-lang="bash">
            npm install flowbite flowbite-react
          </code>
        </pre>
      </div>
      <ol>
        <li>
          Require Flowbite as a plugin inside your <code>tailwind.config.js</code> file:
        </li>
      </ol>
      <div className="highlight">
        <pre className="chroma language-javascript" tabIndex={0}>
          <code className=" language-javascript" data-lang="javascript">
            module<span className="token punctuation">.</span>exports <span className="token operator">=</span>{' '}
            <span className="token punctuation"></span>
            plugins<span className="token operator">:</span> <span className="token punctuation">[</span>
            <span className="token function">require</span>
            <span className="token punctuation">(</span>
            <span className="token string">'flowbite/plugin'</span>
            <span className="token punctuation">)</span>
            <span className="token punctuation">]</span>
            <span className="token punctuation">{'}'}</span>
          </code>
        </pre>
      </div>
      <ol>
        <li>
          Additionally to your own <code>content</code> data you should add the Flowbite source paths to apply the
          classes from the interactive elements in the <code>tailwind.config.js</code> file:
        </li>
      </ol>
      <div className="highlight">
        <pre className="chroma language-javascript" tabIndex={0}>
          <code className=" language-javascript" data-lang="javascript">
            module<span className="token punctuation">.</span>exports <span className="token operator">=</span>{' '}
            <span className="token punctuation"></span>
            content<span className="token operator">:</span> <span className="token punctuation">[</span>
            <span className="token string">{`'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'`}</span>
            <span className="token punctuation">]</span>
            <span className="token punctuation">{`}`}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DocsPage;
