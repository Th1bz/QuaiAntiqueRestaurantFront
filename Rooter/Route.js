export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS) {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.authorize = authorize;
    this.pathJS = pathJS;
  }
}

/*
[] -> Tout le monde peux y accéder
 ["disconnected"] -> Réserver aux utilisateurs déconnecter
 ["client"] -> Réserver aux utilisateurs avec le rôle client
 ["admin"] -> Réserver aux utilisateurs avec le rôle admin
 ["admin, client"] -> Réserver aux utilisateurs avec le rôle client OU admin
*/
