import { ADD_ARTICLE } from './constants';
import { REMOVE_ARTICLE } from './constants';

export default {
    [ADD_ARTICLE] (state, payload) {
        state.news.push(payload);
    },
    [REMOVE_ARTICLE] (state, payload) {
        const index = payload;
        state.news.splice(index, 1);
    }
}