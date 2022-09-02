import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['dhruvin', 'Naresh', 'paresh', 'dhruvin']
    const persons = [
        { 
            id:1,
            name: 'dhruvin',
            age: 20,
            skill: 'Java, C++'
        },
        {
            id:2,
            name: 'paresh',
            age: 70,
            skill: 'C++, Dart'
        },
        {
            id:3,
            name: 'Naresh',
            age: 50,
            skill: 'flutter, web3'
        },
        {
            id:3,
            name: 'Naresh',
            age: 50,
            skill: 'flutter, web3'
        }
    ]
    
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <>
    <div> {personList} </div>
    <div>{nameList}</div>
    </>
    )

};

export default NameList;