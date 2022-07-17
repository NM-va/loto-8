import React, { useState } from 'react';

import './App.scss';
import { Result } from './components/result/Result';
import { Ticket } from './components/ticket/Ticket';

const App = (): any => {
  const [isTicketWon, setIsTicketWon] = useState<boolean>(false);

  return (
    <div className="App">
      {isTicketWon ? (
        <Result />
      ) : (
        <Ticket isTicketWon={isTicketWon} setIsTicketWon={setIsTicketWon} />
      )}
    </div>
  );
};

export default App;
