import { useState, useEffect } from "react";
import { NavBar, Nav, Container } from "react-bootstrap";
import logo from "../assets/sullyscreative.png";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return ()
}