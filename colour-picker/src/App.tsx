import ColourPicker from './ColourPicker'
import './App.css'
import { useState } from 'react';

function App() {

  const [bgColor, setBgColor] = useState<string>("#4A4C48");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
      }}
    >
      <h1>hellow</h1>
      <ColourPicker />
    </div>
  )
}

export default App
