import React, {useRef} from "react";
import Head from 'next/head';
import Calculator from '../components/Calculator';
import styles from '../styles/Home.module.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayTop:"0",
      displayBottom:"0",
      result:""
    }
    this.clickNumber = this.clickNumber.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.backspace = this.backspace.bind(this);
    this.clickSymbol = this.clickSymbol.bind(this);
    this.clickDivide = this.clickDivide.bind(this);
    this.clickDecimal = this.clickDecimal.bind(this);
    this.clickEquals = this.clickEquals.bind(this);
  }

  componentDidMount(){
    if (typeof window !== "undefined") {
      const element = document.createElement("script");
      element.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
      element.type = "text/javascript";
      const position = document.querySelector("body");
      position.appendChild(element);
    }
  }
  clickNumber(event){
    const numberValue = event.target.innerText;
    if(this.state.result){
      this.setState({
        displayBottom:numberValue,
        displayTop:numberValue,
        result:""
      });
    }else if(this.state.displayBottom.length <= 15){
      const stringTop = this.state.displayTop === "0" ? numberValue
        : this.state.displayTop!== "0" && this.state.displayBottom ==="0" && numberValue==="0" ? this.state.displayTop 
        : this.state.displayTop.concat(numberValue);
      const stringBottom = this.state.displayBottom === "0" || this.state.displayBottom.match(/[\/]|[\*]|[+]|[-]/) ? numberValue
        : this.state.displayBottom.concat(numberValue);
      this.setState({
        displayBottom:stringBottom,
        displayTop: stringTop
      });
    }else{
      document.getElementById("display").innerHTML="DIGIT LIMIT MET"
      setTimeout(()=>{
        document.getElementById("display").innerHTML = this.state.displayBottom;
      },1000);
    }
  }
  clearAll(){
    this.setState({
      displayBottom:"0",
      displayTop:"0",
      result:""
    });
  }
  backspace(){
    if(this.state.result){
      const index = this.state.displayTop.indexOf("=");
      let valueTop = this.state.displayTop.slice(0,index);
      this.setState({
        displayBottom:"0",
        displayTop:valueTop,
        result:""
      });
    }else{
      this.setState({
        displayTop: this.state.displayTop.length > 1 ? this.state.displayTop.slice(0,-1) : "0",
        displayBottom: "0"
      });
    }
  }
  clickSymbol(event){
    const string = event.target.innerText === "x"? "*" : event.target.innerText;
    if(this.state.result){
      this.setState({
        displayBottom:string,
        displayTop:this.state.result.concat(" "+string),
        result:""
      });
    }else{
      if(this.state.displayTop.length===1 && this.state.displayTop==="0"){
        this.setState({
          displayTop:string === "+" || string ==="-" ? string : this.state.displayTop,
          displayBottom:string === "+" || string ==="-" ? string : this.state.displayBottom
        });
      }else if(this.state.displayBottom.match(/[+]|[-]/)){
        let valueTop = ""
        if(this.state.displayTop.match(/[\/*+-]{2}$/)){
          console.log("entro");
          valueTop = this.state.displayTop.slice(0, this.state.displayTop.length-2);
          valueTop = valueTop.concat(string)
        }else{
          valueTop = this.state.displayTop.slice();
          valueTop = valueTop.replace(/[+-]$/,string);
        }        
        console.log(valueTop);
        this.setState({
          displayTop:valueTop,
          displayBottom:string
        });
      }else if (!this.state.displayTop.match(/[\*+-\/]{1}$/)){
        this.setState({
          displayTop:this.state.displayTop.concat(" " + string),
          displayBottom:string
        });
      }else if(this.state.displayBottom==='/' && string ==="*"){
        let valueTop = this.state.displayTop.slice();
        valueTop = valueTop.replace(/\/$/,string);
        this.setState({
          displayTop:valueTop,
          displayBottom:string
        });
      }else if((this.state.displayBottom==='*' || this.state.displayBottom==='/') && (string === '+' || string === '-')){
        this.setState({
          displayTop:this.state.displayTop.concat(string),
          displayBottom:string
        });
      }
    }
  }
  clickDivide(){
    if(this.state.result){
      this.setState({
        displayBottom:"/",
        displayTop:this.state.result.concat(" /"),
        result:""
      });
    }else{
      if (this.state.displayTop!=="0" && !this.state.displayTop.match(/[\*+-\/]$/)){
        this.setState({
          displayTop:this.state.displayTop.concat(" /"),
          displayBottom:"/"
        });
      }else if(this.state.displayBottom.match(/[+]|[-]|[\*]/)){
        let valueTop = this.state.displayTop.slice();
        valueTop = valueTop.replace(/[\*+-]{1}$/,'/');
        this.setState({
          displayTop:valueTop,
          displayBottom:"/"
        });
      }
    }
  }
  clickDecimal(){
    if((this.state.displayTop.length===1 && this.state.displayTop==="0") || this.state.result){
      this.setState({
        displayTop:".",
        displayBottom:".",
        result:""
      });
    }else if(this.state.displayBottom.match(/[\/]|[\*]|[+]|[-]/)){
      this.setState({
        displayTop:this.state.displayTop.concat("."),
        displayBottom:"."
      });
    }else if(!this.state.displayBottom.match(/\./g)){
      this.setState({
        displayTop:this.state.displayTop.concat("."),
        displayBottom:this.state.displayBottom.concat(".")
      });
    }
  }
  clickEquals(){
    if(!this.state.result){
      const sentence = this.state.displayTop.slice().replace(/\s/g,"");
      const result = eval(sentence).toString();
      this.setState({
        displayTop:this.state.displayTop.concat(` =${result}`),
        displayBottom:result,
        result
      });
    }
  }

  render(){
    return (
      <div className={styles.container}>
        <Head>
          <title>FCC Calculator</title>
        </Head>
        <main className={styles.main_container}>
          <h1>
            Calculator
          </h1>
          <div className={styles.calculator_container}>
            <Calculator
            displayTop={this.state.displayTop}
            displayBottom={this.state.displayBottom}
            numberClick={this.clickNumber}
            clear={this.clearAll}
            backspace={this.backspace}
            clickSymbol={this.clickSymbol}
            clickDivide={this.clickDivide}
            clickDecimal={this.clickDecimal}
            clickEquals={this.clickEquals}
            />
          </div>
        </main>
        <footer>
          <a href="https://github.com/aefuen1">&copy; Andres Fuentes</a>
        </footer>
      </div>
    );
  }
}

export default Home;