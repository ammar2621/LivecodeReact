import createStore from "unistore";

export let store = createStore({
  username: "",
  email: "academy@alphatech.id",
  avatar: "",
  isLogin: false
});

export const actions = store => ({
  setUserName(state, value) {
    return { nama: value };
  },
  setEmail(state, value) {
    return { email: value };
  },
  setAvatar(state, value) {
    return { avatar: value };
  },
  setIsLogin(state) {
    return { isLogin: true };
  },
  signOut(state) {
    return { isLogin: false };
  }
});
