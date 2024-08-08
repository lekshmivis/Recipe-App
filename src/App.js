import logo from './logo.svg';
import './App.css';
import AddRecipe from './Components/AddRecipe';
import DeleteRecipe from './Components/DeleteRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddRecipe/>}/>
        <Route path='/DeleteRecipe' element={<DeleteRecipe/>}/>
      <AddRecipe />
     <DeleteRecipe/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
