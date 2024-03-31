$(document).ready(function() {
    // Cacher tous les sous-menus au chargement de la page
    $('.sub-menu').hide();

    // Ouvrir ou fermer un sous-menu lorsqu'on clique sur un lien
    $('.menu > ul > li > a').click(function(event) {
        event.stopPropagation(); // Empêche la propagation de l'événement de clic
        $(this).siblings('.sub-menu').toggle();
    });

    // Ouvrir tous les sous-menus lorsqu'on clique sur le bouton "Ouvrir Tout"
    $('#open-all').click(function() {
        $('.sub-menu').show();
    });

    // Fermer tous les sous-menus lorsqu'on clique sur le bouton "Fermer Tout"
    $('#close-all').click(function() {
        $('.sub-menu').hide();
    });

    // Fonction de recherche mise à jour à chaque frappe dans la zone de recherche
    $('.search-container input[type="text"]').on('input', function() {
        var searchTerm = $(this).val().toLowerCase(); // Récupère le texte de la barre de recherche et le met en minuscules
        if (searchTerm === '') { // Vérifie si la zone de recherche est vide
            $('.sub-menu').hide(); // Si c'est le cas, cache tous les sous-menus
        } else {
            $('.menu .button').each(function() {
                var text = $(this).text().toLowerCase(); // Récupère le texte de chaque élément .button et le met en minuscules
                if (text.includes(searchTerm)) { // Vérifie si le texte de l'élément .button contient le terme de recherche
                    $(this).parent().show(); // Affiche l'élément parent de l'élément .button correspondant
                    $(this).parents('.sub-menu').show(); // Affiche tous les sous-menus parents de l'élément .button correspondant
                } else {
                    $(this).parent().hide(); // Sinon, cache l'élément parent de l'élément .button
                }
            });
        }
    });
});
