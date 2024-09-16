import { Link } from 'react-router-dom';
import '../styles/error.scss'

const Erreur = () => {
  return (
    <section>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  )
}

export default Erreur;