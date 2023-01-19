function Image(){
    return (
        <img className="header-img" src="portrait.jpg"></img>
    )
}

function Name (){
    return (
        <div className="header-name">
            <h2>
                Khalin Cheverria
            </h2>
            <p>
                Full Stack Developer
            </p>
        </div>
    )
}

function Button (){
    return (
        <div className="header-btn">
            <button className="header-email"><i className="fas fa-envelope"></i>Email</button>
            <button className="header-linkedIn"><i className="fab fa-linkedin-in"></i>LinkedIn</button>
        </div>
    )
}

export default function Header(){
    return (
        <div>
            <Image/>
            <Name />
            <Button/>
        </div>
    )
}