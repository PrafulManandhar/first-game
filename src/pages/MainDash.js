import React from 'react';
import OuterImg from '../assets/background_img/outer.png'
import MonkeyImg from '../assets/background_img/monkey.png'
import {WoodBlock} from '../assets/game_blocks/blocks'


function MainDash(props) {

    const doSomething =() =>{
        alert('oee kali kawwaa')
    }

    const woodColection=()=>{
        let woodElement = []
        for (let i=0; i<5;i++){
            woodElement.push(<span className='wood' onClick={()=>doSomething()}><WoodBlock/></span>)
        }
        return woodElement
    }
    return (
        <div className='outer-part'>
            <img src={OuterImg}></img>
            <div className='monkey-svg'>
                <img src={MonkeyImg}/>
            </div>
            <div className='brick-items'>
                <div classname='row-item'>
                {woodColection()}

                </div>
                <div classname='row-item'>
                {woodColection()}

                </div>
                <div classname='row-item'>
                {woodColection()}

                </div>
                <div classname='row-item'>
                {woodColection()}

                </div>
                <div classname='row-item'>
                {woodColection()}

                </div>
                
                   {/* <WoodBlock/>
                   <br/>
                   <WoodBlock/> */}
            </div>
        </div>
    );
}

export default MainDash;