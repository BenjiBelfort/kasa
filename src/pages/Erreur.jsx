import { Link } from 'react-router-dom';
import '../styles/error.scss'

const Erreur = () => {
  return (
    <div className='error-container'>
      <div className="error-content">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  )
}

export default Erreur;