import {render, unmountComponentAtNode} from 'react-dom'

export default function renderComponent (componentData) {
  return componentData.map(({component, documentId}) => render(component, document.getElementById(documentId)))
}

export function unmountComponent (componentData) {
  return componentData.map(({documentId}) => unmountComponentAtNode(document.getElementById(documentId)))
}
