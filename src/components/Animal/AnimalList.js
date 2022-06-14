import Animal from './Animal.js';
import './AnimalList.css';

export default function AnimalList({ animals }) {
  return (
    <div className='animalList'>
      {animals.map(animal =>
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says}
        />)

      }
    </div>
  );
}