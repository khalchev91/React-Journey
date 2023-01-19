
function About() {
    return (
        <div className="main-about">
            <h2>About</h2>
            <p>
                Hi, I am Khalin Cheverria. I started my career with experimenting with the Android operating system since I was around 17 years old circa 2015. I then started a computer science degree in the same year at the University of Technology. While there, I got a new laptop when I was starting my 2nd year of University which was close to August 2016.
                At that point I was unstoppable. I started experimenting with a variety of things like Java FX, Java Swing to build desktop applications. From there I moved on to building mobile apps using Java.
                In May 2017, a friend of mine asked if I wanted a summer job working at this place called Sapna. I said yes without hesitating and from there I learnt a variety of things.
                I started building web apps in a variety of languages. We used the .NET framework and Laravel for a number of projects we were given. I learned other languages/frameworks on my own. I played around with flutter and built a mobile app for a school project which utilized a web api which I also made using .NET Core 2.2 at the time.
            </p>
            <p>
                Through Sapna, I got a recommendation for an interview at Grace Kennedy Financial Group. I nailed the interview and started working there in May 2019 where I still work currently.
                I am a server side Software Developer there. I specialize in mostly Web applicatons which includes apis.
                I know a small amount of client side development but I am currently working on my skills as a front end developer.
            </p>
        </div>
    );
}

function Interests() {
    return (
        <div className="main-interests">
            <h2>Interests</h2>
            <p>My interests vary and is not limited to what is listed below: </p>
            <ul>
                <li>Aviation</li>
                <li>Electronics</li>
                <li>Programming</li>
                <li>Cars</li>
            </ul>
        </div>
    )
}

export default function Main() {
    return (
        <div className="main">
            <About />
            <Interests />
        </div>
    )
}