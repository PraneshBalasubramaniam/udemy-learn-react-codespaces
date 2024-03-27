import SearchBar from './components/SearchBar';
import api from './api'

function App() {
  const handleSubmit = async (term) => {
    console.log('Do a search with', term);
    api(term).then((data) => data.json()).then((data) => console.log(data))
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
