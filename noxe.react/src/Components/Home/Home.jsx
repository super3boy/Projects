import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    state={movies:[]}
    getTranding = async() => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ae5ace4241bb4511950a424484d8dd8b`)
    this.setState({
        movies:data.results
    })
    }
    componentDidMount(){
        this.getTranding()
    }
    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item">
                                <div className='brdr w-25'></div>
                                <h1>treanding <br/> movies<br/> to watch now</h1>
                                <p className='secondFontColor'>Most watched movies by day</p>
                                <div className='brdr w-100'></div>
                            </div>
                        </div>
                        {this.state.movies.map((value,index)=>{
                            return (
                                <div key={index} className="col-md-2 my-3">
                                <div className="item">
                                <img className="w-100" src={'https://image.tmdb.org/t/p/original'+value.poster_path} alt="image of the movie" />
                                <h6 className="text-center my-2">{value.title} {value.name}</h6>
                                <span className="vote">{value.vote_average}</span>
                                </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
