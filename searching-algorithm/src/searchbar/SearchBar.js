import React, { Component } from 'react';
import {indexOf, binarySearch} from '../helpers/helpers';
import arr from '../helpers/array'

export default class SearchBar extends Component {
    state = {
        value: '',
        notFound: false,
        steps: null,
        index: null
    }

    handleSumbitLinear = (e) => {
        e.preventDefault()
        searchResult = indexOf(arr, this.state.value)
        const {nope, index, tick} = searchResult
        if(nope) {
            this.setState({
                notFound: true,
                steps: tick
            })
        }
        this.setState({
            steps: tick,
            index: index,
        })
        
    }

    handleSumbitBinary = (e) => {
        e.preventDefault()
        const newArr = arr.sort(function(a,b) {return a-b})
        console.log(newArr)
        const searchResult = binarySearch(newArr, this.state.value, 0, newArr.length)
        const {nope, index, tick} = searchResult
        if(nope) {
            this.setState({
                notFound: true,
                steps: tick
            })
        }
        this.setState({
            steps: tick,
            index: index,
        })
    }

    clearTerm = (e) => {
        e.preventDefault()
        this.setState({
            value: '',
            notFound: false,
            steps: null,
            index: null
        })
    }

    render() {
        const {value, notFound, index, steps} = this.state
        return (
            <form id="searchBar" >
                <label htmlFor="search">Search: </label>
                <input type="text" name="search" value={value} placeholder="Search for a Number" id="search" onChange={(e) => this.setState({value: e.target.value})}></input>
                <button onClick={(e) => this.clearTerm(e)}>Clear</button>
                <br />
                <br />
                <div>
                    <button onClick={e => this.handleSumbitLinear(e)}>Submit Linear Search</button> 
                    <button onClick={e => this.handleSumbitBinary(e)}>Submit Binary Search</button>
                </div>
                <div>
                    {notFound && <><p>{value} was not found and it took {steps} steps to find that out</p> <button onClick={(e) => this.clearTerm(e)}>Retry</button></>}
                    {!notFound && steps && <><p>{value} was found at index {index} and it took {steps} steps to find it </p><button onClick={(e) => this.clearTerm(e)}>Search Again</button></>}
                </div>
            </form> 
        )
    }
}