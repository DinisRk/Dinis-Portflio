import React, { Component } from 'react'
import Slider from '@mui/material/Slider/Slider'
import { Box } from '@mui/material';
import '../App.css'




export default class MainContainter extends Component {
    constructor(props){
        super(props);
        this.state = {
            red:0,
            green:0,
            blue:0,
            opacity: 1,
            radius:0,
            zoom:100,
            rotationAngle:0,
            
        }
    
       // this.updateRed = this.updateRed.bind(this)

       // this.updateGreen = this.updateGreen.bind(this)

       // this.updateBlue = this.updateBlue.bind(this)



      }


    /*updateRed= () => {
            const {red} =this.state;
            const colorbox= document.getElementById("colorbox");
            colorbox.style.backgroundColor = `rgb(${red})`;

        };*/
    

    /*updateGreen= () => {
        const colorbox= document.getElementById("colorbox");
        colorbox.style.backgroundColor = `rgb(${this.green})`

    };

    updateBlue= () => {
        const colorbox= document.getElementById("colorbox");
        colorbox.style.backgroundColor = `rgb(${this.blue})`

    };
    */

    handleChange= (color)=> (event,value) => {
        this.setState({[color]:value})
    }
    
  

 

  

      
    
    render() {
        

        const {red, green, blue, opacity, radius, zoom, rotationAngle } = this.state;

    
      return (
        
        
        
      <div className='mainbox'> 

        <div className='colorbox' 
                        style={{
                            backgroundColor: `rgb(${green},${red},${blue},${opacity})`,
                            borderRadius:  `${radius}%`,
                            scale: `${zoom}%`,
                            transform: `rotate(${rotationAngle}deg)`,
                        }} >
        </div>

        <div className='sliderbox' >
            
                <p>Rojo</p>
                <Slider
                    
                    name='red'
                    value={red} 
                    onChange={this.handleChange('red')}
                    size="Medium"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={0} max={255} 
            
        
                />

                    <p>Verde</p>
                    <Slider 
                    name='green'
                    value={green} 
                    onChange={this.handleChange('green')}
                    size="Medium"
                    aria-label="Small" 
                    valueLabelDisplay="auto"
                    min={0} max={255}
        
                    />

                    <p>Azul</p>
                    <Slider 
                    name='blue'
                    value={blue} 
                    onChange={this.handleChange('blue')}
                    size="Medium"
                    aria-label="Small" 
                    valueLabelDisplay="auto"
                    min={0} max={255} 
        
                    />
                    
                    <p>Opacidad</p>
                    <Slider 
                    name='opacity'
                    value={opacity} 
                    onChange={this.handleChange('opacity')}
                    size="Medium"
                    aria-label="Small" 
                    valueLabelDisplay="auto"
                    step={0.1}

                    min={0} max={1} 
        
                    />
                    <p>Radio</p>
                    <Slider 
                    name='radius'
                    value={radius} 
                    onChange={this.handleChange('radius')}
                    size="Medium"
                    aria-label="Small" 
                    valueLabelDisplay="auto"
                    min={0} max={50} 
        
                    />

                    <p>Zoom</p>
                    <Slider 
                    name='zoom'
                    value={zoom} 
                    onChange={this.handleChange('zoom')}
                    size="Medium"
                    aria-label="Small" 
                    valueLabelDisplay="auto"
                    min={0} max={100} 
        
                    />

                    <p>Rotacion</p>
                    <Slider 
                    name='rotationAngle'
                    value={rotationAngle} 
                    onChange={this.handleChange('rotationAngle')}
                    size="Medium"
                    aria-label="Small" 
                    valueLabelDisplay="auto"
                    min={0} max={360} 
        
                    />
                
                
                
        
                </div>

        </div> 
        
      )
    }
}
