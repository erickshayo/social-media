import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {
  const [likes, setLikes] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)

  const likeshandler = () =>{
    setLikes(isLiked ? likes - 1 : likes + 1 )
    setIsLiked(isLiked)
  }

  
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post?.userid)[0].ProfilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">
                      {Users.filter((u) => u.id === post?.userid)[0].Username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight"></div>
                <MoreVert/>
            </div>
            <div className="postCenter">
              <span className="postText">{post.description} </span>
              <img className="postImg" src={post.Photo} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="assets/like.png" onClick={likeshandler} alt="" />
                <img className="likeIcon" src="assets/heart.png" onClick={likeshandler} alt="" />
                <span className="postlikeCounter">{likes} people liked it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comments} comments</span>
              </div>
            </div>
        </div>
    </div>
  )
}
