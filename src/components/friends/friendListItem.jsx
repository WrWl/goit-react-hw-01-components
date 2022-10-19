import { Avatar, Name, Status } from "./Friends.item.style"
import { BsFillCircleFill } from 'react-icons/bs';
export const FriendListItem = ({ avatar, name, isOnline, }) => {
    return <>
    
        <Status ><BsFillCircleFill style={{
            color: isOnline ? "green" : 'red',
            maxWidth:20
        }} /></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
    
    </>
}