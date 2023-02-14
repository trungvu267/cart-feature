import { ToastContainer as Container } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ToastContainer = () => {
  return (
    <Container
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export default ToastContainer
