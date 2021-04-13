import React from "react";
import { Grid } from '@material-ui/core';
import { NumberPad, OperatorPad, Display1, Display2 } from "../styles/buttons";
import styles from "../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";


export default function Calculator(props){
    
    return(
        <React.Fragment>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Display1 id="display2">{props.displayTop}</Display1>
                <Display2 id="display">{props.displayBottom}</Display2>
            </Grid>
            <Grid item xs={6}>
                <OperatorPad id="clear" onClick={props.clear}>AC</OperatorPad>
            </Grid>
            <Grid item xs={3}>
                <OperatorPad id="delete" onClick={props.backspace}><FontAwesomeIcon icon={faBackspace}/></OperatorPad>
            </Grid>
            <Grid item xs={3}>
                <OperatorPad id="divide" onClick={props.clickDivide}>&divide;</OperatorPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="seven" onClick={props.numberClick}>7</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="eight" onClick={props.numberClick}>8</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="nine" onClick={props.numberClick}>9</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <OperatorPad id="multiply" onClick={props.clickSymbol}>x</OperatorPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="four" onClick={props.numberClick}>4</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="five" onClick={props.numberClick}>5</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="six" onClick={props.numberClick}>6</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <OperatorPad id="subtract" onClick={props.clickSymbol}>-</OperatorPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="one" onClick={props.numberClick}>1</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="two" onClick={props.numberClick}>2</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <NumberPad id="three" onClick={props.numberClick}>3</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <OperatorPad id="add" onClick={props.clickSymbol}W>+</OperatorPad>
            </Grid>
            <Grid item xs={6}>
                <NumberPad id="zero" onClick={props.numberClick}>0</NumberPad>
            </Grid>
            <Grid item xs={3}>
                <OperatorPad id="decimal" onClick={props.clickDecimal}>.</OperatorPad>
            </Grid>
            <Grid item xs={3}>
                <OperatorPad id="equals" onClick={props.clickEquals}>=</OperatorPad>
            </Grid>
        </Grid>
        </React.Fragment>
    );
}
