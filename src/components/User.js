import React from 'react'

import UserHead from './UserHead'
import UserList from './UserList'

class User extends React.Component{
    render(){
        return (
            <div>
                <UserHead/>
                <UserList></UserList>
                
            </div>
        )
    }
}

export default User;