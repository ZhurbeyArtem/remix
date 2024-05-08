import { ReactNode, useEffect } from 'react'
import s from './Modal.module.css'

interface IModal {
  disableGlobalScroll?: boolean,
  open: boolean,
  children: ReactNode
}

export const Modal = ({ disableGlobalScroll, open, children }: IModal) => {
  useEffect(() => {
    if (disableGlobalScroll && open)
      document.body.style.overflow = 'hidden';
    else {
      document.body.style.overflow = 'auto';
    }
  }, [disableGlobalScroll, open])
  return (
    open &&
    <div className={s.modal}>
      <div className={s.wrapper}>
        {children}

      </div>
    </div>
  )
}
