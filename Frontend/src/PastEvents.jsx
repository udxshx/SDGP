import React from 'react';
import { useState } from 'react';

const PastEvents = () => {

    const organizations = ["Organization1","Oragization2","Organization3"];
    const [org,setOrg] = useState(organizations[0]);
    const handleEvent = (e) => {
        setOrg(e.target.value);
    };

    return ( 
        <select value={org} onChange={handleEvent}>
            {organizations.map((org) => (
                <option value={org}>
                    {org}
                </option>
            ))}
        </select>
     );
}
 
export default PastEvents;