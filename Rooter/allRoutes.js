import Route from ".Route.js";

//Définir ici vos Routes
export const allRoutes = [
  new Route("/", "Acceuil", "/pages/home.html"),
  new Route("/Galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
