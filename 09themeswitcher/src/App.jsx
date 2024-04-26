import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './Components/Themebutton'
import Themebutton from './Components/Themebutton'
import Card from './Components/Card'

function App() {
  const [thememode, setthememode] = useState("light")

  const lighttheme = () => {
    setthememode("light")
  }

  const darktheme = () => {
    setthememode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])


  return (
    <ThemeProvider value={{ darktheme, lighttheme, thememode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebutton />

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
