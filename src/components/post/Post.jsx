import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Sanel sanel</span>
                    <span className="postDate">5 min Ago</span>
                </div>
                <div className="postTopRight"></div>
                <MoreVert/>
            </div>
            <div className="postCenter"></div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}
