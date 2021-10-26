import React from "react";
import './header.css'
interface HeaderProps {
    
}
 
interface HeaderState {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( <div className="navbar">
            <h3 className="pocetna">Početna</h3>
            <div className="dropdown">
            <h3 className="np-dropdown">Nacionalni Parkovi</h3>
            <div className="dropdown-menu">
            <h3 className="np-item">NP Brijuni</h3>
            <h3 className="np-item">NP Krka</h3>
            <h3 className="np-item">NP Paklenica</h3>
            <h3 className="np-item">NP Plitvička jezera</h3>
            <h3 className="np-item">NP Mljet</h3>
            <h3 className="np-item">NP Risnjak</h3>
            <h3 className="np-item">NP Sjeverni Velebit</h3>
            </div>
            </div>
            <h3 className="komentari ">Komentari</h3>
        </div> );
    }
}
 
export default Header;