import React from 'react'
import { createRoot } from 'react-dom/client'
import { Flowbite } from 'flowbite-react'
import alertExamples from './examples/alert'

// Register examples
const mappedExamples = {
  alert: alertExamples,
}

const getObjProp = (obj, path, def) => {
  const stringToPath = function (path) {
    if (typeof path !== 'string') return path

    let output = []
    path.split('.').forEach(function (item) {
      item.split(/\[([^}]+)\]/g).forEach(function (key) {
        if (key.length > 0) output.push(key)
      })
    })
    return output
  }

  path = stringToPath(path)

  let current = obj
  for (let i = 0; i < path.length; i++) {
    if (!current[path[i]]) return def
    current = current[path[i]]
  }

  return current
}

const getExampleFromPath = path => {
  if (path) {
    return getObjProp(mappedExamples, path, null)
  }
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
const path = container.getAttribute("data-example")

if (path) {
  const Example = getExampleFromPath(path)  
  const root = createRoot(container)
  let store = {} // this is a hack for state

  root.render(
    <Flowbite>
      <Example />
    </Flowbite>)
}