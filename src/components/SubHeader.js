import styled from 'styled-components';
import { useState } from 'react';

const Sub = styled.sub`
    width: 100%;
    height: 35px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0, 10px;
    display: flex;
    justify-content: space-between;

    search{
        
    }
`

const SubHeader = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const loaded = () => {
        return (
            <Sub> 
                <input 
                id='search' 
                type="text" 
                placeholder='search' 
                onChange={event=> {
                    setSearchTerm(event.target.value)
                }}/> 
                {props.places.filter((val) => {
                    if (searchTerm == "") {
                        return val
                        //if the searched item includes the search tearms (i put by name)
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className='place' key={key}>
                            <p>{val.name}</p>
                        </div>
                    );
                })}
            </Sub>
        )
    }
    return props.places ? loaded() : <h1>Loading ...</h1>
}

export default SubHeader;