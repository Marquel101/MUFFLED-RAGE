import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Layout from '../../components/layouts/Layout'
import './Splash.css'

export default function Splash({user}) {
    return (
        <Layout user= {user}>
        <div>
            <div className="intro">
            <h2> A SAFE SPACE TO BLOW OFF SOME STEAM FROM YOUR EVERYDAY STRUGGLES OF LIFE </h2>
            </div>
            <div className="splash__boxes">
                <div className="box__one">
                    <h2 className="point__one">WORK GETTING THE BEST OF YOU?</h2>
                    <img src="https://i.imgur.com/2oBqftB.jpg" className="point__pics"/>
                </div>
               
                <div className="box__two">
                    <h2 className="point__two">FAMILY ANNOYING YOU IN YOUR FREE TIME?</h2>
                    <img src="https://i.imgur.com/KdPBvJm.jpg" className="point__pics"/>
                </div>
               
                <div className="box__three">
                    <h2 className="point__three">ANGRY THAT YOUR NEIGHBOR KEEPS TAKING YOUR SPOT?</h2>
                    <img src="https://i.imgur.com/5MZgHqV.jpg" className="point__pics"/>
                </div>
            </div>

            <div className="bottom">
                <div div className="bottom_text">
                    <div className="bttm__phrase">
                        <h2>LET US KNOW HOW YOU REALLY FEEL!</h2>
                    </div>
                    <div className="bttm__phrase2"> 
                        <h5>It’s okay, we’re anonymous... no one will ever know!</h5>
                    </div>
                </div>
                <div className="bttm__btn"> 
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>I'M MAD!</Link>
                </div>
            </div>
        </div>
        </Layout>
    )
}
