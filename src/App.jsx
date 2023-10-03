import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App(){
  return (
    <>
    <h1 className=' text-center font-bold text-4xl font-sans '>Todo App</h1>
   <AddTodo/>
   <Todos/>
    </>
  )
}

export default App
