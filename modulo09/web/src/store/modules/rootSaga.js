import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas'; // Puxando as informações do usuário para serem armazenadas

export default function* rootSaga() {
  return yield all([auth, user]);
}
