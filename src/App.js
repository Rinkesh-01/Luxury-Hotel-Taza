import AOS from 'aos';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
  AOS.init({
  once: true,         
  mirror: false,      
  startEvent: 'load', 
  offset: 120,        
  delay: 0,          
  duration: 600,      
});

  }, []);

  return (
    <div>
      {/* tamaru JSX */}
    </div>
  );
}

export default App;
