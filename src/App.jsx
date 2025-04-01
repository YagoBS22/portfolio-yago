import { Stack } from '@mui/material'
import Header from './components/header'
import Body from './components/Body'
import './App.css'

function App() {

  return (
    <Stack
    className='app-container'
    >
      <Header/>
      <Body/>
    </Stack>
    )
}

export default App
