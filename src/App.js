import './App.css';
import PersonCard from './components/PersonCard';

const userArr = [
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 28, 
    hairColor: "Black"
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 80, 
    hairColor: "Brown"
  },
  {
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50, 
    hairColor: "Brown"
  },
  {
    firstName: "Maria",
    lastName: "Smith",
    age: 65, 
    hairColor: "Red"
  },


]

function App() {
  return (
    <div className="App">
      {userArr.map((userObj, index) => (
        <PersonCard 
          key = {index}
          firstName = {userObj.firstName}
          lastName = {userObj.lastName}
          age = {userObj.age}
          hairColor = {userObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;
