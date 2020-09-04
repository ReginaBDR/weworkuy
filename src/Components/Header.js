import React, { Component } from 'react';
import logo from '../images/logo.png';
import * as typeformEmbed from '@typeform/embed';

class Header extends Component {
    componentDidMount(){
        const popup1= typeformEmbed.makePopup(
         'https://reginaborgno013.typeform.com/to/FcXkJJ', 
 
            {
                mode: 'popup',
                autoClose: 3000,
                hideHeaders: true,
                hideFooters: true,
                onSubmit: function() {
                    alert('Enviado correctamente')
                }
            }
        )
        document.getElementById('btn-popup').addEventListener('click', function(){
            popup1.open();
        });
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="nav">
                        <a href="/"><img src={logo} alt="logo"></img></a>
                        <a href="/" className="links">instragram</a>
                        <a href="/" className="links">facebook</a>
                        <a href="#" className="buttons" id="btn-popup">publicar un trabajo</a>
                    </nav>
                    <div className="banner">
                        <h2>Encontrá tu próximo trabajo</h2>
                        <h3>Reunimos las mejores propuestas en Programación,
                        Diseño, Marketing Digital, entre muchas otras, enfocadas en el sector
                        tecnológico de Uruguay para vos.</h3>
                        <form className="subs">
                          <a href="/" type="submit" className="buttons">Suscribite</a>
                          <input type="email" name="email" placeholder="Ingresa tu Email" />
                        </form>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;