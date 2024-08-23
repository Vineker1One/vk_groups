import React, { useState } from 'react';
import Header from './components/Header';
import Posts from './components/Posts';

function App() {
    const [domain, setDomain] = useState('');

    const handleDomainChange = (newDomain) => {
        setDomain(newDomain);
    };

    return (
        <div>
            <Header onDomainChange={handleDomainChange} />
            {domain && <Posts domain={domain} />}
        </div>
    );
}

export default App;