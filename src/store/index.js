import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;

// {
//   course: { modules: [], activeLesson: {}, activeModule: {} },
//   user: { name: '', avatar: '' }
// }