import style from './Modal.module.css';

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  description: string;
}

export function Modal({ isOpen, setOpen, title, description }: IModal) {
  if (isOpen) {
    return (
      <div className={style.background}>
        <div className={style.modal}>
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={() => setOpen(!isOpen)}>Fechar</button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
