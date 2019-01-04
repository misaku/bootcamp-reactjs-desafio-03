import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Modal as Md } from './styles';
import { Creators as favoritesActions } from '../../store/ducks/favorites';

class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
  };

  state={
    user: '',
  };

  hendlerAdd = async (e) => {
    e.preventDefault();
    const { addFavoriteRequest } = this.props;
    const { user } = this.state;
    await addFavoriteRequest(user);
  };

  render() {
    const { closeModal } = this.props;
    const { user } = this.state;
    return (
      <Md>
        <div className="content">
          <div className="modal">
            <h1>Adicionar novo usuário</h1>
            <form onSubmit={this.hendlerAdd}>
              <input type="text" placeholder="username do Github" value={user} onChange={e => this.setState({ user: e.target.value })} />
              <div className="group">
                <button type="button" className="cancel" onClick={closeModal}>Cancelar</button>
                <button type="submit" className="save">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </Md>
    );
  }
}

const mapStateToProps = () => ({

});
const mapDispatchToProps = dispatch => bindActionCreators(favoritesActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
