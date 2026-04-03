const emotions = {
  joie: [
    { mot: 'exulter', classe: 'verbes', categorie: 'emotions', sous_categorie: 'joie', definition: 'Éprouver et manifester une joie intense et débordante.', exemple: 'Les supporters exultaient dans les rues après la victoire.', synonymes_soutenus: ['jubiler', 'se réjouir', 'triompher', 'se glorifier'], antonymes: ['se lamenter', 's\'affliger', 'pleurer'] },
    { mot: 'jubiler', classe: 'verbes', categorie: 'emotions', sous_categorie: 'joie', definition: 'Éprouver une joie vive et expansive, souvent avec satisfaction.', exemple: 'Il jubilait intérieurement à l\'annonce des résultats.', synonymes_soutenus: ['exulter', 'se réjouir', 'triompher', 'rayonner'], antonymes: ['se lamenter', 'pleurer', 's\'affliger'] },
    { mot: 'se délecter', classe: 'verbes', categorie: 'emotions', sous_categorie: 'joie', definition: 'Savourer avec un plaisir intense et raffiné.', exemple: 'Il se délectait de chaque page de ce roman.', synonymes_soutenus: ['savourer', 'apprécier', 'jouir', 'se régaler'], antonymes: ['se dégoûter', 'souffrir', 'endurer'] },
  ],
  colere: [
    { mot: 'fulminer', classe: 'verbes', categorie: 'emotions', sous_categorie: 'colere', definition: 'Éclater en reproches violents, tonner de colère.', exemple: 'Il fulminait contre l\'injustice de cette décision arbitraire.', synonymes_soutenus: ['vitupérer', 'tempêter', 'tonner', 'pester'], antonymes: ['se calmer', 's\'apaiser', 'accepter'] },
    { mot: 'vitupérer', classe: 'verbes', categorie: 'emotions', sous_categorie: 'colere', definition: 'Blâmer vivement avec des paroles violentes et indignées.', exemple: 'Il vitupérait contre la corruption des élites.', synonymes_soutenus: ['invectiver', 'fulminer', 'tempêter', 'tonner'], antonymes: ['louer', 'féliciter', 'approuver'] },
    { mot: 'se courroucer', classe: 'verbes', categorie: 'emotions', sous_categorie: 'colere', definition: 'Entrer dans un état de colère noble et indignée.', exemple: 'Le roi se courrouca à l\'audace de cette demande.', synonymes_soutenus: ['s\'emporter', 's\'indigner', 'se fâcher', 'fulminer'], antonymes: ['se calmer', 's\'apaiser', 'pardonner'] },
  ],
  tristesse: [
    { mot: 'languir', classe: 'verbes', categorie: 'emotions', sous_categorie: 'tristesse', definition: 'S\'étioler doucement dans l\'attente ou la tristesse.', exemple: 'Elle languissait loin des siens pendant ces longues années.', synonymes_soutenus: ['s\'étioler', 'dépérir', 'se consumer', 'se morfondre'], antonymes: ['s\'épanouir', 'prospérer', 'rayonner'] },
    { mot: 'se morfondre', classe: 'verbes', categorie: 'emotions', sous_categorie: 'tristesse', definition: 'S\'ennuyer profondément en attendant quelque chose qui tarde.', exemple: 'Il se morfondait dans cette ville sans âme depuis des mois.', synonymes_soutenus: ['languir', 'se consumer', 'se ronger', 'se désespérer'], antonymes: ['s\'épanouir', 'prospérer', 'se réjouir'] },
    { mot: 'se lamenter', classe: 'verbes', categorie: 'emotions', sous_categorie: 'tristesse', definition: 'Exprimer sa douleur avec des plaintes répétées et douloureuses.', exemple: 'Il se lamentait sur son sort sans chercher à y remédier.', synonymes_soutenus: ['se plaindre', 'gémir', 'pleurer', 'se désoler'], antonymes: ['se réjouir', 'accepter', 'se résigner sereinement'] },
    { mot: 'dépérir', classe: 'verbes', categorie: 'emotions', sous_categorie: 'tristesse', definition: 'Perdre progressivement ses forces et sa vitalité par le chagrin.', exemple: 'Sans affection, il dépérissait à vue d\'œil.', synonymes_soutenus: ['languir', 's\'étioler', 's\'atrophier', 'se consumer'], antonymes: ['prospérer', 's\'épanouir', 'fleurir'] },
  ],
  degout: [
    { mot: 'répugner', classe: 'verbes', categorie: 'emotions', sous_categorie: 'degout', definition: 'Inspirer de la répugnance, causer une aversion profonde.', exemple: 'Cette hypocrisie lui répugnait profondément.', synonymes_soutenus: ['dégoûter', 'écœurer', 'rebuter', 'horrifier'], antonymes: ['attirer', 'séduire', 'fasciner'] },
    { mot: 'abhorrer', classe: 'verbes', categorie: 'emotions', sous_categorie: 'degout', definition: 'Avoir en horreur absolue, détester avec une intensité viscérale.', exemple: 'Il abhorrait la violence sous toutes ses formes.', synonymes_soutenus: ['détester', 'exécrer', 'avoir en horreur', 'hair'], antonymes: ['chérir', 'adorer', 'aimer'] },
  ],
  surprise: [
    { mot: 'stupéfier', classe: 'verbes', categorie: 'emotions', sous_categorie: 'surprise', definition: 'Frapper de stupeur, provoquer un étonnement paralysant.', exemple: 'Cette nouvelle les stupéfia tous sans exception.', synonymes_soutenus: ['sidérer', 'abasourdir', 'méduser', 'ébahir'], antonymes: ['laisser indifférent', 'ne pas surprendre'] },
    { mot: 'décontenancer', classe: 'verbes', categorie: 'emotions', sous_categorie: 'surprise', definition: 'Faire perdre contenance, troubler par quelque chose d\'inattendu.', exemple: 'Sa réponse inattendue décontenança l\'assemblée entière.', synonymes_soutenus: ['déstabiliser', 'désarçonner', 'déconcerter', 'troubler'], antonymes: ['rassurer', 'conforter', 'stabiliser'] },
    { mot: 'déconcerter', classe: 'verbes', categorie: 'emotions', sous_categorie: 'surprise', definition: 'Troubler en déjouant les attentes, mettre dans l\'embarras.', exemple: 'Son calme déconcerta ses adversaires qui attendaient une réaction.', synonymes_soutenus: ['dérouter', 'désarçonner', 'déstabiliser', 'interloquer'], antonymes: ['rassurer', 'conforter', 'mettre à l\'aise'] },
  ],
  honte: [
    { mot: 'se recroqueviller', classe: 'verbes', categorie: 'emotions', sous_categorie: 'honte', definition: 'Se replier sur soi-même sous l\'effet de la honte ou de la gêne.', exemple: 'Sous les critiques, elle se recroquevillait de honte.', synonymes_soutenus: ['se replier', 'se terrer', 'se blottir', 'se tapir'], antonymes: ['s\'affirmer', 's\'épanouir', 'se redresser'] },
    { mot: 'rougir', classe: 'verbes', categorie: 'emotions', sous_categorie: 'honte', definition: 'Avoir honte, ressentir de la confusion au point de changer de couleur.', exemple: 'Il rougit en comprenant l\'ampleur de sa maladresse.', synonymes_soutenus: ['avoir honte', 'se confondre', 's\'humilier', 'baisser les yeux'], antonymes: ['se vanter', 's\'enorgueillir', 'afficher'] },
  ],
}

export default emotions