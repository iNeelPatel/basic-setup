import Parse from "parse";

export const checkRole = (role, user) => {
  const adminRoleQuery = new Parse.Query(Parse.Role);
  adminRoleQuery.equalTo("name", role);
  adminRoleQuery.equalTo("users", user);
  return adminRoleQuery.first();
};

export const getRole = role => {
  const adminRoleQuery = new Parse.Query(Parse.Role);
  adminRoleQuery.equalTo("name", role);
  return adminRoleQuery.first();
};

export const getRoles = user => {
  const roleQuery = new Parse.Query(Parse.Role);
  roleQuery.equalTo("users", user);
  return roleQuery.find();
};

export const getAdminUsers = () => {
  const roleQuery = new Parse.Query(Parse.Role);
  roleQuery.equalTo("name", "admin");
  return roleQuery.first();
};
