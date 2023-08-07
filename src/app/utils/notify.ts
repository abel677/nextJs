import { toast, ToastOptions, Id } from "react-toastify";

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  pauseOnFocusLoss: false,
  progress: undefined,
};

interface IMessagePromise {
  pending?: string;
  success?: string;
  error?: string;
}

const info = (message = "", id?: string): Id =>
  toast(message, {
    ...toastConfig,
    type: "info",
    toastId: id,
  });

const success = (message = "", id?: string): Id =>
  toast(message, {
    ...toastConfig,
    type: "success",
    toastId: id,
  });

const warning = (message = "", id?: string): Id =>
  toast(message, {
    ...toastConfig,
    type: "warning",
    toastId: id,
  });

const error = (message = "", id?: string): Id =>
  toast(message, {
    ...toastConfig,
    type: "error",
    toastId: id,
  });

const show = (message = "", id?: string): Id =>
  toast.error(message, {
    ...toastConfig,
    type: "default",
    toastId: id,
  });

const asyncPromise = <T>(
  message: IMessagePromise,
  promise: Promise<T>,
  id?: string
): Promise<T> =>
  toast.promise(
    promise,
    {
      pending: message.pending,
      success: message.success,
      error: message.error,
    },
    {
      ...toastConfig,
      toastId: id,
    }
  );

const remove = (id?: string): void => {
  toast.dismiss(id);
};

export const Notify = {
  info,
  success,
  warning,
  error,
  show,
  asyncPromise,
  remove,
};
