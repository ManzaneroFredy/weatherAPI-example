import React, { Component } from 'react'
import WeatherInfor from './components/WeatherInfor';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './Keys';



class App extends Component{

    state ={
        temperature: '',
        description: '',
        himidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    };

    getWeather =async e =>{
        e.preventDefault();
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if(countryValue && cityValue){
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`
            const response = await fetch(API_URL);
            const data = await response.json();
            
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                himidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            })

        }else{
            this.setState({error: "Ingrese una ciudad y un pais"})
        }
        

    }


    render(){
        return(
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-8 mx-auto'>
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfor {...this.state}/>
                    </div>
                </div>
            </div> 
        ) 
    }
}

export default App;