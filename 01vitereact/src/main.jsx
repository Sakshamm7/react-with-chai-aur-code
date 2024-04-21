import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1> Krdia na hairan </h1>
      <h2>Kyun hila dala na </h2>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: '_blank',
//   },
//   children: 'Click me to visit google',
// }

const anotherelement = (
  < a href="https://google.com" target='_blank' > Google Jana Hai Kya </a>
)

const reactelement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: '_blank',
  },
  'Idhar se bhi google ja sakte bhidu'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
)
