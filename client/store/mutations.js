import { ADD_ARTICLE } from './constants';

export default {
    [ADD_ARTICLE] (state, payload) {
        state.news.push(payload);
    }
}