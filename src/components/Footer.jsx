import logo from '../assets/logo-footer.png'
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="logo Kasa" /> 
        <p>&#169; 2024 Kasa. Tous droits réservés</p>
    </footer>
  )
}

export default Footer;