import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon4 from '../assets/img/nav-icon4.svg';
import closeicon from '../assets/img/closeicon.svg';
import hamburger from '../assets/img/hamburger.svg';
import { BrowserRouter as Router} from "react-router-dom";
import "./์NavBar.css"

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
    setExpanded(false);
  }

  return (
    <Router>
      {/* <Navbar expand="md" className={scrolled ? "scrolled" : ""}> */}
      <Navbar expand="md" className={`${scrolled ? "scrolled" : ""} ${expanded ? "expanded" : ""}`} expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><img src={expanded ? closeicon : hamburger} alt="toggle icon" /></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skill</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
            </Nav>

            
              <div className="social-icon">
                <a href="https://github.com/PiyanuchTH" target="blank"><img src={navIcon4} alt="github" /></a>
              </div>
              
           
              <span className="navbar-text">
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                <button className="vvd"><span>Let’s Connect</span></button>
              </Nav.Link>
            </span>
         

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
