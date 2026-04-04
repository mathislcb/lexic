const richification = [
  {
    mot: 'triste',
    synonymes_soutenus: [
      { mot: 'mélancolique', classe: 'adjectif', definition: 'Empreint d\'une tristesse douce et rêveuse, d\'une nostalgie diffuse.', exemple: 'Un regard mélancolique se posa sur les dernières feuilles d\'automne.' },
      { mot: 'dolent', classe: 'adjectif', definition: 'Qui exprime une souffrance morale avec une langueur plaintive et résignée.', exemple: 'Il arriva d\'un pas dolent, le visage marqué par la fatigue du deuil.' },
      { mot: 'lugubre', classe: 'adjectif', definition: 'Qui inspire un sentiment de tristesse profonde et funèbre.', exemple: 'Un silence lugubre s\'abattit sur l\'assemblée après l\'annonce.' },
      { mot: 'chagrin', classe: 'adjectif', definition: 'Qui ressent ou manifeste une peine intérieure, un abattement de l\'âme.', exemple: 'Elle restait chagrine, incapable de trouver le sommeil.' },
      { mot: 'morose', classe: 'adjectif', definition: 'D\'une humeur sombre et taciturne, qui manque d\'entrain.', exemple: 'Il traversait une période morose depuis la fin de l\'été.' },
      { mot: 'abattu', classe: 'adjectif', definition: 'Profondément déprimé, sans énergie ni ressort moral.', exemple: 'Il revint abattu de cet entretien sans issue.' },
      { mot: 'navré', classe: 'adjectif', definition: 'Profondément attristé et désolé par une situation pénible.', exemple: 'Elle était navrée d\'apprendre cette nouvelle.' },
    ],
  },
  {
    mot: 'rapide',
    synonymes_soutenus: [
      { mot: 'fulgurant', classe: 'adjectif', definition: 'Qui se produit avec une rapidité aveuglante, comme un éclair.', exemple: 'Sa progression fulgurante impressionna tous ses adversaires.' },
      { mot: 'véloce', classe: 'adjectif', definition: 'Qui se déplace ou agit avec une grande vitesse naturelle.', exemple: 'Le guépard, animal véloce entre tous, fond sur sa proie.' },
      { mot: 'alerte', classe: 'adjectif', definition: 'Vif et prompt dans ses mouvements ou ses réactions.', exemple: 'Malgré ses quatre-vingts ans, il restait alerte et espiègle.' },
      { mot: 'diligent', classe: 'adjectif', definition: 'Qui agit avec promptitude et application dans ses tâches.', exemple: 'Un messager diligent qui n\'attendait pas d\'être rappelé à l\'ordre.' },
      { mot: 'prompt', classe: 'adjectif', definition: 'Qui agit sans délai, avec une réactivité immédiate.', exemple: 'Il fut prompt à réagir dès les premiers signes d\'alerte.' },
    ],
  },
  {
    mot: 'parler',
    synonymes_soutenus: [
      { mot: 'proférer', classe: 'verbe', definition: 'Émettre une parole grave ou solennelle avec force.', exemple: 'Il proféra ces mots d\'une voix que nul n\'osa contredire.' },
      { mot: 'discourir', classe: 'verbe', definition: 'S\'exprimer longuement sur un sujet avec une certaine éloquence.', exemple: 'Il discourait des heures durant sur la nature du beau.' },
      { mot: 'haranguer', classe: 'verbe', definition: 'Adresser une harangue, un discours solennel à une foule.', exemple: 'Il haranguait la foule depuis le balcon avec une verve incomparable.' },
      { mot: 'pérorer', classe: 'verbe', definition: 'Discourir avec emphase et prétention, souvent pour ne rien dire.', exemple: 'Il pérorait sans fin, satisfait de lui-même et de ses formules.' },
      { mot: 'disserter', classe: 'verbe', definition: 'Traiter méthodiquement d\'un sujet en développant des arguments.', exemple: 'Elle dissertait avec aisance sur les grands textes philosophiques.' },
    ],
  },
  {
    mot: 'beau',
    synonymes_soutenus: [
      { mot: 'splendide', classe: 'adjectif', definition: 'D\'une beauté éclatante qui saisit et éblouit le regard.', exemple: 'Un coucher de soleil splendide embrasait l\'horizon.' },
      { mot: 'somptueux', classe: 'adjectif', definition: 'D\'une beauté luxueuse et fastueuse qui impressionne par son faste.', exemple: 'Un somptueux décor accueillait les invités.' },
      { mot: 'sublime', classe: 'adjectif', definition: 'D\'une beauté qui élève l\'âme et dépasse le simple agrément.', exemple: 'Une musique sublime transportait l\'auditoire.' },
      { mot: 'magnifique', classe: 'adjectif', definition: 'D\'une beauté grandiose qui inspire l\'admiration profonde.', exemple: 'Un magnifique tableau ornait le mur central de la salle.' },
      { mot: 'resplendissant', classe: 'adjectif', definition: 'Qui brille d\'un éclat intense, rayonnant de beauté.', exemple: 'Elle apparut resplendissante dans cette robe dorée.' },
    ],
  },
  {
    mot: 'peur',
    synonymes_soutenus: [
      { mot: 'effroi', classe: 'nom', definition: 'Peur soudaine et intense qui paralyse et saisit.', exemple: 'Un effroi inexplicable le saisit dans l\'obscurité.' },
      { mot: 'appréhension', classe: 'nom', definition: 'Crainte diffuse et anticipée d\'un événement redouté.', exemple: 'Une sourde appréhension l\'habitait depuis la veille.' },
      { mot: 'terreur', classe: 'nom', definition: 'Peur extrême et violente qui paralyse totalement.', exemple: 'La terreur se peignit sur son visage.' },
      { mot: 'angoisse', classe: 'nom', definition: 'Peur profonde et oppressante sans objet précis identifiable.', exemple: 'Une angoisse diffuse l\'empêchait de dormir.' },
      { mot: 'épouvante', classe: 'nom', definition: 'Terreur violente et subite qui bouleverse entièrement.', exemple: 'L\'épouvante se lisait dans ses yeux écarquillés.' },
    ],
  },
  {
    mot: 'colère',
    synonymes_soutenus: [
      { mot: 'courroux', classe: 'nom', definition: 'Colère vive et noble, indignation forte d\'une personne offensée.', exemple: 'Son courroux était visible à la rougeur de son visage.' },
      { mot: 'fureur', classe: 'nom', definition: 'Colère violente et déchaînée qui pousse aux actes extrêmes.', exemple: 'Une fureur aveugle s\'empara de lui.' },
      { mot: 'ire', classe: 'nom', definition: 'Colère vive et prompte, emportement soudain.', exemple: 'Il entra dans une ire terrible à cette nouvelle.' },
      { mot: 'véhémence', classe: 'nom', definition: 'Force impétueuse et passionnée dans l\'expression de la colère.', exemple: 'Il protesta avec véhémence contre cette injustice.' },
      { mot: 'indignation', classe: 'nom', definition: 'Colère mêlée de mépris devant ce qui est jugé injuste ou honteux.', exemple: 'L\'indignation de la foule était palpable.' },
    ],
  },
  {
    mot: 'calme',
    synonymes_soutenus: [
      { mot: 'sérénité', classe: 'nom', definition: 'État de paix intérieure profonde et lumineuse.', exemple: 'Une sérénité absolue émanait de son visage.' },
      { mot: 'quiétude', classe: 'nom', definition: 'Tranquillité douce et paisible de l\'âme ou d\'un lieu.', exemple: 'La quiétude du soir descendait sur le village.' },
      { mot: 'placidité', classe: 'nom', definition: 'Calme naturel et tranquille qui ne se laisse pas troubler.', exemple: 'Sa placidité désarmait les plus agressifs.' },
      { mot: 'impassibilité', classe: 'nom', definition: 'Absence totale d\'émotion visible, maîtrise parfaite de soi.', exemple: 'Il écoutait les reproches avec une impassibilité déconcertante.' },
      { mot: 'ataraxie', classe: 'nom', definition: 'État de tranquillité absolue de l\'âme recherché par le sage.', exemple: 'Le philosophe avait atteint une ataraxie que rien ne pouvait troubler.' },
    ],
  },
  {
    mot: 'intelligent',
    synonymes_soutenus: [
      { mot: 'perspicace', classe: 'adjectif', definition: 'Qui voit et comprend les choses avec une finesse pénétrante.', exemple: 'Son regard perspicace ne laissait rien échapper.' },
      { mot: 'sagace', classe: 'adjectif', definition: 'Doué d\'un jugement fin et sûr, d\'une intelligence pratique pénétrante.', exemple: 'Un analyste sagace qui anticipait les événements.' },
      { mot: 'acéré', classe: 'adjectif', definition: 'D\'une intelligence vive et tranchante, à l\'esprit incisif.', exemple: 'Un esprit acéré qui démontait les arguments les plus solides.' },
      { mot: 'subtil', classe: 'adjectif', definition: 'Capable de percevoir des distinctions fines et délicates.', exemple: 'Une analyse subtile qui révélait des nuances insoupçonnées.' },
      { mot: 'érudit', classe: 'adjectif', definition: 'Qui possède un savoir vaste et approfondi dans de nombreux domaines.', exemple: 'Ce professeur érudit impressionnait par l\'étendue de ses connaissances.' },
    ],
  },
  {
    mot: 'vieux',
    synonymes_soutenus: [
      { mot: 'vénérable', classe: 'adjectif', definition: 'Digne de vénération en raison de son grand âge ou de sa dignité.', exemple: 'Un vénérable professeur dont la sagesse forçait le respect.' },
      { mot: 'sénescent', classe: 'adjectif', definition: 'Qui présente les caractères du vieillissement progressif.', exemple: 'Un visage sénescent mais éclairé par une vive intelligence.' },
      { mot: 'antique', classe: 'adjectif', definition: 'D\'une grande ancienneté, qui remonte à des temps très reculés.', exemple: 'Une antique demeure au cœur de la vieille ville.' },
      { mot: 'séculaire', classe: 'adjectif', definition: 'Qui existe depuis un ou plusieurs siècles, très ancien.', exemple: 'Un chêne séculaire dont les racines soulevaient les pavés.' },
      { mot: 'caduc', classe: 'adjectif', definition: 'Qui a perdu sa vigueur ou sa valeur avec le temps.', exemple: 'Un système caduc que plus personne ne défendait vraiment.' },
    ],
  },
  {
    mot: 'gentil',
    synonymes_soutenus: [
      { mot: 'affable', classe: 'adjectif', definition: 'D\'une douceur aimable et accueillante dans les relations.', exemple: 'Le directeur affable mettait tout le monde à l\'aise.' },
      { mot: 'bienveillant', classe: 'adjectif', definition: 'Animé d\'une disposition favorable et charitable envers autrui.', exemple: 'Un regard bienveillant qui réchauffait les cœurs les plus froids.' },
      { mot: 'débonnaire', classe: 'adjectif', definition: 'D\'une bonté facile et d\'une douceur naturellement indulgente.', exemple: 'Son air débonnaire cachait une volonté de fer.' },
      { mot: 'amène', classe: 'adjectif', definition: 'D\'une douceur agréable et d\'une grande politesse naturelle.', exemple: 'Il répondit d\'un ton amène qui désamorça la tension.' },
      { mot: 'complaisant', classe: 'adjectif', definition: 'Qui cherche à faire plaisir avec une obligeance naturelle.', exemple: 'Un hôte complaisant qui anticipait tous les besoins de ses invités.' },
    ],
  },
  {
    mot: 'méchant',
    synonymes_soutenus: [
      { mot: 'malveillant', classe: 'adjectif', definition: 'Animé d\'une intention hostile et nuisible envers autrui.', exemple: 'Un regard malveillant trahissait ses intentions cachées.' },
      { mot: 'perfide', classe: 'adjectif', definition: 'Qui trahit la confiance d\'une manière déloyale et dissimulée.', exemple: 'Son sourire perfide cachait des intentions redoutables.' },
      { mot: 'malfaisant', classe: 'adjectif', definition: 'Qui fait du mal, qui cause activement des torts à autrui.', exemple: 'Une influence malfaisante qui corrompait tout son entourage.' },
      { mot: 'pernicieux', classe: 'adjectif', definition: 'Qui cause des dommages profonds de façon insidieuse et cachée.', exemple: 'Une habitude pernicieuse dont il ne percevait pas les effets.' },
      { mot: 'malin', classe: 'adjectif', definition: 'Porté à nuire avec une malice subtile et calculée.', exemple: 'Un esprit malin qui trouvait toujours le défaut dans la cuirasse.' },
    ],
  },
  {
    mot: 'fort',
    synonymes_soutenus: [
      { mot: 'robuste', classe: 'adjectif', definition: 'D\'une solidité physique ou morale bien établie et résistante.', exemple: 'Une constitution robuste qui résistait à tous les excès.' },
      { mot: 'vigoureux', classe: 'adjectif', definition: 'Plein de vigueur et d\'énergie, d\'une vitalité débordante.', exemple: 'Un vieillard encore vigoureux qui menait grand train.' },
      { mot: 'puissant', classe: 'adjectif', definition: 'Qui possède une grande force ou une grande autorité.', exemple: 'Un souverain puissant dont la volonté faisait loi.' },
      { mot: 'herculéen', classe: 'adjectif', definition: 'D\'une force physique extraordinaire, digne d\'Hercule.', exemple: 'Un effort herculéen fut nécessaire pour déplacer le rocher.' },
      { mot: 'indomptable', classe: 'adjectif', definition: 'Qu\'on ne peut dompter ni soumettre, d\'une résistance absolue.', exemple: 'Un caractère indomptable que nulle épreuve n\'avait brisé.' },
    ],
  },
  {
    mot: 'faible',
    synonymes_soutenus: [
      { mot: 'débile', classe: 'adjectif', definition: 'D\'une faiblesse constitutive, sans vigueur ni résistance.', exemple: 'Un corps débile que la moindre maladie terrassait.' },
      { mot: 'chétif', classe: 'adjectif', definition: 'De constitution fragile et malingre, peu développé.', exemple: 'Un enfant chétif que ses camarades bousculaient sans ménagement.' },
      { mot: 'languissant', classe: 'adjectif', definition: 'Qui manque d\'énergie et de vigueur, comme épuisé par la langueur.', exemple: 'Un effort languissant qui ne convainquait personne.' },
      { mot: 'anémique', classe: 'adjectif', definition: 'Sans vigueur ni éclat, d\'une pâleur et d\'une faiblesse marquées.', exemple: 'Une économie anémique qui peinait à redémarrer.' },
      { mot: 'frêle', classe: 'adjectif', definition: 'D\'une légèreté délicate qui semble pouvoir se briser.', exemple: 'Une silhouette frêle que le vent semblait pouvoir emporter.' },
    ],
  },
  {
    mot: 'grand',
    synonymes_soutenus: [
      { mot: 'imposant', classe: 'adjectif', definition: 'Qui impressionne par sa taille ou sa majesté naturelle.', exemple: 'Un bâtiment imposant qui dominait toute la place.' },
      { mot: 'majestueux', classe: 'adjectif', definition: 'Qui inspire le respect par sa grandeur et sa dignité.', exemple: 'Un aigle majestueux planait au-dessus des sommets enneigés.' },
      { mot: 'colossal', classe: 'adjectif', definition: 'D\'une taille ou d\'une ampleur extraordinaire, gigantesque.', exemple: 'Un effort colossal fut nécessaire pour achever le chantier.' },
      { mot: 'gigantesque', classe: 'adjectif', definition: 'D\'une grandeur qui dépasse toute mesure ordinaire.', exemple: 'Une vague gigantesque engloutit les embarcations.' },
      { mot: 'monumental', classe: 'adjectif', definition: 'D\'une ampleur impressionnante, qui a les proportions d\'un monument.', exemple: 'Une erreur monumentale dont les effets se firent longtemps sentir.' },
    ],
  },
  {
    mot: 'petit',
    synonymes_soutenus: [
      { mot: 'minuscule', classe: 'adjectif', definition: 'Extrêmement petit, presque imperceptible à l\'œil nu.', exemple: 'Un minuscule appartement où chaque centimètre était précieux.' },
      { mot: 'exigu', classe: 'adjectif', definition: 'D\'une superficie ou d\'un espace insuffisant, trop réduit.', exemple: 'Un logement exigu où les meubles se touchaient.' },
      { mot: 'infime', classe: 'adjectif', definition: 'D\'une petitesse ou d\'une importance négligeable.', exemple: 'Une différence infime que seuls les experts pouvaient percevoir.' },
      { mot: 'lilliputien', classe: 'adjectif', definition: 'D\'une petitesse comparable aux habitants de Lilliput.', exemple: 'Un village lilliputien perdu dans l\'immensité de la forêt.' },
      { mot: 'dérisoire', classe: 'adjectif', definition: 'Si petit ou insignifiant qu\'il prête à sourire ou à indignation.', exemple: 'Une somme dérisoire qui ne couvrait même pas les frais.' },
    ],
  },
  {
    mot: 'heureux',
    synonymes_soutenus: [
      { mot: 'bienheureux', classe: 'adjectif', definition: 'Qui jouit d\'un bonheur complet et paisible, d\'une félicité profonde.', exemple: 'Il contemplait sa famille avec un sourire bienheureux.' },
      { mot: 'épanoui', classe: 'adjectif', definition: 'Qui rayonne d\'une joie intérieure pleine et accomplie.', exemple: 'Elle apparut épanouie, rayonnante de bonheur.' },
      { mot: 'béat', classe: 'adjectif', definition: 'Dans un état de bonheur paisible et un peu naïf.', exemple: 'Il contemplait la scène avec un sourire béat.' },
      { mot: 'jubilant', classe: 'adjectif', definition: 'Qui exprime une joie intense et débordante.', exemple: 'Les enfants jubilants couraient dans tous les sens.' },
      { mot: 'exultant', classe: 'adjectif', definition: 'Qui manifeste une joie triomphante et expansive.', exemple: 'Les vainqueurs exultants brandissaient le trophée.' },
    ],
  },
  {
    mot: 'malheureux',
    synonymes_soutenus: [
      { mot: 'infortuné', classe: 'adjectif', definition: 'Frappé par le malheur, victime d\'une mauvaise fortune.', exemple: 'Le pauvre infortuné avait tout perdu en une nuit.' },
      { mot: 'misérable', classe: 'adjectif', definition: 'Plongé dans la misère ou le malheur le plus profond.', exemple: 'Il menait une existence misérable depuis son licenciement.' },
      { mot: 'accablé', classe: 'adjectif', definition: 'Écrasé sous le poids d\'une charge morale trop lourde.', exemple: 'Accablé de chagrin, il ne trouvait plus la force de parler.' },
      { mot: 'éploré', classe: 'adjectif', definition: 'En larmes, tout en pleurs, profondément affligé.', exemple: 'Une mère éplorée cherchait son enfant dans la foule.' },
      { mot: 'désolé', classe: 'adjectif', definition: 'Profondément peiné et affligé par une situation douloureuse.', exemple: 'Il était désolé d\'apprendre cette triste nouvelle.' },
    ],
  },
  {
    mot: 'courageux',
    synonymes_soutenus: [
      { mot: 'intrépide', classe: 'adjectif', definition: 'Qui ne ressent pas la peur, d\'une bravoure absolue.', exemple: 'Un explorateur intrépide qui bravait tous les dangers.' },
      { mot: 'vaillant', classe: 'adjectif', definition: 'Qui fait preuve d\'un courage actif dans l\'adversité.', exemple: 'Un soldat vaillant que nulle épreuve ne semblait abattre.' },
      { mot: 'impavide', classe: 'adjectif', definition: 'Qui ne manifeste aucune peur, d\'une sérénité absolue face au danger.', exemple: 'Il resta impavide face aux menaces les plus graves.' },
      { mot: 'audacieux', classe: 'adjectif', definition: 'Qui ose entreprendre des choses hardies avec confiance.', exemple: 'Un entrepreneur audacieux qui n\'hésitait pas à prendre des risques.' },
      { mot: 'téméraire', classe: 'adjectif', definition: 'D\'une hardiesse excessive qui brave imprudemment les dangers.', exemple: 'Un geste téméraire qui stupéfia tous les témoins.' },
    ],
  },
  {
    mot: 'lâche',
    synonymes_soutenus: [
      { mot: 'pusillanime', classe: 'adjectif', definition: 'Qui manque de courage et de caractère, qui cède facilement.', exemple: 'Une réponse pusillanime qui décevit tous ses partisans.' },
      { mot: 'couard', classe: 'adjectif', definition: 'Qui manque de courage et fuit devant le danger.', exemple: 'Il se révéla couard au moment décisif.' },
      { mot: 'timoré', classe: 'adjectif', definition: 'Qui hésite par excès de crainte ou de scrupule.', exemple: 'Trop timoré pour oser s\'exprimer, il se tut encore une fois.' },
      { mot: 'poltron', classe: 'adjectif', definition: 'D\'une couardise méprisable, qui fuit toute confrontation.', exemple: 'Il s\'avéra poltron dès que la situation devint difficile.' },
      { mot: 'veule', classe: 'adjectif', definition: 'Sans énergie ni volonté, d\'une faiblesse morale profonde.', exemple: 'Un homme veule incapable de prendre la moindre décision.' },
    ],
  },
  {
    mot: 'riche',
    synonymes_soutenus: [
      { mot: 'opulent', classe: 'adjectif', definition: 'Qui possède des richesses abondantes et les affiche avec éclat.', exemple: 'Un propriétaire opulent qui étalait sa fortune sans retenue.' },
      { mot: 'fortuné', classe: 'adjectif', definition: 'Qui jouit d\'une grande fortune, favorisé par les biens matériels.', exemple: 'Un homme fortuné qui n\'avait jamais connu le manque.' },
      { mot: 'nanti', classe: 'adjectif', definition: 'Qui est pourvu de biens suffisants, à l\'abri du besoin.', exemple: 'Les nantis ne comprenaient pas toujours la précarité des autres.' },
      { mot: 'fastueux', classe: 'adjectif', definition: 'Qui déploie un luxe et une magnificence éclatants.', exemple: 'Un banquet fastueux où rien ne manquait.' },
      { mot: 'cossu', classe: 'adjectif', definition: 'Qui révèle une aisance et un confort matériel évidents.', exemple: 'Un quartier cossu aux façades soigneusement entretenues.' },
    ],
  },
  {
    mot: 'pauvre',
    synonymes_soutenus: [
      { mot: 'indigent', classe: 'adjectif', definition: 'Dans un dénuement total, privé de l\'essentiel.', exemple: 'Des familles indigentes qui survivaient dans des conditions précaires.' },
      { mot: 'nécessiteux', classe: 'adjectif', definition: 'Qui est dans le besoin, manquant des choses nécessaires.', exemple: 'On distribuait des repas aux personnes nécessiteuses.' },
      { mot: 'démuni', classe: 'adjectif', definition: 'Privé des ressources nécessaires, sans moyens suffisants.', exemple: 'Il se retrouva démuni après la faillite de son entreprise.' },
      { mot: 'misérable', classe: 'adjectif', definition: 'Plongé dans une misère profonde, privé de tout.', exemple: 'Des conditions misérables que nul ne devrait endurer.' },
      { mot: 'besogneux', classe: 'adjectif', definition: 'Qui vit dans une gêne constante, travaillant dur sans prospérer.', exemple: 'Un artisan besogneux qui peinait à joindre les deux bouts.' },
    ],
  },
  {
    mot: 'bizarre',
    synonymes_soutenus: [
      { mot: 'singulier', classe: 'adjectif', definition: 'Qui se distingue par des caractères inhabituels et frappants.', exemple: 'Un personnage singulier que nul ne parvenait à cerner vraiment.' },
      { mot: 'extravagant', classe: 'adjectif', definition: 'Qui sort des normes de façon choquante ou excessive.', exemple: 'Ses tenues extravagantes lui valaient tous les regards.' },
      { mot: 'hétéroclite', classe: 'adjectif', definition: 'Composé d\'éléments disparates qui ne semblent pas aller ensemble.', exemple: 'Une collection hétéroclite d\'objets venus de tous horizons.' },
      { mot: 'loufoque', classe: 'adjectif', definition: 'D\'une drôlerie excentrique et un peu folle, absurde et amusant.', exemple: 'Une idée loufoque qui séduisit pourtant tout le monde.' },
      { mot: 'farfelu', classe: 'adjectif', definition: 'D\'une fantaisie légèrement dérangée, peu sérieux et imprévisible.', exemple: 'Un projet farfelu que personne n\'osait prendre au sérieux.' },
    ],
  },
  {
    mot: 'simple',
    synonymes_soutenus: [
      { mot: 'frugal', classe: 'adjectif', definition: 'D\'une sobriété volontaire dans les besoins et les plaisirs.', exemple: 'Un repas frugal mais savoureux partagé entre amis.' },
      { mot: 'sobre', classe: 'adjectif', definition: 'Sans ornement superflu, d\'une retenue élégante.', exemple: 'Un style sobre qui n\'en était pas moins éloquent.' },
      { mot: 'épuré', classe: 'adjectif', definition: 'Débarrassé de tout ce qui est superflu, réduit à l\'essentiel.', exemple: 'Un design épuré qui respirait l\'élégance.' },
      { mot: 'austère', classe: 'adjectif', definition: 'D\'une sévérité rigoureuse, sans concession ni ornement.', exemple: 'Une décoration austère qui imposait le recueillement.' },
      { mot: 'dépouillé', classe: 'adjectif', definition: 'Réduit à l\'essentiel, sans aucun ornement ni superflu.', exemple: 'Un texte dépouillé d\'une efficacité redoutable.' },
    ],
  },
  {
    mot: 'compliqué',
    synonymes_soutenus: [
      { mot: 'complexe', classe: 'adjectif', definition: 'Composé d\'éléments nombreux et interdépendants difficiles à démêler.', exemple: 'Un mécanisme complexe qui demandait des années d\'apprentissage.' },
      { mot: 'ardu', classe: 'adjectif', definition: 'Difficile à accomplir ou à comprendre, qui demande de grands efforts.', exemple: 'Un problème ardu que les meilleurs spécialistes ne résolvaient pas.' },
      { mot: 'absconsé', classe: 'adjectif', definition: 'D\'une obscurité profonde qui échappe à la compréhension commune.', exemple: 'Un texte abscons que peu de lecteurs pouvaient vraiment saisir.' },
      { mot: 'tortueux', classe: 'adjectif', definition: 'Qui présente de nombreux détours, sinueux et difficile à suivre.', exemple: 'Un raisonnement tortueux qui finissait par égarer.' },
      { mot: 'enchevêtré', classe: 'adjectif', definition: 'Emmêlé de façon confuse, difficile à démêler.', exemple: 'Des intérêts enchevêtrés qui rendaient toute décision difficile.' },
    ],
  },
  {
    mot: 'ancien',
    synonymes_soutenus: [
      { mot: 'vétuste', classe: 'adjectif', definition: 'Détérioré par le temps, dans un état de délabrement avancé.', exemple: 'Un immeuble vétuste dont les façades s\'effritaient.' },
      { mot: 'antique', classe: 'adjectif', definition: 'D\'une grande ancienneté, qui remonte à des temps très reculés.', exemple: 'Une antique tradition transmise de génération en génération.' },
      { mot: 'séculaire', classe: 'adjectif', definition: 'Qui dure depuis un ou plusieurs siècles.', exemple: 'Une forêt séculaire que nul n\'avait encore traversée.' },
      { mot: 'immémoriel', classe: 'adjectif', definition: 'Si ancien que la mémoire humaine n\'en garde aucune trace.', exemple: 'Un rituel immémoriel dont personne ne connaissait l\'origine.' },
      { mot: 'révolu', classe: 'adjectif', definition: 'Entièrement passé, appartenant à une époque définitivement terminée.', exemple: 'Une époque révolue dont on ne retrouvait plus que les vestiges.' },
    ],
  },
  {
    mot: 'nouveau',
    synonymes_soutenus: [
      { mot: 'novateur', classe: 'adjectif', definition: 'Qui apporte des innovations, qui devance son époque.', exemple: 'Un esprit novateur qui bousculait les habitudes établies.' },
      { mot: 'inédit', classe: 'adjectif', definition: 'Qui n\'a jamais été publié ou présenté, entièrement original.', exemple: 'Un procédé inédit qui révolutionna toute la profession.' },
      { mot: 'avant-gardiste', classe: 'adjectif', definition: 'Qui précède son temps dans ses idées ou ses créations.', exemple: 'Un artiste avant-gardiste incompris de ses contemporains.' },
      { mot: 'émergent', classe: 'adjectif', definition: 'Qui est en train d\'apparaître et de s\'imposer progressivement.', exemple: 'Un talent émergent que tous les critiques repéraient.' },
      { mot: 'inaugural', classe: 'adjectif', definition: 'Qui ouvre une série, qui commence quelque chose de nouveau.', exemple: 'Un discours inaugural qui donnait le ton pour l\'avenir.' },
    ],
  },
  {
    mot: 'difficile',
    synonymes_soutenus: [
      { mot: 'ardu', classe: 'adjectif', definition: 'Qui demande de grands efforts, difficile à accomplir ou à gravir.', exemple: 'Une tâche ardue qui découragea plus d\'un candidat.' },
      { mot: 'périlleux', classe: 'adjectif', definition: 'Plein de périls, qui comporte de grands risques.', exemple: 'Une traversée périlleuse que peu osaient entreprendre.' },
      { mot: 'épineux', classe: 'adjectif', definition: 'Hérissé de difficultés délicates à surmonter.', exemple: 'Un dossier épineux que nul ne voulait traiter.' },
      { mot: 'scabreux', classe: 'adjectif', definition: 'Délicat à traiter, qui présente des difficultés morales ou pratiques.', exemple: 'Un sujet scabreux qu\'il aborda avec une franchise désarmante.' },
      { mot: 'malaisé', classe: 'adjectif', definition: 'Qui n\'est pas aisé, qui présente des difficultés d\'exécution.', exemple: 'Une manœuvre malaisée dans un espace aussi restreint.' },
    ],
  },
  {
    mot: 'facile',
    synonymes_soutenus: [
      { mot: 'aisé', classe: 'adjectif', definition: 'Qui se fait sans effort, avec une facilité naturelle.', exemple: 'Une tâche aisée pour qui possédait les bases nécessaires.' },
      { mot: 'commode', classe: 'adjectif', definition: 'Pratique et facile à utiliser ou à accomplir.', exemple: 'Un accès commode qui facilitait la vie des riverains.' },
      { mot: 'élémentaire', classe: 'adjectif', definition: 'Du niveau le plus simple, accessible à tous sans effort.', exemple: 'Une règle élémentaire que tout le monde devrait connaître.' },
      { mot: 'trivial', classe: 'adjectif', definition: 'D\'une simplicité banale et évidente, sans profondeur.', exemple: 'Un problème trivial qui ne méritait pas tant d\'attention.' },
      { mot: 'enfantin', classe: 'adjectif', definition: 'D\'une facilité telle qu\'un enfant pourrait l\'accomplir.', exemple: 'Un jeu enfantin pour quelqu\'un de son niveau.' },
    ],
  },
  {
    mot: 'mauvais',
    synonymes_soutenus: [
      { mot: 'exécrable', classe: 'adjectif', definition: 'D\'une très mauvaise qualité, que l\'on exècre profondément.', exemple: 'Un temps exécrable qui gâcha toute la semaine.' },
      { mot: 'détestable', classe: 'adjectif', definition: 'Qui inspire une forte aversion, très désagréable.', exemple: 'Un caractère détestable qui repoussait tous ses proches.' },
      { mot: 'abominable', classe: 'adjectif', definition: 'D\'une horreur ou d\'une mauvaise qualité extrêmes.', exemple: 'Un crime abominable qui choqua toute la nation.' },
      { mot: 'exécrable', classe: 'adjectif', definition: 'Très mauvais au point d\'en être insupportable.', exemple: 'Une cuisine exécrable qui décourageait les clients.' },
      { mot: 'piètre', classe: 'adjectif', definition: 'De qualité médiocre, qui ne répond pas aux attentes minimales.', exemple: 'Un piètre résultat qui ne justifiait pas les investissements.' },
    ],
  },
  {
    mot: 'bien',
    synonymes_soutenus: [
      { mot: 'admirable', classe: 'adjectif', definition: 'Qui mérite l\'admiration par ses qualités remarquables.', exemple: 'Une œuvre admirable qui résistait à l\'épreuve du temps.' },
      { mot: 'excellent', classe: 'adjectif', definition: 'D\'une qualité supérieure, qui dépasse le niveau ordinaire.', exemple: 'Un excellent résultat qui récompensait des années d\'efforts.' },
      { mot: 'accompli', classe: 'adjectif', definition: 'Qui a atteint la perfection dans son domaine.', exemple: 'Un musicien accompli dont la maîtrise forçait l\'admiration.' },
      { mot: 'remarquable', classe: 'adjectif', definition: 'Qui mérite d\'être remarqué par ses qualités singulières.', exemple: 'Un progrès remarquable accompli en très peu de temps.' },
      { mot: 'exquis', classe: 'adjectif', definition: 'D\'une qualité ou d\'une délicatesse extrêmes, raffinée.', exemple: 'Un mets exquis qui enchantait tous les palais.' },
    ],
  },
  {
    mot: 'changer',
    synonymes_soutenus: [
      { mot: 'muer', classe: 'verbe', definition: 'Se transformer profondément, changer de nature ou d\'apparence.', exemple: 'Il avait mué en un homme entièrement différent au fil des années.' },
      { mot: 'évoluer', classe: 'verbe', definition: 'Se modifier progressivement vers un état différent.', exemple: 'Sa pensée avait évolué considérablement depuis ses débuts.' },
      { mot: 'se métamorphoser', classe: 'verbe', definition: 'Subir une transformation complète et spectaculaire.', exemple: 'La chrysalide se métamorphosa en papillon sous leurs yeux émerveillés.' },
      { mot: 'se transmuer', classe: 'verbe', definition: 'Changer de nature de façon profonde, comme par alchimie.', exemple: 'Sa douleur s\'était transmuée en une force créatrice inattendue.' },
      { mot: 'se convertir', classe: 'verbe', definition: 'Changer radicalement de croyance, d\'opinion ou de mode de vie.', exemple: 'Il s\'était converti à une philosophie de vie plus simple.' },
    ],
  },
  {
    mot: 'regarder',
    synonymes_soutenus: [
      { mot: 'contempler', classe: 'verbe', definition: 'Observer avec attention et recueillement, en s\'y absorbant.', exemple: 'Il contemplait le paysage depuis des heures sans se lasser.' },
      { mot: 'scruter', classe: 'verbe', definition: 'Examiner avec une grande attention pour découvrir ce qui est caché.', exemple: 'Elle scrutait son visage à la recherche du moindre signe.' },
      { mot: 'observer', classe: 'verbe', definition: 'Regarder attentivement pour étudier ou surveiller.', exemple: 'Il observait les oiseaux avec une patience infinie.' },
      { mot: 'dévisager', classe: 'verbe', definition: 'Regarder quelqu\'un en face avec insistance et sans gêne.', exemple: 'L\'inconnu le dévisageait avec une fixité troublante.' },
      { mot: 'épier', classe: 'verbe', definition: 'Observer furtivement et en cachette pour surprendre.', exemple: 'Il épiait ses voisins depuis sa fenêtre entrouverte.' },
    ],
  },
  {
    mot: 'marcher',
    synonymes_soutenus: [
      { mot: 'déambuler', classe: 'verbe', definition: 'Se promener sans but précis, en flânant.', exemple: 'Il déambulait dans les rues sans destination précise.' },
      { mot: 'flâner', classe: 'verbe', definition: 'Se promener lentement en s\'attardant, sans se presser.', exemple: 'Elle flânait dans les galeries du musée avec délectation.' },
      { mot: 'arpenter', classe: 'verbe', definition: 'Parcourir en marchant à grands pas, souvent avec agitation.', exemple: 'Il arpentait son bureau de long en large en réfléchissant.' },
      { mot: 'errer', classe: 'verbe', definition: 'Aller çà et là sans but ni direction déterminée.', exemple: 'Il errait dans la ville comme un fantôme depuis des heures.' },
      { mot: 'déambuler', classe: 'verbe', definition: 'Se déplacer lentement en allant et venant sans se presser.', exemple: 'Les visiteurs déambulaient entre les œuvres sans se presser.' },
    ],
  },
  {
    mot: 'dormir',
    synonymes_soutenus: [
      { mot: 'sommeiller', classe: 'verbe', definition: 'Dormir d\'un sommeil léger et intermittent.', exemple: 'Il sommeillait dans son fauteuil, un livre ouvert sur les genoux.' },
      { mot: 'somnoler', classe: 'verbe', definition: 'Être dans un état intermédiaire entre le sommeil et l\'éveil.', exemple: 'Il somnolait paresseusement dans la chaleur de l\'après-midi.' },
      { mot: 'reposer', classe: 'verbe', definition: 'Être dans un état de repos profond et réparateur.', exemple: 'Elle reposait enfin, paisible, après des semaines d\'insomnie.' },
      { mot: 's\'assoupir', classe: 'verbe', definition: 'Tomber dans un sommeil léger et progressif.', exemple: 'Il s\'assoupit doucement pendant la conférence.' },
      { mot: 'sombrer dans le sommeil', classe: 'verbe', definition: 'Céder au sommeil de façon soudaine et profonde.', exemple: 'Épuisé, il sombra dans le sommeil dès que sa tête toucha l\'oreiller.' },
    ],
  },
  {
    mot: 'manger',
    synonymes_soutenus: [
      { mot: 'se sustenter', classe: 'verbe', definition: 'Prendre de la nourriture pour entretenir ses forces.', exemple: 'Il se sustentait frugalement d\'un peu de pain et de fromage.' },
      { mot: 'se restaurer', classe: 'verbe', definition: 'Reprendre des forces en prenant un repas.', exemple: 'Après la longue marche, ils s\'arrêtèrent pour se restaurer.' },
      { mot: 'déguster', classe: 'verbe', definition: 'Manger lentement en appréciant les saveurs avec attention.', exemple: 'Il dégustait chaque bouchée avec une lenteur délibérée.' },
      { mot: 'savourer', classe: 'verbe', definition: 'Goûter avec un plaisir intense, en appréciant chaque nuance.', exemple: 'Elle savourait ce plat comme si c\'était le dernier de sa vie.' },
      { mot: 'ingurgiter', classe: 'verbe', definition: 'Avaler en grande quantité et rapidement, sans goûter.', exemple: 'Il ingurgitait son repas sans même lever les yeux de son écran.' },
    ],
  },
  {
    mot: 'aimer',
    synonymes_soutenus: [
      { mot: 'chérir', classe: 'verbe', definition: 'Aimer tendrement et avec un attachement profond et durable.', exemple: 'Il chérissait ces vieux livres comme des membres de sa famille.' },
      { mot: 'affectionner', classe: 'verbe', definition: 'Avoir de l\'affection pour quelqu\'un ou quelque chose.', exemple: 'Elle affectionnait particulièrement les longues promenades du soir.' },
      { mot: 'idolâtrer', classe: 'verbe', definition: 'Aimer avec une passion excessive, traiter comme une idole.', exemple: 'Il idolâtrait sa mère au point de ne pouvoir s\'en séparer.' },
      { mot: 'vénérer', classe: 'verbe', definition: 'Avoir pour quelqu\'un un respect profond mêlé d\'amour.', exemple: 'Les étudiants vénéraient ce professeur dont la sagesse les illuminait.' },
      { mot: 'révérer', classe: 'verbe', definition: 'Traiter avec un grand respect mêlé d\'admiration et d\'amour.', exemple: 'Il révérait la mémoire de ses ancêtres avec une dévotion sincère.' },
    ],
  },
  {
    mot: 'détester',
    synonymes_soutenus: [
      { mot: 'abhorrer', classe: 'verbe', definition: 'Avoir en horreur absolue, détester avec une intensité viscérale.', exemple: 'Il abhorrait la violence sous toutes ses formes.' },
      { mot: 'exécrer', classe: 'verbe', definition: 'Avoir en exécration, détester au plus haut point.', exemple: 'Elle exécrait la médiocrité et l\'à-peu-près.' },
      { mot: 'haïr', classe: 'verbe', definition: 'Éprouver une haine profonde et tenace envers quelqu\'un.', exemple: 'Il haïssait son oppresseur d\'une haine froide et absolue.' },
      { mot: 'répugner', classe: 'verbe', definition: 'Inspirer de la répugnance, causer une aversion profonde.', exemple: 'Cette hypocrisie lui répugnait profondément.' },
      { mot: 'vouer aux gémonies', classe: 'verbe', definition: 'Accabler publiquement de mépris et d\'opprobre.', exemple: 'La presse l\'avait voué aux gémonies sans ménagement.' },
    ],
  },
  {
    mot: 'construire',
    synonymes_soutenus: [
      { mot: 'édifier', classe: 'verbe', definition: 'Construire un bâtiment ou élaborer quelque chose d\'important.', exemple: 'Il avait édifié son empire financier en vingt ans de labeur.' },
      { mot: 'ériger', classe: 'verbe', definition: 'Dresser, construire en lui donnant une certaine hauteur.', exemple: 'On érigea une statue en son honneur sur la place principale.' },
      { mot: 'bâtir', classe: 'verbe', definition: 'Construire avec soin et méthode, établir sur des bases solides.', exemple: 'Il avait bâti sa réputation sur des années d\'honnêteté.' },
      { mot: 'élaborer', classe: 'verbe', definition: 'Préparer avec soin en travaillant méthodiquement.', exemple: 'Ils élaborèrent un plan d\'une précision remarquable.' },
      { mot: 'façonner', classe: 'verbe', definition: 'Donner une forme à quelque chose par un travail patient.', exemple: 'Les années avaient façonné son caractère avec une rigueur admirable.' },
    ],
  },
  {
    mot: 'détruire',
    synonymes_soutenus: [
      { mot: 'anéantir', classe: 'verbe', definition: 'Réduire entièrement à néant, détruire de façon totale.', exemple: 'Un seul discours avait suffi à anéantir des années de travail.' },
      { mot: 'dévaster', classe: 'verbe', definition: 'Causer des ravages, saccager et ruiner complètement.', exemple: 'L\'incendie avait dévasté toute la région en quelques heures.' },
      { mot: 'ravager', classe: 'verbe', definition: 'Causer de grands dégâts, ruiner en passant comme une tempête.', exemple: 'La guerre avait ravagé les campagnes sans distinction.' },
      { mot: 'réduire en cendres', classe: 'verbe', definition: 'Détruire entièrement par le feu ou par d\'autres moyens.', exemple: 'Le tribunal avait réduit en cendres sa réputation soigneusement bâtie.' },
      { mot: 'pulvériser', classe: 'verbe', definition: 'Réduire en poussière, détruire complètement et sans recours.', exemple: 'Son argument fut pulvérisé par la réponse implacable de l\'adversaire.' },
    ],
  },
  {
    mot: 'penser',
    synonymes_soutenus: [
      { mot: 'méditer', classe: 'verbe', definition: 'Réfléchir profondément et longuement sur quelque chose.', exemple: 'Il méditait sur le sens de son existence depuis des années.' },
      { mot: 'cogiter', classe: 'verbe', definition: 'Réfléchir intensément, souvent de façon laborieuse.', exemple: 'Il cogitait en silence, cherchant une issue à ce problème insoluble.' },
      { mot: 'délibérer', classe: 'verbe', definition: 'Peser le pour et le contre avant de prendre une décision.', exemple: 'Le jury délibéra longuement avant de rendre son verdict.' },
      { mot: 'ruminer', classe: 'verbe', definition: 'Ressasser longuement une idée ou un souvenir.', exemple: 'Il ruminait sa rancœur depuis des mois sans pouvoir s\'en défaire.' },
      { mot: 'spéculer', classe: 'verbe', definition: 'Former des hypothèses et des conjectures sur des questions abstraites.', exemple: 'Il spéculait sur les origines de l\'univers avec une passion sincère.' },
    ],
  },
  {
    mot: 'oublier',
    synonymes_soutenus: [
      { mot: 'omettre', classe: 'verbe', definition: 'Négliger de mentionner ou de faire quelque chose.', exemple: 'Il avait omis de préciser ce détail pourtant crucial.' },
      { mot: 'occulter', classe: 'verbe', definition: 'Cacher, dissimuler volontairement quelque chose à la conscience.', exemple: 'Il occultait cette période douloureuse de sa mémoire.' },
      { mot: 'refouler', classe: 'verbe', definition: 'Repousser vers l\'inconscient un souvenir ou une émotion.', exemple: 'Il avait refoulé ce traumatisme pendant des décennies.' },
      { mot: 'effacer', classe: 'verbe', definition: 'Faire disparaître complètement de la mémoire.', exemple: 'Le temps n\'avait pas suffi à effacer cette blessure profonde.' },
      { mot: 'reléguer aux oubliettes', classe: 'verbe', definition: 'Mettre délibérément de côté, condamner à l\'oubli.', exemple: 'Ce projet avait été relégué aux oubliettes sans explication.' },
    ],
  },
  {
    mot: 'montrer',
    synonymes_soutenus: [
      { mot: 'exhiber', classe: 'verbe', definition: 'Montrer ostensiblement, exposer avec une certaine ostentation.', exemple: 'Il exhibait ses récompenses sans la moindre modestie.' },
      { mot: 'dévoiler', classe: 'verbe', definition: 'Révéler ce qui était caché, faire apparaître au grand jour.', exemple: 'Elle dévoila enfin ses projets lors de cette conférence décisive.' },
      { mot: 'manifester', classe: 'verbe', definition: 'Exprimer ou faire apparaître de façon visible et claire.', exemple: 'Il manifestait son enthousiasme par de grands gestes expressifs.' },
      { mot: 'étaler', classe: 'verbe', definition: 'Montrer avec complaisance et sans retenue.', exemple: 'Il étalait sa culture comme d\'autres étalent leur fortune.' },
      { mot: 'exposer', classe: 'verbe', definition: 'Présenter à la vue ou à la connaissance de tous.', exemple: 'Elle exposa ses idées avec une clarté et une conviction remarquables.' },
    ],
  },
  {
    mot: 'cacher',
    synonymes_soutenus: [
      { mot: 'dissimuler', classe: 'verbe', definition: 'Cacher soigneusement ses sentiments ou ses intentions réelles.', exemple: 'Il dissimulait mal sa déception derrière un sourire forcé.' },
      { mot: 'occulter', classe: 'verbe', definition: 'Masquer, faire disparaître de la vue ou de la conscience.', exemple: 'Le rapport occultait délibérément les aspects les plus négatifs.' },
      { mot: 'taire', classe: 'verbe', definition: 'Garder pour soi, ne pas révéler, passer sous silence.', exemple: 'Il avait tu cette information pendant de longues années.' },
      { mot: 'voiler', classe: 'verbe', definition: 'Couvrir d\'un voile, atténuer ou cacher partiellement.', exemple: 'Un euphémisme commode voilait la réalité brutale des faits.' },
      { mot: 'receler', classe: 'verbe', definition: 'Garder caché quelque chose ou quelqu\'un.', exemple: 'Ce grenier recelait des trésors insoupçonnés.' },
    ],
  },
  {
    mot: 'commencer',
    synonymes_soutenus: [
      { mot: 'initier', classe: 'verbe', definition: 'Donner le premier mouvement à quelque chose, mettre en train.', exemple: 'Il initia un processus de réconciliation qui porta ses fruits.' },
      { mot: 'amorcer', classe: 'verbe', definition: 'Commencer à mettre en mouvement, donner la première impulsion.', exemple: 'Elle amorça un dialogue qui n\'aurait jamais dû s\'interrompre.' },
      { mot: 'inaugurer', classe: 'verbe', definition: 'Ouvrir solennellement, marquer le début de quelque chose.', exemple: 'Ce discours inaugurait une ère nouvelle pour l\'institution.' },
      { mot: 'entamer', classe: 'verbe', definition: 'Commencer à utiliser ou à faire quelque chose.', exemple: 'Il entama des négociations qui durèrent plusieurs mois.' },
      { mot: 'entreprendre', classe: 'verbe', definition: 'Se mettre à faire quelque chose qui demande de l\'effort.', exemple: 'Elle entreprit cette longue démarche avec une énergie remarquable.' },
    ],
  },
  {
    mot: 'finir',
    synonymes_soutenus: [
      { mot: 'parachever', classe: 'verbe', definition: 'Achever en portant à la perfection, compléter entièrement.', exemple: 'Il paracheva son œuvre après des années de labeur acharné.' },
      { mot: 'clore', classe: 'verbe', definition: 'Mettre fin à quelque chose de façon définitive et formelle.', exemple: 'Elle clôtura le débat d\'une formule qui résumait tout.' },
      { mot: 'consommer', classe: 'verbe', definition: 'Accomplir entièrement, mener à son terme définitif.', exemple: 'La rupture fut consommée sans qu\'un seul mot de trop soit prononcé.' },
      { mot: 'couronner', classe: 'verbe', definition: 'Terminer de façon glorieuse, achever en beauté.', exemple: 'Cette victoire couronnait vingt ans d\'efforts inlassables.' },
      { mot: 'achever', classe: 'verbe', definition: 'Mener jusqu\'à son terme complet et définitif.', exemple: 'Il acheva son discours sous les applaudissements de l\'assemblée.' },
    ],
  },
  {
    mot: 'donner',
    synonymes_soutenus: [
      { mot: 'octroyer', classe: 'verbe', definition: 'Accorder, concéder quelque chose avec une certaine autorité.', exemple: 'Le roi octroya sa grâce au condamné repentant.' },
      { mot: 'prodiguer', classe: 'verbe', definition: 'Donner avec une générosité abondante et sans compter.', exemple: 'Elle prodiguait des conseils à quiconque en avait besoin.' },
      { mot: 'conférer', classe: 'verbe', definition: 'Attribuer officiellement un titre, un pouvoir ou une qualité.', exemple: 'L\'université lui conféra le titre de docteur honoris causa.' },
      { mot: 'dispenser', classe: 'verbe', definition: 'Distribuer, répandre autour de soi avec générosité.', exemple: 'Il dispensait ses bienfaits sans attendre de reconnaissance.' },
      { mot: 'léguer', classe: 'verbe', definition: 'Transmettre par testament ou par l\'exemple à ceux qui suivent.', exemple: 'Il légua sa bibliothèque à l\'université qu\'il avait fréquentée.' },
    ],
  },
  {
    mot: 'prendre',
    synonymes_soutenus: [
      { mot: 's\'emparer', classe: 'verbe', definition: 'Se saisir de quelque chose avec force et décision.', exemple: 'Il s\'empara du micro avant que quiconque puisse réagir.' },
      { mot: 'saisir', classe: 'verbe', definition: 'Prendre rapidement et avec force, attraper vivement.', exemple: 'Elle saisit l\'occasion au vol sans hésiter une seconde.' },
      { mot: 'accaparer', classe: 'verbe', definition: 'S\'approprier en grande quantité au détriment des autres.', exemple: 'Il accaparait toute l\'attention sans jamais laisser les autres s\'exprimer.' },
      { mot: 'confisquer', classe: 'verbe', definition: 'S\'approprier de force ce qui appartient à autrui.', exemple: 'Le régime avait confisqué tous les biens des opposants.' },
      { mot: 'usurper', classe: 'verbe', definition: 'S\'approprier illégitimement un droit, un pouvoir ou un bien.', exemple: 'Il avait usurpé ce titre qui ne lui revenait pas.' },
    ],
  },
  {
    mot: 'vivre',
    synonymes_soutenus: [
      { mot: 'subsister', classe: 'verbe', definition: 'Continuer à exister, maintenir son existence dans la durée.', exemple: 'Quelques vestiges de cette civilisation subsistaient encore.' },
      { mot: 'végéter', classe: 'verbe', definition: 'Mener une existence sans but ni épanouissement.', exemple: 'Il végétait dans ce poste sans perspective depuis des années.' },
      { mot: 'prospérer', classe: 'verbe', definition: 'Se développer favorablement, réussir et s\'épanouir.', exemple: 'L\'entreprise prospérait grâce à une gestion rigoureuse.' },
      { mot: 's\'épanouir', classe: 'verbe', definition: 'Se développer pleinement, atteindre son plein épanouissement.', exemple: 'Elle s\'épanouissait enfin dans ce travail qui lui correspondait.' },
      { mot: 'dépérir', classe: 'verbe', definition: 'Perdre progressivement ses forces et sa vitalité.', exemple: 'Sans affection, il dépérissait à vue d\'œil.' },
    ],
  },
  {
    mot: 'tomber',
    synonymes_soutenus: [
      { mot: 'choir', classe: 'verbe', definition: 'Tomber lourdement, s\'effondrer sous l\'effet de la pesanteur.', exemple: 'Il choir de tout son long sur le parquet ciré.' },
      { mot: 'trébucher', classe: 'verbe', definition: 'Perdre l\'équilibre en accrochant quelque chose, broncher.', exemple: 'Il trébucha sur une racine et faillit perdre contenance.' },
      { mot: 'chanceler', classe: 'verbe', definition: 'Vaciller sur ses pieds, être sur le point de tomber.', exemple: 'Sa foi chancela sous le poids des épreuves accumulées.' },
      { mot: 's\'effondrer', classe: 'verbe', definition: 'S\'écrouler entièrement, tomber en ruine ou céder brusquement.', exemple: 'Ses certitudes s\'effondrèrent à l\'annonce de la vérité.' },
      { mot: 'dégringoler', classe: 'verbe', definition: 'Tomber rapidement et de façon désordonnée.', exemple: 'Les cours avaient dégringolé en quelques heures de cotation.' },
    ],
  },
  {
    mot: 'chercher',
    synonymes_soutenus: [
      { mot: 'quêter', classe: 'verbe', definition: 'Rechercher avec ardeur et insistance quelque chose d\'essentiel.', exemple: 'Il quêtait la reconnaissance que sa famille ne lui avait jamais accordée.' },
      { mot: 'sonder', classe: 'verbe', definition: 'Explorer profondément pour découvrir ce qui est caché.', exemple: 'Elle sondait les recoins de sa mémoire à la recherche du souvenir.' },
      { mot: 'fouiller', classe: 'verbe', definition: 'Examiner minutieusement pour trouver ce qu\'on cherche.', exemple: 'Il fouillait les archives avec une patience infinie.' },
      { mot: 'scruter', classe: 'verbe', definition: 'Observer ou examiner avec une grande attention et minutie.', exemple: 'Elle scrutait les visages à la recherche d\'un signe de reconnaissance.' },
      { mot: 'investiguer', classe: 'verbe', definition: 'Mener une investigation, rechercher méthodiquement des informations.', exemple: 'Le journaliste investigua pendant des mois avant de publier.' },
    ],
  },
  {
    mot: 'perdre',
    synonymes_soutenus: [
      { mot: 'dilapider', classe: 'verbe', definition: 'Dissiper par des dépenses excessives et inconsidérées.', exemple: 'Il avait dilapidé son héritage en quelques années de fêtes.' },
      { mot: 'gaspiller', classe: 'verbe', definition: 'Employer de façon excessive et inutile une ressource précieuse.', exemple: 'Il gaspillait son talent dans des projets sans avenir.' },
      { mot: 'se défaire', classe: 'verbe', definition: 'Se séparer de quelque chose, s\'en dépouiller progressivement.', exemple: 'Il se défit de ses certitudes au fil des années.' },
      { mot: 'dissiper', classe: 'verbe', definition: 'Faire disparaître en dispersant, gaspiller.', exemple: 'Il avait dissipé sa fortune en quelques mois d\'insouciance.' },
      { mot: 'forfaire', classe: 'verbe', definition: 'Manquer à son honneur, déchoir de sa dignité.', exemple: 'Il craignait de forfaire à sa réputation en acceptant ce compromis.' },
    ],
  },
  {
    mot: 'gagner',
    synonymes_soutenus: [
      { mot: 'remporter', classe: 'verbe', definition: 'Obtenir la victoire dans une compétition ou une confrontation.', exemple: 'Elle remporta le premier prix à l\'unanimité du jury.' },
      { mot: 's\'adjuger', classe: 'verbe', definition: 'Se faire attribuer quelque chose, obtenir pour soi.', exemple: 'Il s\'adjugea le contrat au terme d\'une négociation serrée.' },
      { mot: 'triompher', classe: 'verbe', definition: 'Remporter une victoire éclatante sur un adversaire.', exemple: 'La vérité triompha finalement de tous les mensonges accumulés.' },
      { mot: 'prévaloir', classe: 'verbe', definition: 'L\'emporter sur les autres, avoir l\'avantage décisif.', exemple: 'Son bon sens finit par prévaloir sur les passions du moment.' },
      { mot: 's\'imposer', classe: 'verbe', definition: 'S\'établir avec force comme une évidence ou une autorité.', exemple: 'Son talent s\'imposa rapidement à ceux qui avaient douté de lui.' },
    ],
  },
  {
    mot: 'souffrir',
    synonymes_soutenus: [
      { mot: 'endurer', classe: 'verbe', definition: 'Supporter avec fermeté une douleur ou une épreuve prolongée.', exemple: 'Il avait enduré des années de privations sans jamais se plaindre.' },
      { mot: 'pâtir', classe: 'verbe', definition: 'Subir un dommage ou une souffrance dont on est victime.', exemple: 'Toute la région pâtissait de la sécheresse persistante.' },
      { mot: 'languir', classe: 'verbe', definition: 'Souffrir d\'une douleur morale diffuse qui mine lentement.', exemple: 'Elle languissait loin des siens, consumée par la nostalgie.' },
      { mot: 'se morfondre', classe: 'verbe', definition: 'S\'ennuyer et souffrir en attendant quelque chose qui tarde.', exemple: 'Il se morfondait dans cette ville grise qui ne lui ressemblait pas.' },
      { mot: 'agoniser', classe: 'verbe', definition: 'Être dans les affres de l\'agonie, souffrir cruellement.', exemple: 'Son projet agonisait faute de financements suffisants.' },
    ],
  },
  {
    mot: 'comprendre',
    synonymes_soutenus: [
      { mot: 'saisir', classe: 'verbe', definition: 'Comprendre rapidement et clairement le sens de quelque chose.', exemple: 'Il saisit immédiatement les enjeux de cette proposition délicate.' },
      { mot: 'appréhender', classe: 'verbe', definition: 'Saisir par l\'intellect, percevoir avec l\'esprit.', exemple: 'Il peinait à appréhender la complexité de la situation.' },
      { mot: 'percevoir', classe: 'verbe', definition: 'Prendre conscience de quelque chose par les sens ou l\'esprit.', exemple: 'Elle percevait les nuances là où les autres voyaient le simplisme.' },
      { mot: 'discerner', classe: 'verbe', definition: 'Distinguer par l\'esprit ce qui est difficile à percevoir.', exemple: 'Il discernait les motivations cachées avec une perspicacité rare.' },
      { mot: 'concevoir', classe: 'verbe', definition: 'Former dans son esprit une idée, comprendre par la pensée.', exemple: 'Elle ne concevait pas que l\'on pût agir aussi déloyalement.' },
    ],
  },
  {
    mot: 'croire',
    synonymes_soutenus: [
      { mot: 'se convaincre', classe: 'verbe', definition: 'Parvenir à la certitude par un processus de conviction.', exemple: 'Il se convainquit que la décision était la bonne.' },
      { mot: 'professer', classe: 'verbe', definition: 'Déclarer publiquement et ouvertement ses convictions.', exemple: 'Il professait des idées que beaucoup jugeaient utopiques.' },
      { mot: 'présumer', classe: 'verbe', definition: 'Supposer comme vraisemblable sans certitude absolue.', exemple: 'On peut présumer que les négociations aboutiront.' },
      { mot: 'tenir pour', classe: 'verbe', definition: 'Considérer comme vrai ou réel sans preuve formelle.', exemple: 'Il tenait pour acquis ce qui n\'était encore qu\'une hypothèse.' },
      { mot: 'escompter', classe: 'verbe', definition: 'Compter sur quelque chose, l\'espérer avec confiance.', exemple: 'Elle escomptait une réponse favorable avant la fin du mois.' },
    ],
  },
  {
    mot: 'attendre',
    synonymes_soutenus: [
      { mot: 'patienter', classe: 'verbe', definition: 'Attendre avec calme et résignation, faire preuve de patience.', exemple: 'Il patientait dans la salle d\'attente depuis plus d\'une heure.' },
      { mot: 'languir', classe: 'verbe', definition: 'Attendre avec une impatience mêlée d\'ennui et de mélancolie.', exemple: 'Elle languissait de son retour depuis des semaines.' },
      { mot: 'espérer', classe: 'verbe', definition: 'Attendre avec confiance ce que l\'on désire voir arriver.', exemple: 'Il espérait une réponse favorable sans trop y croire.' },
      { mot: 'guetter', classe: 'verbe', definition: 'Attendre en surveillant avec attention et vigilance.', exemple: 'Il guettait le moindre signe depuis la fenêtre entrouverte.' },
      { mot: 'escompter', classe: 'verbe', definition: 'Prévoir et compter sur quelque chose avant qu\'il se produise.', exemple: 'Elle escomptait ce retournement de situation depuis longtemps.' },
    ],
  },
  {
    mot: 'refuser',
    synonymes_soutenus: [
      { mot: 'décliner', classe: 'verbe', definition: 'Refuser poliment une offre ou une invitation.', exemple: 'Il déclina l\'invitation avec le plus de courtoisie possible.' },
      { mot: 'récuser', classe: 'verbe', definition: 'Refuser d\'accepter comme valable, rejeter formellement.', exemple: 'Elle récusa les arguments de l\'accusation un par un.' },
      { mot: 'répudier', classe: 'verbe', definition: 'Rejeter avec force ce qu\'on avait accepté ou reconnu.', exemple: 'Il répudia ses anciennes convictions avec une violence surprenante.' },
      { mot: 'dénier', classe: 'verbe', definition: 'Refuser de reconnaître ou d\'accorder ce qui est réclamé.', exemple: 'On lui dénia le droit de s\'expliquer devant le comité.' },
      { mot: 'abjurer', classe: 'verbe', definition: 'Renoncer solennellement à une croyance ou une opinion.', exemple: 'Sous la pression, il abjura des convictions qu\'il chérissait.' },
    ],
  },
  {
    mot: 'savoir',
    synonymes_soutenus: [
      { mot: 'maîtriser', classe: 'verbe', definition: 'Posséder une connaissance ou une compétence approfondie.', exemple: 'Il maîtrisait parfaitement cinq langues différentes.' },
      { mot: 'posséder', classe: 'verbe', definition: 'Avoir quelque chose en sa possession intellectuelle ou matérielle.', exemple: 'Elle possédait une culture générale d\'une étendue remarquable.' },
      { mot: 'être versé dans', classe: 'verbe', definition: 'Être très compétent et expérimenté dans un domaine précis.', exemple: 'Il était versé dans les arcanes de la finance internationale.' },
      { mot: 'être au fait de', classe: 'verbe', definition: 'Être informé et instruit des détails d\'une question.', exemple: 'Elle était au fait des dernières avancées de la recherche.' },
      { mot: 'détenir', classe: 'verbe', definition: 'Posséder quelque chose qui confère un avantage ou un pouvoir.', exemple: 'Il détenait un savoir rare que peu pouvaient prétendre égaler.' },
    ],
  },
  {
    mot: 'très',
    synonymes_soutenus: [
      { mot: 'extrêmement', classe: 'adverbe', definition: 'À un degré qui dépasse toute mesure ordinaire.', exemple: 'Il était extrêmement doué pour les mathématiques.' },
      { mot: 'éminemment', classe: 'adverbe', definition: 'À un degré supérieur, de façon remarquable et distinguée.', exemple: 'C\'était éminemment souhaitable que les deux parties s\'entendent.' },
      { mot: 'singulièrement', classe: 'adverbe', definition: 'D\'une façon particulière et remarquable, notablement.', exemple: 'Elle était singulièrement douée pour percevoir les tensions.' },
      { mot: 'éminemment', classe: 'adverbe', definition: 'À un très haut degré, de manière tout à fait remarquable.', exemple: 'Cette question est éminemment politique.' },
      { mot: 'particulièrement', classe: 'adverbe', definition: 'D\'une façon spéciale et notable, plus que d\'ordinaire.', exemple: 'Il était particulièrement attentif aux détails que d\'autres négligeaient.' },
    ],
  },
  {
    mot: 'beaucoup',
    synonymes_soutenus: [
      { mot: 'abondamment', classe: 'adverbe', definition: 'En grande quantité, avec une profusion remarquable.', exemple: 'Il avait abondamment commenté chaque passage du texte.' },
      { mot: 'copieusement', classe: 'adverbe', definition: 'En grande abondance, avec une générosité dans la quantité.', exemple: 'Ils avaient copieusement festoyé lors de cette soirée mémorable.' },
      { mot: 'profusément', classe: 'adverbe', definition: 'Avec une grande profusion, en quantité excessive.', exemple: 'Les fleurs ornaient profusément la salle de réception.' },
      { mot: 'largement', classe: 'adverbe', definition: 'Dans de larges proportions, avec ampleur et générosité.', exemple: 'Il avait largement dépassé les objectifs fixés.' },
      { mot: 'amplement', classe: 'adverbe', definition: 'En grande quantité, suffisamment et au-delà.', exemple: 'Les preuves étaient amplement suffisantes pour convaincre le jury.' },
    ],
  },
  {
    mot: 'peu',
    synonymes_soutenus: [
      { mot: 'chichement', classe: 'adverbe', definition: 'Avec une parcimonie mesquine, en quantité insuffisante.', exemple: 'Il distribuait ses compliments chichement et avec parcimonie.' },
      { mot: 'parcimonieusement', classe: 'adverbe', definition: 'Avec une économie excessive et réticente.', exemple: 'Elle accordait parcimonieusement sa confiance à autrui.' },
      { mot: 'frugalement', classe: 'adverbe', definition: 'De façon sobre et modérée, sans excès.', exemple: 'Il vivait frugalement, content de peu.' },
      { mot: 'sobrement', classe: 'adverbe', definition: 'Avec sobriété et retenue, sans excès ni superflu.', exemple: 'Il s\'habillait sobrement mais avec un goût impeccable.' },
      { mot: 'modestement', classe: 'adverbe', definition: 'Sans ostentation ni excès, avec une simplicité retenue.', exemple: 'Il vivait modestement malgré une fortune considérable.' },
    ],
  },
  {
    mot: 'maintenant',
    synonymes_soutenus: [
      { mot: 'présentement', classe: 'adverbe', definition: 'Dans le moment présent, à cette heure même.', exemple: 'Il est présentement en réunion et ne peut être dérangé.' },
      { mot: 'actuellement', classe: 'adverbe', definition: 'Dans la période actuelle, au temps où nous sommes.', exemple: 'La situation est actuellement des plus complexes.' },
      { mot: 'à l\'heure qu\'il est', classe: 'adverbe', definition: 'Au moment précis où l\'on parle, dans l\'instant présent.', exemple: 'À l\'heure qu\'il est, nul ne peut prédire l\'issue des négociations.' },
      { mot: 'désormais', classe: 'adverbe', definition: 'À partir de maintenant et pour l\'avenir, dorénavant.', exemple: 'Désormais, rien ne serait plus comme avant.' },
      { mot: 'dorénavant', classe: 'adverbe', definition: 'À partir du moment présent et dans l\'avenir.', exemple: 'Dorénavant, il se montrerait plus prudent dans ses engagements.' },
    ],
  },
  {
    mot: 'toujours',
    synonymes_soutenus: [
      { mot: 'perpétuellement', classe: 'adverbe', definition: 'De façon continue et sans interruption dans le temps.', exemple: 'Il se plaignait perpétuellement sans jamais chercher de solution.' },
      { mot: 'invariablement', classe: 'adverbe', definition: 'Sans jamais changer, de façon constante et régulière.', exemple: 'Elle arrivait invariablement en avance à chaque rendez-vous.' },
      { mot: 'inexorablement', classe: 'adverbe', definition: 'De façon inévitable et continue, sans possibilité d\'y échapper.', exemple: 'Le temps passait inexorablement, indifférent aux supplications.' },
      { mot: 'immuablement', classe: 'adverbe', definition: 'Sans jamais changer, de façon stable et permanente.', exemple: 'Il répondait immuablement de la même façon à cette question.' },
      { mot: 'inlassablement', classe: 'adverbe', definition: 'Sans jamais se lasser, avec une persévérance infatigable.', exemple: 'Elle recommençait inlassablement jusqu\'à obtenir la perfection.' },
    ],
  },
  {
    mot: 'jamais',
    synonymes_soutenus: [
      { mot: 'point', classe: 'adverbe', definition: 'Pas du tout, nullement (forme littéraire de la négation).', exemple: 'Il n\'avait point l\'intention de céder à cette pression.' },
      { mot: 'nullement', classe: 'adverbe', definition: 'En aucune façon, absolument pas.', exemple: 'Elle n\'était nullement impressionnée par ces artifices.' },
      { mot: 'aucunement', classe: 'adverbe', definition: 'D\'aucune manière, en aucun cas.', exemple: 'Cela n\'affectait aucunement la validité de ses arguments.' },
      { mot: 'en aucune façon', classe: 'adverbe', definition: 'D\'absolument aucune manière, sous quelque prétexte que ce soit.', exemple: 'Il ne transigea en aucune façon sur ses principes fondamentaux.' },
      { mot: 'en aucun cas', classe: 'adverbe', definition: 'Quelles que soient les circonstances, sous aucun prétexte.', exemple: 'En aucun cas il ne révélerait l\'identité de sa source.' },
    ],
  },
  {
    mot: 'ensemble',
    synonymes_soutenus: [
      { mot: 'conjointement', classe: 'adverbe', definition: 'En union et en association, de façon jointe.', exemple: 'Ils travaillèrent conjointement à l\'élaboration du projet.' },
      { mot: 'de concert', classe: 'adverbe', definition: 'En accord et en harmonie, en agissant de façon coordonnée.', exemple: 'Ils agirent de concert pour déjouer les manœuvres adverses.' },
      { mot: 'collectivement', classe: 'adverbe', definition: 'En tant que groupe, de façon commune à tous.', exemple: 'Ils décidèrent collectivement d\'ignorer cette directive absurde.' },
      { mot: 'solidairement', classe: 'adverbe', definition: 'Dans un esprit de solidarité et de soutien mutuel.', exemple: 'Ils s\'engagèrent solidairement pour défendre cette cause juste.' },
      { mot: 'de conserve', classe: 'adverbe', definition: 'Ensemble et en même temps, de façon coordonnée.', exemple: 'Ils naviguèrent de conserve jusqu\'au port de destination.' },
    ],
  },
  {
    mot: 'seul',
    synonymes_soutenus: [
      { mot: 'solitaire', classe: 'adjectif', definition: 'Qui vit ou agit sans compagnie, dans l\'isolement.', exemple: 'Un loup solitaire qui préférait ses propres chemins.' },
      { mot: 'esseulé', classe: 'adjectif', definition: 'Laissé seul, abandonné dans une solitude pénible.', exemple: 'Il se sentait profondément esseulé dans cette ville étrangère.' },
      { mot: 'isolé', classe: 'adjectif', definition: 'Séparé des autres, placé à l\'écart sans communication.', exemple: 'Un chercheur isolé qui travaillait loin de tout laboratoire.' },
      { mot: 'reclus', classe: 'adjectif', definition: 'Retiré du monde, vivant dans une retraite volontaire.', exemple: 'Il vivait en reclus depuis des années, coupé de tout.' },
      { mot: 'ermite', classe: 'nom', definition: 'Personne qui vit dans la solitude, retirée du monde.', exemple: 'Il existait comme un ermite, indifférent au monde extérieur.' },
    ],
  },
  {
    mot: 'vrai',
    synonymes_soutenus: [
      { mot: 'véridique', classe: 'adjectif', definition: 'Conforme à la vérité, qui rapporte les faits avec exactitude.', exemple: 'Un témoignage véridique qui ne laissait aucune place au doute.' },
      { mot: 'avéré', classe: 'adjectif', definition: 'Reconnu pour vrai, établi avec certitude par des preuves.', exemple: 'Les faits avérés contredisaient ses affirmations les plus sûres.' },
      { mot: 'authentique', classe: 'adjectif', definition: 'Dont l\'origine et la réalité sont incontestables.', exemple: 'Un document authentique qui réglait définitivement la question.' },
      { mot: 'incontestable', classe: 'adjectif', definition: 'Qui ne peut être mis en doute, d\'une évidence absolue.', exemple: 'Sa supériorité dans ce domaine était incontestable.' },
      { mot: 'indubitable', classe: 'adjectif', definition: 'Dont on ne peut douter, certain et évident.', exemple: 'Son talent était indubitable, même pour ses adversaires.' },
    ],
  },
  {
    mot: 'faux',
    synonymes_soutenus: [
      { mot: 'fallacieux', classe: 'adjectif', definition: 'Qui cherche à tromper par une apparence de vérité.', exemple: 'Un raisonnement fallacieux qui induisait habilement en erreur.' },
      { mot: 'erroné', classe: 'adjectif', definition: 'Qui contient des erreurs, contraire à la vérité.', exemple: 'Des données erronées avaient faussé toute l\'analyse.' },
      { mot: 'apocryphe', classe: 'adjectif', definition: 'Dont l\'authenticité est douteuse, d\'origine incertaine.', exemple: 'Un document apocryphe qui ne pouvait être pris comme preuve.' },
      { mot: 'spécieux', classe: 'adjectif', definition: 'Qui a une apparence de vérité mais qui est trompeur.', exemple: 'Un argument spécieux qui séduisait les esprits non avertis.' },
      { mot: 'fictif', classe: 'adjectif', definition: 'Qui est imaginé, inventé, sans réalité véritable.', exemple: 'Un personnage fictif auquel les lecteurs s\'identifiaient pourtant.' },
    ],
  },
]

export default richification