const richification = [
  {
    mot: 'triste',
    synonymes_soutenus: [
      { mot: 'mélancolique', classe: 'adjectif', definition: 'Empreint d\'une tristesse douce et rêveuse, d\'une nostalgie diffuse.', exemple: 'Un regard mélancolique se posa sur les dernières feuilles d\'automne.' },
      { mot: 'dolent', classe: 'adjectif', definition: 'Qui exprime une souffrance morale avec une langueur plaintive et résignée.', exemple: 'Il arriva d\'un pas dolent, le visage marqué par la fatigue du deuil.' },
      { mot: 'lugubre', classe: 'adjectif', definition: 'Qui inspire un sentiment de tristesse profonde et funèbre.', exemple: 'Un silence lugubre s\'abattit sur l\'assemblée après l\'annonce.' },
      { mot: 'chagrin', classe: 'adjectif', definition: 'Qui ressent ou manifeste une peine intérieure, un abattement de l\'âme.', exemple: 'Elle restait chagrine, incapable de trouver le sommeil.' },
      { mot: 'morose', classe: 'adjectif', definition: 'D\'une humeur sombre et taciturne, qui manque d\'entrain.', exemple: 'Il traversait une période morose depuis la fin de l\'été.' },
    ],
  },
  {
    mot: 'rapide',
    synonymes_soutenus: [
      { mot: 'fulgurant', classe: 'adjectif', definition: 'Qui se produit avec une rapidité aveuglante, comme un éclair.', exemple: 'Sa progression fulgurante impressionna tous ses adversaires.' },
      { mot: 'véloce', classe: 'adjectif', definition: 'Qui se déplace ou agit avec une grande vitesse naturelle.', exemple: 'Le guépard, animal véloce entre tous, fond sur sa proie.' },
      { mot: 'alerte', classe: 'adjectif', definition: 'Vif et prompt dans ses mouvements ou ses réactions.', exemple: 'Malgré ses quatre-vingts ans, il restait alerte et espiègle.' },
    ],
  },
  {
    mot: 'parler',
    synonymes_soutenus: [
      { mot: 'proférer', classe: 'verbe', definition: 'Émettre une parole grave ou solennelle avec force.', exemple: 'Il proféra ces mots d\'une voix que nul n\'osa contredire.' },
      { mot: 'discourir', classe: 'verbe', definition: 'S\'exprimer longuement sur un sujet avec une certaine éloquence.', exemple: 'Il discourait des heures durant sur la nature du beau.' },
      { mot: 's\'exprimer', classe: 'verbe', definition: 'Manifester sa pensée par la parole avec clarté et intention.', exemple: 'Elle s\'exprimait avec une précision qui forçait le respect.' },
    ],
  },
  {
    mot: 'beau',
    synonymes_soutenus: [
      { mot: 'splendide', classe: 'adjectif', definition: 'D\'une beauté éclatante qui saisit et éblouit le regard.', exemple: 'Un coucher de soleil splendide embrasait l\'horizon.' },
      { mot: 'somptueux', classe: 'adjectif', definition: 'D\'une beauté luxueuse et fastueuse qui impressionne par son faste.', exemple: 'Un somptueux décor accueillait les invités.' },
      { mot: 'sublime', classe: 'adjectif', definition: 'D\'une beauté qui élève l\'âme et dépasse le simple agrément.', exemple: 'Une musique sublime transportait l\'auditoire.' },
    ],
  },
  {
    mot: 'peur',
    synonymes_soutenus: [
      { mot: 'effroi', classe: 'nom', definition: 'Peur soudaine et intense qui paralyse et saisit.', exemple: 'Un effroi inexplicable le saisit dans l\'obscurité.' },
      { mot: 'appréhension', classe: 'nom', definition: 'Crainte diffuse et anticipée d\'un événement redouté.', exemple: 'Une sourde appréhension l\'habitait depuis la veille.' },
      { mot: 'terreur', classe: 'nom', definition: 'Peur extrême et violente qui paralyse totalement.', exemple: 'La terreur se peignit sur son visage.' },
      { mot: 'angoisse', classe: 'nom', definition: 'Peur profonde et oppressante sans objet précis identifiable.', exemple: 'Une angoisse diffuse l\'empêchait de dormir.' },
    ],
  },
  {
    mot: 'colère',
    synonymes_soutenus: [
      { mot: 'courroux', classe: 'nom', definition: 'Colère vive et noble, indignation forte d\'une personne offensée.', exemple: 'Son courroux était visible à la rougeur de son visage.' },
      { mot: 'fureur', classe: 'nom', definition: 'Colère violente et déchaînée qui pousse aux actes extrêmes.', exemple: 'Une fureur aveugle s\'empara de lui.' },
      { mot: 'ire', classe: 'nom', definition: 'Colère vive et prompte, emportement soudain.', exemple: 'Il entra dans une ire terrible à cette nouvelle.' },
      { mot: 'véhémence', classe: 'nom', definition: 'Force impétueuse et passionnée dans l\'expression de la colère.', exemple: 'Il protesta avec véhémence contre cette injustice.' },
    ],
  },
  {
    mot: 'calme',
    synonymes_soutenus: [
      { mot: 'sérénité', classe: 'nom', definition: 'État de paix intérieure profonde et lumineuse.', exemple: 'Une sérénité absolue émanait de son visage.' },
      { mot: 'quiétude', classe: 'nom', definition: 'Tranquillité douce et paisible de l\'âme ou d\'un lieu.', exemple: 'La quiétude du soir descendait sur le village.' },
      { mot: 'placidité', classe: 'nom', definition: 'Calme naturel et tranquille qui ne se laisse pas troubler.', exemple: 'Sa placidité désarmait les plus agressifs.' },
      { mot: 'impassibilité', classe: 'nom', definition: 'Absence totale d\'émotion visible, maîtrise parfaite de soi.', exemple: 'Il écoutait les reproches avec une impassibilité déconcertante.' },
    ],
  },
  {
    mot: 'intelligent',
    synonymes_soutenus: [
      { mot: 'perspicace', classe: 'adjectif', definition: 'Qui voit et comprend les choses avec une finesse pénétrante.', exemple: 'Son regard perspicace ne laissait rien échapper.' },
      { mot: 'sagace', classe: 'adjectif', definition: 'Doué d\'un jugement fin et sûr, d\'une intelligence pratique pénétrante.', exemple: 'Un analyste sagace qui anticipait les événements.' },
      { mot: 'acéré', classe: 'adjectif', definition: 'D\'une intelligence vive et tranchante, à l\'esprit incisif.', exemple: 'Un esprit acéré qui démontait les arguments les plus solides.' },
      { mot: 'subtil', classe: 'adjectif', definition: 'Capable de percevoir des distinctions fines et délicates.', exemple: 'Une analyse subtile qui révélait des nuances insoupçonnées.' },
    ],
  },
  {
    mot: 'vieux',
    synonymes_soutenus: [
      { mot: 'vénérable', classe: 'adjectif', definition: 'Digne de vénération en raison de son grand âge ou de sa dignité.', exemple: 'Un vénérable professeur dont la sagesse forçait le respect.' },
      { mot: 'sénescent', classe: 'adjectif', definition: 'Qui présente les caractères du vieillissement progressif.', exemple: 'Un visage sénescent mais éclairé par une vive intelligence.' },
      { mot: 'antique', classe: 'adjectif', definition: 'D\'une grande ancienneté, qui remonte à des temps très reculés.', exemple: 'Une antique demeure au cœur de la vieille ville.' },
      { mot: 'séculaire', classe: 'adjectif', definition: 'Qui existe depuis un ou plusieurs siècles, très ancien.', exemple: 'Un chêne séculaire dont les racines soulevaient les pavés.' },
    ],
  },
]

export default richification