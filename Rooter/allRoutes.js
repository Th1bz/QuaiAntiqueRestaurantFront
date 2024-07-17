import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
  new Route("/menu", "Menu", "/pages/menu.html"),
  new Route("/signin", "Connexion", "/pages/signin.html"),
  new Route("/signup", "Inscription", "/pages/signup.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
