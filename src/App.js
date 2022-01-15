import 'tui-image-editor/dist/tui-image-editor.css';
import './App.css';
import ImageEditor from '@toast-ui/react-image-editor';
import { useEffect } from 'react';



function App() {
  
  useEffect(() => {
    document.querySelector('.tui-image-editor-header-logo').setAttribute('src', 'https://logos.flamingtext.com/Name-Logos/Noe-design-sketch-name.png')
  }, [])

  return (
    <ImageEditor
    includeUI={{
      loadImage: {
        path: 'img/sampleImage.jpg',
        name: 'SampleImage',
      },      
      menu: ['shape', 'filter'],
      initMenu: 'filter',
      uiSize: {
        width: '100vw',
        height: '100vh',
      },
      menuBarPosition: 'bottom',
    }}
    
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70,
    }}
    usageStatistics={true}
  />
  );
}

export default App;
