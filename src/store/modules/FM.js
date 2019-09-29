import {
  getPersonalFM, getSongUrl, like, getFavoriteSongIds,
} from '../../api/music';

const states = {
  /** 原始数据 */
  FMOriginTracks: [],
  /** 加工后数据 */
  FMTracks: [],
  favoriteSongIds: [],

};

const mutations = {
  SET_FM_ORIGIN_TRACKS(state, tracks) {
    state.FMOriginTracks = tracks;
  },
  SET_FM_TRACKS(state, tracks) {
    state.FMTracks = tracks;
  },
  SET_LIKE(state, songId) {
    state.FMTracks.forEach((track) => {
      if (track.id === songId) {
        track.favorited = true;
        state.favoriteSongIds.push(songId);
      }
    });
  },
  SET_FAVORITE_SONGS(state, ids) {
    state.favoriteSongIds = ids;
  },
};

const actions = {
  /** 获取私人fm信息 */
  async setFM({ dispatch, state, commit }) {
    await dispatch('setFavoriteSongs');
    const response = await getPersonalFM();
    commit('SET_FM_ORIGIN_TRACKS', response.data);
    const promistTracks = state.FMOriginTracks.map(async (oTracks) => {
      const { name } = oTracks;
      const artist = oTracks.artists[0].name;
      const cover = oTracks.album.picUrl;
      const { id } = oTracks;
      const source = await getSongUrl(id);
      const url = '';
      const favorited = id in state.favoriteSongIds;
      return {
        name,
        artist,
        cover,
        source,
        url,
        id,
        favorited,
      };
    });
    const FMTracks = await Promise.all(promistTracks);
    commit('SET_FM_TRACKS', FMTracks);
  },
  async like({ commit }, songId) {
    await like(songId);
    commit('SET_LIKE', songId);
  },
  async setFavoriteSongs({ commit, rootGetters }) {
    const { uid } = rootGetters;
    const ids = await getFavoriteSongIds(uid);
    commit('SET_FAVORITE_SONGS', ids);
  },
};

const getters = {
  tracks(state) {
    return state.FMTracks;
  },
};


export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state: states,
};
