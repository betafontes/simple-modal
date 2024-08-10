import { useState } from 'react';
import './App.css';
import { Modal } from './components/Modal';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <h2>Clique no botão para abrir o Modal</h2>
      <button onClick={() => setOpen(!open)}>Clique aqui</button>

      <Modal
        isOpen={open}
        setOpen={setOpen}
        title={'Título do Modal'}
        description={'descrição do modal'}
      />
    </>
  );
}

export default App;
