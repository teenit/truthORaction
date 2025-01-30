import logo from './logo.svg';
import './App.css';
import Vanya from './Vanya';

import ButtonClickHere from './ButtonClickHere';
import './ButtonClickHere.css'
import ButtonReadMore from './ButtonReadMore';
import './ButtonReadMore.css'

import ButtonLearnMore from './ButtonLearnMore';
import './ButtonLearnMore.css';

import Button from './Button';
import './Button.css'
function App() {
  const mas = [49849, 4878, 77877, 778787];
  var questions = [
    {id: 1, ques: "Питання 1"},
    {id: 2, ques: "Питання 2"},
    {id: 3, ques: "Питання 3"},
    {id: 4, ques: "Питання 4"},
    {id: 5, ques: "Питання 5"},
    {id: 6, ques: "Питання 6"},
    {id: 7, ques: "Питання 7"},
  ]
  return (
    <div className='App'>
      <Vanya questions={questions}/>
      <ButtonLearnMore />
      <ButtonClickHere/>
      <ButtonReadMore />
      <Button />
    </div>
  );
}

export default App;
