import PropTypes from 'prop-types';
import './host.scss'



const Host = ({ host }) => {

  const [lastName, firstName] = host.name.split(' ');

  return (
    <div className="host">
      <p className="host-name">
        {lastName}<br />
        {firstName}
      </p>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Host;
