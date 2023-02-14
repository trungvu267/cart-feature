import { toast } from 'react-toastify'
type ToastProps = {
  message: string
}
export const successToast = ({ message }: ToastProps) => {
  return toast(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  })
}
