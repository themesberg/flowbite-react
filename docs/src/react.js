import React from 'react';
import { createRoot } from 'react-dom/client';
import { Flowbite } from 'flowbite-react';
import { AlertDefault, AlertExample } from './examples/alert';

const mappedComponents = {
  'alert_example': AlertExample,
  'alert_default': AlertDefault,
  // 'Spinner': Spinner
}

const registerComponent = (id, component) => {
  mappedComponents[id] = component
}

const getComponentById = id => {
  if (id) {
    return mappedComponents[id] || null
  }
  console.log(`Component ${id} not found!`);
  return null
}

const parseJsonProps = json => {
  try {
    return JSON.parse(json)
  } catch {
    return {}
  }
}

const container = document.getElementById("app")
const componentID = container.getAttribute("data-component")

if (componentID) {
  const Component = getComponentById(componentID)
  const props = {
    children: "This is just an alert message"
  }
  // const props = parseJsonProps(container.dataset.reactProps)

  console.log(`Rendering component: ${componentID}`, Component)

  console.log(Component.toString())

  const root = createRoot(container)
  let store = {}    
  root.render(
  <Flowbite>
    <Component {...props} />
  </Flowbite>)
}