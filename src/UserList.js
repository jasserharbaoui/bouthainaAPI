import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./userCard";



const UserList =()=>{
    const [list , setList] = useState([]);
    console.log('list' , list);

    const getUsers = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response)=>{
        setList(response.data);
       })
       .catch((error)=>{
        console.error(error);
       })
      }

    useEffect(()=>{
     
      getUsers()

    },[])
    return (
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around", backgroundColor:"blue"}}>
            {list.map((item,index)=>{
                return(
                    <div style={{margin:"20px"}}>
                        <UserCard key={index} user={item}/>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList