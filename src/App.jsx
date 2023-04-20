import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import IndexPage from "./pages/IndexPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import CreatePage from "./pages/CreatePage"
import { UserContextProvider } from "./UserContext"
import PostPage from "./pages/PostPage"
import EditPost from "./pages/EditPost"

function App() {

  return (
    <UserContextProvider>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <IndexPage />
          } />
          <Route path="/login" element={
            <LoginPage />
          } />
          <Route path="/register" element={
            <RegisterPage />
          } />
          <Route path="/create" element={
            <CreatePage />
          } />
          <Route path="/post/:id" element={
            <PostPage />
          } />
          <Route path="/edit/:id" element={
            <EditPost />
          } />
        </Route>
      </Routes >
    </UserContextProvider>
  )
}

export default App