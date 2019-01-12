import React from "react"
import DefaultProfileImage from "../images/default-profile-image.jpg"

const UserAside = ({profileImageUrl,username}) => (
    <aside className = "col-sm-2">
        <div className = "panel panel-default">
            <div className = "panel-body">
                <img src = {profileImageUrl ||  DefaultProfileImage} alt={username} className = "img-thumbnail"
                width= "200px" height = "200px"/>
            </div>
        </div>
    </aside>
)
export default UserAside