import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function PopupApp() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed]= useState(true)
  const [charAllowed, setCharAllowed]= useState(true)
  const [password, setPassword]= useState("")
  const [copied, setCopied] = useState(false)
  
  //useRef hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?"
    for(let i = 0; i < length; i++){
      let char= Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } ,[length, numberAllowed, charAllowed, setPassword])
  
  const copyPasswordToClipboard = useCallback(() =>{
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }).catch(err => {
        // Fallback for older browsers
        passwordRef.current?.select()
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      })
    }
  },[password])

  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <div className='popup-container'>
      <div className='popup-header'>
        <h1>Password Generator</h1>
      </div>
      
      <div className='password-section'>
        <div className='password-input-container'>
          <input 
            type="text" 
            value={password}
            className='password-input'
            placeholder='Generated password will appear here'
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className={`copy-button ${copied ? 'copied' : ''}`}
            title={copied ? 'Copied!' : 'Copy to clipboard'}
          >
            {copied ? '✓ Copied' : '📋 Copy'}
          </button>
        </div>
      </div>
      
      <div className='controls-section'>
        <div className='length-control'>
          <label htmlFor="length-slider">Length: {length}</label>
          <input 
            type="range" 
            id="length-slider"
            min={4} 
            max={50} 
            value={length} 
            className='length-slider'
            onChange={(e)=> setLength(e.target.value)}
          />
        </div>
        
        <div className='options-container'>
          <div className='option-item'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className='option-checkbox'
              onChange={()=> {
                setNumberAllowed((prev)=>!prev)
              }} 
            />
            <label htmlFor="numberInput">🔢 Include Numbers</label>
          </div>
          
          <div className='option-item'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              className='option-checkbox'
              onChange={()=> {
                setCharAllowed((prev)=>!prev)
              }} 
            />
            <label htmlFor="characterInput">🔡 Include Symbols</label>
          </div>
        </div>
        
        <button 
          onClick={passwordGenerator}
          className='generate-button'
        >
          🔄 Generate New Password
        </button>
      </div>
    </div>
  )
}

export default PopupApp
