import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';
import { ToastContainer } from 'react-toastify';
import { Creators as favoritesActions } from '../../store/ducks/favorites';
import 'mapbox-gl/dist/mapbox-gl.css';
import Sidebar from '../../components/sidebar';
import { Container } from './styles';
import Modal from '../../components/modal';
import 'react-toastify/dist/ReactToastify.css';

class Main extends Component {
  static propTypes = {
    startModal: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null]).isRequired]),
      modal: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            login: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
          },
        ),
      ).isRequired,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
  };

   state = {
     viewport: {
       width: window.innerWidth,
       height: window.innerHeight,
       latitude: -23.5439948,
       longitude: -46.6065452,
       zoom: 14,
     },
   };


   componentDidMount() {
     if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.showPosition);
     window.addEventListener('resize', this.resize);
     this.resize();
   }

   componentWillUnmount() {
     window.removeEventListener('resize', this.resize);
   }

  showPosition = ({ coords }) => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
    });
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const { startModal } = this.props;
    startModal({ latitude, longitude });
  };

  render() {
    const { favorites } = this.props;
    const { viewport: viewports } = this.state;
    return (
      <Container>
        <ToastContainer />
        {favorites.modal && <Modal />}
        {favorites.data && favorites.data.length > 0 && <Sidebar />}
        <MapGL
          {...viewports}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {favorites.data.map(user => (
            <Marker
              key={user.id}
              latitude={user.geolocation.latitude}
              longitude={user.geolocation.longitude}
              captureClick
            >
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="iconImg"
                  alt={user.name}
                  src={user.avatar}
                />
              </a>
            </Marker>
          ))}

        </MapGL>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(favoritesActions, dispatch);
const mapStateToProps = state => ({
  favorites: state.favorites,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
