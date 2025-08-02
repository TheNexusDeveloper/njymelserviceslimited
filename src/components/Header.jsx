import React, {useState, useEffect} from 'react'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import NavbarLogo from '../assets/Njymel Logo-03-edit.png'

function Header() {
     const [navbarBg, setNavbarBg] = useState('transparent');
    const [linkColor, setLinkColor] = useState('dark');
      const [margin, setMargin] = useState('20px');
    const [logoWidth, setLogoWidth] = useState('200px');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollThreshold = 20; // Adjust the threshold as needed

        if (scrollY > scrollThreshold) {
        setNavbarBg('#00aeef');
        setLogoWidth('150px');
        setLinkColor('light');
        // setLinkColor('dark');
        setMargin('0px');

        } else {
        setNavbarBg('transparent');
        setLogoWidth('200px');
        setLinkColor('dark');
        // setLinkColor('dark');
        setMargin('20px');
        
        }

    };

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
        return(
            window.addEventListener('scroll', handleScroll)
        )
    })
  return (
    <div className='header'>
        <Navbar collapseOnSelect expand="lg" className="" fixed='top' variant={linkColor}  style={{backgroundColor: navbarBg}} >
            <Container>
                <Navbar.Brand href="#home"><img src={NavbarLogo} alt='Njymel Services Limited' width={logoWidth}/></Navbar.Brand>
                 <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas id="offcanvasNavbar-expand" placement="end"  aria-labelledby='offcanvasNavbar-expand' className="navbar-black" variant='dark'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                            <img src={NavbarLogo} alt='Njymel Services Limited' width='250px'/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="px-3 me-auto">
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Services">Services</Nav.Link>
                            <Nav.Link href="#Skills">Pricing</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>

                         <Nav className='px-3'>
                            <Nav.Link href="tel:+2348055077472" target="_blank" rel="noopener"><i class="bi bi-telephone-fill"></i></Nav.Link>
                            <Nav.Link href="https://www.whatsapp.com" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i></Nav.Link>
                            <Nav.Link href="https://twitter.com/iamkosy11" target="_blank" rel="noopener"><i class="bi bi-facebook"></i></Nav.Link>
                            <Nav.Link href="https://www.instagram.com/njymelservicesltd/" target="_blank" rel="noopener"><i class="bi bi-instagram"></i></Nav.Link>
                            
                        </Nav>
                    </Offcanvas.Body>
                    
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header