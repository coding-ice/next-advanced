import ColorPickerPanel from './components/ColorPicker/ColorPickerPanel';
import { Global } from './config/theme';

function App() {
  return (
    <>
      <Global />
      <ColorPickerPanel value="red" />
    </>
  );
}

export default App;
