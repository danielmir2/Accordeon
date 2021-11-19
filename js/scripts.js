window.onload = () => {
    // On récupère toutes les balises details
    let details = document.querySelectorAll("details");

    for(let detail of details){
        // On écoute l'évènement "mouseover"
        detail.addEventListener("mouseover", function(){
            // On ajoute l'attribut "open" au "detail" survolé
            this.setAttribute("open", "");
        });
        // On écoute l'évènement "mouseout"
        detail.addEventListener("mouseout", function(){
            // On retire l'attribut "open" au "detail" plus survolé
            this.removeAttribute("open");
        });
        // On écoute l'évènement "click"
        detail.addEventListener("click", function(e){
            // On boucle sur tous les éléments details
            for(let detail2 of details){
                // On vérifie que detail2 est différent de this (le detail cliqué)
                if(this !== detail2){
                    detail2.removeAttribute("open");
                }
            }
        });
    }
}