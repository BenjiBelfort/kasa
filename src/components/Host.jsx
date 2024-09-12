import PropTypes from 'prop-types';

const Host = ({ host }) => {
  return (
    <div className="host">
      <img src={host.picture} alt={host.name} className="host-picture" />
      <p>{host.name}</p>
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
