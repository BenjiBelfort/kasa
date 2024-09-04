import { Link } from 'react-router-dom';

const Erreur = () => {
  return (
    <div>
        <h2>404</h2>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Erreur;
