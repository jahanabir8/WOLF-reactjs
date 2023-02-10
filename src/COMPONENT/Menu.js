import React from "react";
import { Container } from "react-bootstrap";
import "./Menu.css"

import {AiOutlineMenu} from "react-icons/ai"
import {FaWolfPackBattalion} from "react-icons/fa"

export default function Menu(){

    const menu = [
        {
            list : "Home"
        },
        {
            list : "About"
        },
        {
            list : "Contact"
        },
        {
            list : "More"
        }
    ]

    return <div className="menu__section">
        <Container>
            <div className="menu__inner d-flex justify-content-between align-items-center">
                <div className="logo">
                    <a href="#!"><FaWolfPackBattalion /></a>
                </div>
                <div className="menus">
                    <ul className="d-flex align-items-center">
                        {menu.map((item, index) =>{
                            const {list} = item
                            return(
                                <li><a href="#!">{list}</a></li>
                            )                            
                        })}
                        <li className="menuBar"><a href="#!"><AiOutlineMenu /></a></li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
}