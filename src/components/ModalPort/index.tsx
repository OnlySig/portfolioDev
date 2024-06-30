import { useRef } from 'react'
import Modal from '../Modal'
import { IProjeto } from '../../interface/IProjeto'
import CardPort from '../CardPort'
import styles from './ModalPort.module.scss'

const ModalPort = ({ projeto } : { projeto: IProjeto }) => {
  const modalRef = useRef<{abrirModal:()=>void, closeModal: ()=>void}>(null)
  
  return (
    <>
      <Modal ref={modalRef}>
        <div>
          <CardPort projeto={projeto} isModal/>
        </div>
      </Modal>
      <button className={styles.btnModal__Port} onClick={()=>modalRef.current?.abrirModal()}>Saber mais</button>
    </>
  )
}

export default ModalPort