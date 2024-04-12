import "./closeFriends.css"

export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
      <img src={user.ProfilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.Username}</span>
    </li>
  )
}
