import { getRoles } from "./services";

export default {
  namespace: "user",
  state: {
    roles: []
  },
  reducers: {
    addRoles(state, { payload }) {
      return {
        ...state,
        roles: payload.roles.map(role => role.get("name"))
      };
    }
  },
  effects: {
    *getRoles({ payload }, { call, put }) {
      try {
        const roles = yield call(getRoles, payload.user);
        yield put({ type: "addRoles", payload: { roles } });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
