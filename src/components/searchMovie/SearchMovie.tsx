import { useState, useContext } from "react"
import { MovieContext } from "../../context/MovieContext"
import { useNavigate } from "react-router-dom"
import { Wrapper, Input, Button } from "./StyledSearch"

export default function SearchMovie(){

    const { APIKey }:any= useContext(MovieContext)
    
    const [searchText, setSearchText]= useState<string>("")
    const [result, setResults]= useState()
    
    const handleSearchText = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchText(e.target.value)
    }
    const navigate= useNavigate()
    
    const handleClickSearch= async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${searchText}`)
        const data = await response.json()
        setResults(data.results)
        if(data.results.length && result){
            return navigate("/results",{state: result})
        }
    }
    return (
        <Wrapper>
            <Input type="text" value={searchText} onChange={handleSearchText} placeholder="Search Movie" />
            <Button onClick={handleClickSearch}  disabled={!searchText.length}>Search</Button>
        </Wrapper>
    )
}