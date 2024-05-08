import { useState } from 'react'
import { Modal } from './Components/Modal/Modal'
import { Censorship } from './Components/Сensorship/Censorship';


function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [disableGlobalScroll, setDisableGlobalScroll] = useState<boolean>(true);
  const badWords = ['test', 'someBadWord'];
  const someText = 'Very long text who containts someBadWord and testWord';
  return (
    <>
      <button type='button' onClick={() => setOpen(true)}>open modal</button>
      <label>
        <input
          type="checkbox"
          checked={disableGlobalScroll}
          onChange={() => setDisableGlobalScroll(!disableGlobalScroll)}
        />
        Check me
      </label>

      <Censorship text={someText} badWords={badWords} />



      <Modal open={open} disableGlobalScroll={disableGlobalScroll}>
        <div>
          <h1>Some content</h1>
          <button type='button' onClick={() => setOpen(false)}>close</button>
        </div>
      </Modal>
    </>
  )
}

export default App
