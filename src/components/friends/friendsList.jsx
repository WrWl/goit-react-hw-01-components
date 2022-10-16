import { FriendListItem } from "./friendListItem"


export const FriendList = ({ friends }) => {
    return <ul class="friend-list">
        {friends.map(friend => {
           return <li key = {friend.id}>
                <FriendListItem isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
            </li>
        })}    
</ul>
}