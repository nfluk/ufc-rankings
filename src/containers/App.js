import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import AthleteCardList from '../components/AthleteCardList';

function App() {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    setAthletes([
      {
        id: 1,
        name: 'King Kong',
        record: '101-0',
      },
      {
        id: 2,
        name: 'Godzilla',
        record: '102-0',
      },
      {
        id: 3,
        name: 'Chirano',
        record: '88-0',
      },
      {
        id: 4,
        name: 'Megatron',
        record: '111-0',
      },
      {
        id: 5,
        name: 'Optimus Prime',
        record: '112-0',
      },
      {
        id: 6,
        name: 'Goku',
        record: '701-0',
      },
      {
        id: 7,
        name: 'Rickson',
        record: '7-0',
      },
    ]);
  }, []);

  return (
    <div>
      <div className="tc avenir">
        <Navbar />
        <AthleteCardList athletes={athletes} />
      </div>
    </div>
  );
}

export default App;
