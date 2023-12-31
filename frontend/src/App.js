import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import LandingPage from "./components/pages/LandingPage";
import CreateBook from './components/pages/CreateBook';
import DeleteBook from './components/pages/DeleteBook';
import EditBook from './components/pages/EditBook';
import ShowBook from "./components/pages/ShowBook";
import Crud from "./components/pages/Crud";
import Api from "./components/pages/Api";
import Authenticate from "./components/pages/Authenticate";
import UserContextProvider from "./context/userContext.js";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route element={<Main/>}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/crud" element={<Crud/>}/>
          <Route path="/api" element={<Api/>}/>
          <Route path="/authenticate" element={<Authenticate/>}/>
          <Route path="/create_book" element={<CreateBook/>}/>
          <Route path="/delete_book/:id" element={<DeleteBook/>}/>
          <Route path="/edit_book/:id" element={<EditBook/>}/>
          <Route path="/show_book/:id" element={<ShowBook/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
