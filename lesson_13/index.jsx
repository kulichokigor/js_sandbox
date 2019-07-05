"use stricth"

const React = require('react');
const ReactDOM = require('react-dom');


function Header(){
    return(
        <header style={{maxWidth:'100%', padding:'25px', borderBottom:'2px solid #09a9a9', textAlign:'center', backgroundColor:'#044b4b'}}>
            <h1 style={{color:'#09a9a9'}}>Header</h1>
        </header>
    ) 
}


function Main(){
    return(
        <main style={{width:'75%', height:'520px', backgroundColor:'#cbd9ed', textAlign:'center', lineHeight:'520px',float:'left',borderRight:'2px solid #09a9a9', boxSizing:'border-box'}}>
           <h2 style={{margin:'0', color:'#034242'}}>Main</h2>
        </main>
    ) 
}

function Aside(){
    return(
        <aside style={{width:'25%', height:'520px', backgroundColor:'#069d9d', float:'right',textAlign:'center', before:'content'}}>
           
            <h2 style={{margin:'0', color:'#034242'}}>Aside</h2>
            
        </aside>
    ) 
}

function Footer(){
    return(
        <footer style={{maxWidth:'100%', padding:'25px', borderTop:'2px solid #09a9a9', backgroundColor:'#044b4b'}}>
            <h2 style={{color:'#09a9a9', padding:'15px'}}>Address</h2>
            <address></address>
        </footer>
    ) 
}

const App = (
<div className="content">
    <Header/>
    <Main/>
    <Aside/>
    <Footer/>
</div>
)


ReactDOM.render(
    App,
document.querySelector('#window'))



function Circle({color, children}){

    return (
    <div className ="box" style = {{backgroundColor:`${color}`, borderRadius:'50%'}}>
        <div style={{textAlign:'center', lineHeight:"250px", overflow:`hidden` }}>{children}</div>
    </div>
    )
}

function Rect({color, children}){
    return(
        <div className ="box" style = {{backgroundColor:`${color}`}}>
            <div style={{textAlign:'center', lineHeight:"250px", overflow:`hidden` }}>{children}</div>
        </div>
    )
}

const AppToMain = (
    <div className="parth1">
    <Circle color="#f3b693">Circle</Circle>
    <Rect color="#b1f9ef">Rect</Rect>
    </div>
)

ReactDOM.render(
    AppToMain,
    document.querySelector('main'))


function Address({country,city,street,location}){
    
    
  let url = `https://www.google.com/maps/@${location},18.01z`
    return(
            <ul className="location">
                <li><b>Country:</b> {country}</li>
                <li><b>City:</b> {city}</li>
                <li><b>Str:</b> {street}</li>
                <li><a style={{color:'#ff782b'}} href={url} target="_blanck">Google map</a></li>
            </ul>
    )
}


ReactDOM.render(
    <Address country='Ukraine' city='Poltava' street='Marshal Biryuzov Street 58a' location="49.6001808,34.5039133"/>,
document.querySelector('address'))



let count = 0;
function User({firstName, lastName, age, children}){
    const addition = children
    ?<div style = {{border:'1px solid red'}}>{children}</div>:null
    return (
        <div style={{ border:`${Math.random() * 5}px solid #000`, marginTop:'15px', padding:'5px', width:'inherit', height:'33.3%' }}> 
        {count+=1}
            <span>{firstName}</span>
            <span>{lastName}</span>
            <div>He(she) is {age} years old</div>
            {addition}
        </div>
    )
}

ReactDOM.render((
<div>
    <User firstName = 'Ivan ' lastName="Ivanov" age={29}>
    Some additional info
    </User>
    <User firstName = 'Elena ' lastName="Ivanova" age={18} >
        <span>There is some image</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOCA0yIUNGNxLAn5zkSGeryrn9Djh72wH0RkIUrXMykwtOikyEg" alt=""/>
        </User>
    <User firstName = 'Nikola ' lastName="Tesla" age={180} />

</div> ), document.querySelector('aside'))