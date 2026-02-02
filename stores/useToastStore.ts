import { create } from 'zustand'

interface ToastContext {
    text: string 
}

type ToastStore = {
    isVisible: boolean, 
    toastContext: ToastContext | undefined, 
    displayToast: (context: ToastContext) => void 
    hideToast: () => void 
}


export const useToastStore = create<ToastStore>((set) => ({
    isVisible: false,
    toastContext: undefined,


  displayToast: (context) =>
    set(() => ({
      isVisible: true,
      toastContext: context,
    })),

  hideToast: () =>
    set(() => ({
      isVisible: false,
      toastContext: undefined,
    })),

}))