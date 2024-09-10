const galerieImage = document.getElementById("allImages");

let titre = "titre de l'image";
let imgSource = "../images/mediterranean-cuisine.jpg";


let monImage = getImage(titre, imgSource);


galerieImage.innerHTML = monImage;


function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return   ` <div class="col p-3">
                    <div class="image-card text-white">
                        <img src="${urlImage}" alt="${titre}" class="rounded w-100"/>
                        <p class="titre-image">${titre}</p>
                        <div class="action-class-buttons" data-show="admin">
                            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
                                data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
                                data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>`;
}