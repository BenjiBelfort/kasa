import { Link } from 'react-router-dom';
import '../styles/error.scss'

const Erreur = () => {
  return (
    <section className='error-container'>
      <h2 className='main-404'>404</h2>
      <p className='p-404'>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link className='link-404' to="/">Retourner sur la page d’accueil</Link>
    </section>
  )
}

export default Erreur;