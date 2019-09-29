export default {
  uid(state) {
    if (state.User.info) {
      return state.User.info.account.id;
    }
    return null;
  },
};
