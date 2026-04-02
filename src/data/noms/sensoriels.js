const sensoriels = {
  vue: [
    { mot: 'lueur', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'vue', definition: 'Lumière faible et vacillante, clarté douce et incertaine.', exemple: 'Une lueur tremblante filtrait sous la porte.', synonymes_soutenus: ['clarté', 'reflet', 'phosphorescence', 'nimbe'], antonymes: ['obscurité', 'ténèbres', 'noirceur'] },
    { mot: 'pénombre', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'vue', definition: 'Demi-obscurité, zone entre la lumière et l\'ombre complète.', exemple: 'Il se tenait dans la pénombre, à peine visible.', synonymes_soutenus: ['demi-jour', 'clair-obscur', 'obscurité partielle', 'demi-teinte'], antonymes: ['pleine lumière', 'clarté', 'éclat'] },
    { mot: 'miroitement', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'vue', definition: 'Reflet changeant et scintillant produit par une surface lumineuse.', exemple: 'Le miroitement de l\'eau hypnotisait les promeneurs.', synonymes_soutenus: ['scintillement', 'chatoiement', 'irisation', 'iridescence'], antonymes: ['mat', 'terne', 'opacité'] },
    { mot: 'éclat', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'vue', definition: 'Lumière vive et intense qui éblouit ou impressionne le regard.', exemple: 'L\'éclat des diamants illuminait la vitrine.', synonymes_soutenus: ['resplendissement', 'fulgurance', 'éblouissement', 'rayonnement'], antonymes: ['ternissement', 'pâleur', 'opacité'] },
  ],
  ouie: [
    { mot: 'clameur', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'ouie', definition: 'Bruit confus de voix nombreuses exprimant une émotion collective.', exemple: 'Une clameur s\'éleva de la foule à l\'annonce de la victoire.', synonymes_soutenus: ['vocifération', 'tumulte', 'vacarme', 'fracas'], antonymes: ['silence', 'quiétude', 'calme'] },
    { mot: 'murmure', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'ouie', definition: 'Son doux et continu, paroles dites à voix très basse.', exemple: 'Le murmure du ruisseau accompagnait leur promenade.', synonymes_soutenus: ['susurrement', 'chuchotement', 'bruissement', 'frémissement'], antonymes: ['cri', 'fracas', 'vacarme'] },
    { mot: 'fracas', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'ouie', definition: 'Bruit violent et soudain causé par une chute ou une collision.', exemple: 'Le fracas du tonnerre réveilla toute la maisonnée.', synonymes_soutenus: ['vacarme', 'tumulte', 'déflagration', 'retentissement'], antonymes: ['silence', 'murmure', 'quiétude'] },
    { mot: 'résonance', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'ouie', definition: 'Prolongement d\'un son par réflexion, vibration durable dans l\'espace.', exemple: 'La résonance de la cloche se prolongea longtemps.', synonymes_soutenus: ['écho', 'vibration', 'retentissement', 'réverbération'], antonymes: ['silence', 'absorption', 'extinction'] },
  ],
  odorat: [
    { mot: 'effluves', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'odorat', definition: 'Émanations odorantes légères qui se dégagent d\'un corps ou d\'un lieu.', exemple: 'Les effluves du jasmin envahissaient le jardin au crépuscule.', synonymes_soutenus: ['émanation', 'exhalaison', 'fragrance', 'arôme'], antonymes: ['inodore', 'neutralité olfactive'] },
    { mot: 'fragrance', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'odorat', definition: 'Odeur douce et agréable, parfum subtil et délicat.', exemple: 'Une fragrance délicate de rose flottait dans la pièce.', synonymes_soutenus: ['arôme', 'senteur', 'bouquet', 'suavité'], antonymes: ['fétidité', 'puanteur', 'infection'] },
    { mot: 'pestilence', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'odorat', definition: 'Odeur infecte et nauséabonde évoquant la putréfaction.', exemple: 'Une pestilence insupportable s\'échappait des marais.', synonymes_soutenus: ['fétidité', 'infection', 'méphitisme', 'puanteur'], antonymes: ['fragrance', 'parfum', 'suavité'] },
  ],
  gout: [
    { mot: 'âpreté', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'gout', definition: 'Saveur rude et astringente qui racle le palais désagréablement.', exemple: 'L\'âpreté du vin jeune surprit les convives.', synonymes_soutenus: ['astringence', 'rudesse', 'acidité', 'acerbité'], antonymes: ['douceur', 'moelleux', 'suavité'] },
    { mot: 'sapidité', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'gout', definition: 'Qualité de ce qui a une saveur prononcée et agréable.', exemple: 'La sapidité de ce plat révélait le talent du cuisinier.', synonymes_soutenus: ['saveur', 'goût', 'arôme', 'délectation'], antonymes: ['fadeur', 'insipidité', 'neutralité'] },
  ],
  toucher: [
    { mot: 'rugosité', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'toucher', definition: 'Caractère de ce qui est rugueux, surface rude au toucher.', exemple: 'La rugosité de l\'écorce contrastait avec la douceur des feuilles.', synonymes_soutenus: ['aspérité', 'rudesse', 'granulation', 'âpreté'], antonymes: ['douceur', 'lissé', 'velouté'] },
    { mot: 'soyeux', classe: 'noms', categorie: 'sensoriels', sous_categorie: 'toucher', definition: 'Douceur légère et fluide comme la soie au toucher.', exemple: 'Le soyeux de ce tissu ravissait les clients.', synonymes_soutenus: ['velouté', 'douceur', 'onctuosité', 'fluidité'], antonymes: ['rugosité', 'rudesse', 'aspérité'] },
  ],
}

export default sensoriels