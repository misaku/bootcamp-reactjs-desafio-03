import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { SidebarDiv } from './styles';
import { Creators as favoritesActions } from '../../store/ducks/favorites';

const Sidebar = ({ users, rmFavorite }) => (
  <SidebarDiv>
    <ul>
      {users && users.map(us => (
        <li key={us.id}>
          <div>
            <img src={us.avatar} alt={us.login} />
          </div>
          <a href={us.url} target="_blank" rel="noopener noreferrer">
            <p>
              <strong>
                {us.name}
              </strong>
              {us.login}
            </p>
          </a>
          <button type="button" onClick={() => (rmFavorite(us.id))}><i className="fa fa-times-circle fa-lg" /></button>
          <i className="fa fa-chevron-right" />
        </li>
      ))}


    </ul>
  </SidebarDiv>
);
Sidebar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })).isRequired,
  rmFavorite: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  users: state.favorites.data,
});
const mapDispatchToProps = dispatch => bindActionCreators(favoritesActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
