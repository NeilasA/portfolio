import React, {useState} from 'react';
import './slider.scss';
import ImgForSlider from './ImgForSlider';
import i1 from '../../pics/FoodDeliveryAppPlaceholder.jpg';
import i2 from '../../pics/New Project (2).png';
import i3 from '../../pics/New Project (3).png';


function Slider() {

        const [x, setX] = useState(0);
        let sliderArr = [<ImgForSlider src={i1} />,<ImgForSlider src={i2} />,<ImgForSlider src={i3} />];       
        const goLeft = () => {
            console.log(x)
            x === 0 ? setX(-200*(sliderArr.length-1)) : setX(x + 200)
        };
        const goRight = () => {
            console.log(x)
           x === -200*(sliderArr.length-1) ? setX(0) : setX(x - 200)
        };

    return(
        <div className="slider" id="/projects">
            {sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slide" style = {{transform:`translateX(${x}%)`}}>
                     {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
            <i className="fas fa-chevron-right"></i> 
            </button>
        </div>
    )
}

export default Slider;