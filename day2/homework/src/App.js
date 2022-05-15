import logo from './logo.svg';
import './App.css';
import Manga from './components/Manga.js';
import MangaList from './components/MangaList.js';

function App() {
  return (
    <div >
      <Manga photo="https://top10az.com/wp-content/uploads/2021/07/Uzumaki-Naruto-1024x1024.jpg"/>
      <MangaList />
    </div>
  );
}

export default App;
