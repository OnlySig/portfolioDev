import { ReactElement, forwardRef, useImperativeHandle, useRef } from 'react'
import styles from './ModalPort.module.scss'

const Modal = forwardRef(({ children } : { children: ReactElement | ReactElement[] }, ref) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const closeModal = () => {
    dialogRef.current?.close()
  }
  const abrirModal = () => {
    dialogRef.current?.showModal()
  }
  useImperativeHandle(ref, ()=>{
    return {
      abrirModal,
      closeModal
    }
  })
  return (
    <dialog ref={dialogRef} className={styles.modal__container}>
      <div className={styles.modalBtn}>
        <button className={styles.btn} onClick={closeModal}>X</button>
      </div>
      <div className={styles.dialogContent}>
        { children }
      </div>
    </dialog>
  )
})
Modal.displayName = "modal"

export default Modal