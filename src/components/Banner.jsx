import { useLocation } from "react-router-dom";
import homeImage from '../assets/home-image.jpg'
import aboutImage from '../assets/about-image.jpg'

const bannerConfig = {
    '/': {
        src: homeImage,
        alt: 'Vue sue la côte',
        text: 'Chez vous, partout et ailleurs'
    },
    '/a-propos': {
        src: aboutImage,
        alt: 'Vue sur la montage',
        text: ''
    }
};

const Banner = () => {
    const location = useLocation();

    const { src, alt, text } = bannerConfig[location.pathname] || bannerConfig['/'];

  return (
    <div className={`banner ${location.pathname === '/' ? 'home-banner' : 'about-banner'}`}>
        <img src={src} alt={alt} />
        {text && <h2>{text}</h2>}
    </div>
  )
}

export default Banner;
