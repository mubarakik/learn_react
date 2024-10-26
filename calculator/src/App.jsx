import './App.css'
import Button from './components/Button'
import Calculator2 from './components/Calculator2'
import 'remixicon/fonts/remixicon.css'

function App() {
  const onClick = (_,props)=>{
    console.log(props);
  }


  return (
    <>
      <Calculator2 />
      {/* <Button 
        className='calc-btn btn-accent'
        value='1'
        type='number' 
        icon='ri-save-line' 
        text='' 
        onClick={onClick}/> */}
    </>
  )
}

export default App
