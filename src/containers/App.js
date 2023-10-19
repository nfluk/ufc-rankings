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
    ]);
  }, []);

  return (
    <main className="container">
      <Navbar />
      <AthleteCardList athletes={athletes} />
    </main>
  );
}

export default App;
