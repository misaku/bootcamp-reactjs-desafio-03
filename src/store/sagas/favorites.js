import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `users/${action.payload}`);
    const isDuplicated = yield select(state => state.favorites.data.find(f => f.id === data.id));
    if (isDuplicated) {
      yield put(Creators.addFavoriteFailure('Usuário já registrado'));
      toast.warn('Usuário já registrado');
    } else {
      const repositoryData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        url: data.html_url,
      };
      yield put(Creators.addFavoriteSuccess(repositoryData));
      toast.success('Usuário adicionado com sucesso');
    }
  } catch (e) {
    toast.error('erro ao adicionar Usuário');
    yield put(Creators.addFavoriteFailure('erro ao adicionar Usuário'));
  }
}
