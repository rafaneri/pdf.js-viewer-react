import './App.css';
import PdfViewer from './pdf-viewer/PdfViewer';

function App() {
  return (
    <div className="App">
      <PdfViewer file="/assets/files/teste.pdf" />
      {/* <PdfViewer file="https%3A%2F%2Fassets-tim-dev.s3-accelerate.amazonaws.com%2F5ffc9e77b2f33d29292eb6d2_60b10e70e023e744c3c42910_1622216330659.pdf%3FAWSAccessKeyId%3DAKIAQERCLHUPFZXND7IV%26Expires%3D1622558782%26Signature%3Dmggr1BiY99yriO29POR6HPuBdaU%253Dpdf" /> */}
    </div>
  );
}

export default App;
