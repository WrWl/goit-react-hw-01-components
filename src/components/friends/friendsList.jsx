import { FriendListItem } from "./friendListItem"
import { FriendItem, Friends } from "./friends.list.style"


export const FriendList = ({ friends }) => {
    return <Friends>
        {friends.map(friend => {
           return <FriendItem key = {friend.id}>
                <FriendListItem isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
            </FriendItem>
        })}    
</Friends>
}