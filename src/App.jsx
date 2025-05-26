import Body from "./components/Body";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { Provider, useDispatch } from "react-redux";
import userstore from "./utils/appStore";
import ProtectedRoute from "./utils/protectedroute";
function App() {
  return (
    <>
      <Provider store={userstore}>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route
            path="/browse"
            element={
              <ProtectedRoute>
                <Browse />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
