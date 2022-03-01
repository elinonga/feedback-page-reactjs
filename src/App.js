import './App.css';
import CustomerService from './components/CustomerService';
import Experience from './components/Experience';
import Header from './components/Header';
import Payment from './components/Payment';
import PopUp from './components/PopUp';
import TextArea from './components/TextArea';



function App() {
  return (
    <div className="App">

      <Header />
      <Experience />
      <Payment />
      <CustomerService />
      <TextArea />
      <PopUp />

    </div>
  );
}

export default App;
