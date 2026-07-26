import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddPostForm from './features/posts/AddPostForm.jsx'

//REACT-ROUTER
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

//REDUX
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/AddPostForm",
    element:<AddPostForm />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
