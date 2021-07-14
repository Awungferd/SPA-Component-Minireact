import ReactDOM from 'react-dom';
import BootstrapButton from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import './main.scss'
import styled from 'styled-components';

//Define "mini component" with styled components
const borderWidth=2;
const Button = styled.button`
border: ${borderWidth}px double blue;
border-radius: 50px 20px;
color: brown;
margin: 1em;
background:inherit`;

function  StyledComponentTest() {
    return <div>
        <BootstrapButton>Button1</BootstrapButton>
        <Button>Button2</Button>
        <Button>Button3</Button>
    </div>
    
}

function Classes(props) {
    let className = "classes"
    if (props.warning) {
        className = className + " classes-warning"

    }


    return <div className={className} >
        I use classes
    </div>

}


function Inline() {
    const divStyle = {
        color: "blue",
        textAlign: "center",
        border: "2px double red",
        background: "goldenrod",
        fontSize: "2rem",
        height: 150,
        paddingTop: 30,//this value gets automatically converted to pixels
        zoom: 2 // this is not converted to pixels for zoom property
    }
    return <div style={divStyle}>I use inline styles</div>
}

function Bootstrap() {
    return <Alert variant="success" className="Classes">
        <h1>Hello from Bootstrap</h1>
        <Inline />
        <StyledComponentTest/>
    </Alert>

}










ReactDOM.render(
    <div className="wrapper">
        <Classes />
        <Bootstrap />
    </div>,
    document.querySelector("#root")
);