import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import data from './Data';

import ParticlesBg from 'particles-bg';


const home = () => {
    return(
        ReactDOM.render(
        <>
            <div className="head1">
            <h1>Welcome to PysVote</h1>
            </div>
            
            <table class="scrolldown">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                {data.map((person) => {
                    const {id, name, age, city} = person;
                    return (
                    <>
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{city}</td>
                        </tr>                         
                    </>
                    )
                })}
                </tbody>
            </table>

            <ParticlesBg type="square" num="50" bg={true}/>
        </>,
        document.getElementById('root')
    )
    );
}

export default home
