import logo from './logo.svg';
import './App.css';
import ContactList from './containers/contact_list';

function App() {
  return (
    <div className="App">
      <header>
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
