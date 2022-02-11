import React from "react";
 
const Footer = () => {
  return (
    
      <div className="footer" >
        <div>
          <h3>Contactanos</h3>
          <p>Mail: mailgenerico@gmail.com</p>
          <p>Telefono: 122112342561221</p>
          <p>Disponibilidad: Lun a Vie de 9 a 13hs, 14 a 18hs</p>
        </div>
        <div>
          <h3>Redes Sociales</h3>
          <ul>
          <li>
          <a href="https://www.behance.net/ivanaesersky">Behance</a>
          </li>
          <li>
          <a href="https://www.instagram.com/ivesersky/">Instagram</a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/ivana-esersky/">Linkedin</a>
        </li>
          </ul>
        </div>
        <div>
        <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483360892!2d-58.503338345159364!3d-34.61580373617577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1644611059562!5m2!1ses-419!2sar"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="iframe"
           
          ></iframe>
           
        </div>
      </div>
    
  );
};
export default Footer;
