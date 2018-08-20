export const capitalize = str =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : str;

export const findRoute = (routes, match) => {
  let newMatch = match.substring(0, match.lastIndexOf("/") + 1);
  routes.forEach(route => {
    const findMatch = newMatch.indexOf(route);
    if (findMatch > 0) {
      newMatch = newMatch.substring(0, findMatch);
    }
  });

  return newMatch;
};
