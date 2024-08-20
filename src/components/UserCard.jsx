import React from 'react'

const UserCard = (props) => {
    return (

        <div className='user-card'>
            <h1 className='Cc'>Random User :-</h1>
            <h3>{props.data.name.first} {props.data.name.last}</h3>
            <p>Phone: {props.data.phone}</p>
            <p>Location: {props.data.location.city}, {props.data.location.state}</p>
            <h5 className='Cc'>Mabe by Sehar Tahir &hearts;</h5>
        </div>
    )
}

export default UserCard
