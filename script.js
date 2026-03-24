const PARABLES = [
  {
    id: 1,
    title: "A casa sobre a rocha e sobre a areia",
    lesson: "Quem pratica os ensinamentos constrói uma vida firme.",
    location: "Mateus 7:24-27; Lucas 6:47-49",
    fullText: [
      "Jesus ensinou que todo aquele que ouve suas palavras e as pratica se parece com um homem prudente que construiu sua casa sobre a rocha. Caiu chuva, vieram enxurradas, sopraram ventos e bateram contra aquela casa, mas ela não caiu, porque havia sido firmada na rocha.",
      "Também ensinou que quem ouve suas palavras e não as pratica se parece com um homem insensato que construiu sua casa sobre a areia. A chuva caiu, as enxurradas vieram, os ventos sopraram e bateram contra aquela casa. Ela caiu, e foi grande a sua ruína.",
      "No relato de Lucas, Jesus reforça que a pessoa obediente cava fundo e lança o alicerce sobre a rocha. Quando vem a enchente e a correnteza investe contra a casa, ela permanece firme. Já quem apenas ouve e não obedece constrói sem fundamento; ao impacto das águas, a casa desaba imediatamente."
    ],
    symbolism: [
      { term: "Construtor prudente", meaning: "Pessoa que aplica os ensinamentos divinos na vida diária." },
      { term: "Construtor insensato", meaning: "Pessoa que escuta a verdade, mas não a transforma em prática." },
      { term: "Rocha", meaning: "Base espiritual firme: obediência, consciência e coerência moral." },
      { term: "Areia", meaning: "Base instável: aparência religiosa sem transformação interior." },
      { term: "Chuva, ventos e enchentes", meaning: "Provas, crises e pressões inevitáveis da existência." },
      { term: "Casa", meaning: "A própria vida: pensamentos, escolhas, relações e destino espiritual." }
    ],
    spiritualLesson: [
      "Não basta ouvir o bem; é necessário vivê-lo.",
      "A solidez espiritual se forma antes das crises, nas escolhas pequenas e constantes.",
      "Quando a consciência está fundamentada na verdade, as dificuldades não destroem a pessoa.",
      "Sem fundamento moral, a queda pode ser rápida e profunda."
    ]
  },
  { id: 2, title: "O remendo novo em roupa velha", lesson: "O ensinamento novo exige renovação interior.", location: "Mateus 9:16; Marcos 2:21; Lucas 5:36" },
  { id: 3, title: "O vinho novo em odres velhos", lesson: "A verdade espiritual não cabe em estruturas antigas.", location: "Mateus 9:17; Marcos 2:22; Lucas 5:37-38" },
  { id: 4, title: "A lâmpada debaixo do alqueire", lesson: "A verdade deve ser divulgada.", location: "Mateus 5:14-16; Marcos 4:21; Lucas 8:16" },
  { id: 5, title: "O semeador", lesson: "O ensinamento frutifica conforme o coração de quem escuta.", location: "Mateus 13:3-23; Marcos 4:3-20; Lucas 8:5-15" },
  { id: 6, title: "O joio e o trigo", lesson: "O bem e o mal coexistem até a colheita moral.", location: "Mateus 13:24-30" },
  { id: 7, title: "A semente que cresce sozinha", lesson: "O crescimento espiritual é gradual.", location: "Marcos 4:26-29" },
  { id: 8, title: "O grão de mostarda", lesson: "Pequenos começos podem gerar grandes resultados.", location: "Mateus 13:31-32; Marcos 4:30-32; Lucas 13:18-19" },
  { id: 9, title: "O fermento", lesson: "O bem transforma o mundo silenciosamente.", location: "Mateus 13:33; Lucas 13:20-21" },
  { id: 10, title: "O tesouro escondido", lesson: "O reino espiritual vale mais que riquezas materiais.", location: "Mateus 13:44" },
  { id: 11, title: "A pérola de grande valor", lesson: "A verdade espiritual deve ser buscada acima de tudo.", location: "Mateus 13:45-46" },
  { id: 12, title: "A rede", lesson: "No final haverá separação moral.", location: "Mateus 13:47-50" },
  { id: 13, title: "O servo impiedoso", lesson: "Quem recebe perdão deve aprender a perdoar.", location: "Mateus 18:23-35" },
  { id: 14, title: "Os trabalhadores da vinha", lesson: "Deus recompensa segundo sua misericórdia.", location: "Mateus 20:1-16" },
  { id: 15, title: "Os dois filhos", lesson: "Mais importante que prometer é fazer.", location: "Mateus 21:28-32" },
  { id: 16, title: "Os lavradores maus", lesson: "A humanidade frequentemente rejeita os enviados divinos.", location: "Mateus 21:33-46; Marcos 12:1-12; Lucas 20:9-19" },
  { id: 17, title: "O banquete de casamento", lesson: "Muitos são convidados, poucos se preparam.", location: "Mateus 22:1-14" },
  { id: 18, title: "As dez virgens", lesson: "É preciso vigilância espiritual.", location: "Mateus 25:1-13" },
  { id: 19, title: "Os talentos", lesson: "Devemos desenvolver nossos dons.", location: "Mateus 25:14-30" },
  { id: 20, title: "As ovelhas e os bodes", lesson: "O amor ao próximo define a justiça moral.", location: "Mateus 25:31-46" },
  { id: 21, title: "A ovelha perdida", lesson: "Deus busca cada espírito desviado.", location: "Mateus 18:12-14; Lucas 15:3-7" },
  { id: 22, title: "A moeda perdida", lesson: "Cada alma tem grande valor.", location: "Lucas 15:8-10" },
  { id: 23, title: "O filho pródigo", lesson: "Sempre há possibilidade de retorno.", location: "Lucas 15:11-32" },
  { id: 24, title: "O administrador infiel", lesson: "Use com sabedoria as oportunidades da vida.", location: "Lucas 16:1-13" },
  { id: 25, title: "O rico e Lázaro", lesson: "A justiça divina corrige desigualdades.", location: "Lucas 16:19-31" },
  { id: 26, title: "O amigo importuno", lesson: "Persistência na oração.", location: "Lucas 11:5-8" },
  { id: 27, title: "O juiz injusto e a viúva", lesson: "Persistência na fé.", location: "Lucas 18:1-8" },
  { id: 28, title: "O fariseu e o publicano", lesson: "Humildade vale mais que aparência.", location: "Lucas 18:9-14" },
  { id: 29, title: "O bom samaritano", lesson: "O verdadeiro próximo pratica a caridade.", location: "Lucas 10:25-37" },
  { id: 30, title: "O rico insensato", lesson: "Riquezas sem evolução espiritual são inúteis.", location: "Lucas 12:16-21" },
  { id: 31, title: "Os servos vigilantes", lesson: "É preciso estar preparado.", location: "Lucas 12:35-40" },
  { id: 32, title: "A figueira estéril", lesson: "A vida deve produzir frutos.", location: "Lucas 13:6-9" },
  { id: 33, title: "O grande banquete", lesson: "Muitos rejeitam o convite espiritual.", location: "Lucas 14:15-24" },
  { id: 34, title: "O construtor da torre", lesson: "Refletir antes de agir.", location: "Lucas 14:28-30" },
  { id: 35, title: "O rei que vai à guerra", lesson: "Avaliar forças antes de agir.", location: "Lucas 14:31-32" },
  { id: 36, title: "O servo fiel e o infiel", lesson: "Responsabilidade diante das tarefas.", location: "Mateus 24:45-51; Lucas 12:42-48" },
  { id: 37, title: "A dracma perdida", lesson: "Cada espírito é precioso.", location: "Lucas 15:8-10" },
  { id: 38, title: "A figueira que seca", lesson: "Aparência sem fruto não tem valor.", location: "Mateus 21:18-22; Marcos 11:12-14" }
];

const RELATED_CONTENT_BY_PARABLE = {
  21: [
    {
      type: "video",
      title: {
        "pt-BR": "Jesus declara a parábola da ovelha perdida",
        "pt-PT": "Jesus declara a parábola da ovelha perdida",
        en: "Jesus declares the parable of the lost sheep",
        es: "Jesús declara la parábola de la oveja perdida"
      },
      description: {
        "pt-BR": "Vídeo complementar sobre a parábola da ovelha perdida.",
        "pt-PT": "Vídeo complementar sobre a parábola da ovelha perdida.",
        en: "Supplemental video about the parable of the lost sheep.",
        es: "Video complementario sobre la parábola de la oveja perdida."
      },
      url: "https://www.churchofjesuschrist.org/media/video/2011-10-0063-jesus-declares-the-parable-of-the-lost-sheep?lang=por&authuser=1",
      source: {
        "pt-BR": "Church of Jesus Christ",
        "pt-PT": "Church of Jesus Christ",
        en: "Church of Jesus Christ",
        es: "Church of Jesus Christ"
      },
      language: "pt-BR"
    }
  ],
  23: [
    {
      type: "video",
      title: {
        "pt-BR": "O Filho Pródigo",
        "pt-PT": "O Filho Pródigo",
        en: "The Prodigal Son",
        es: "El hijo pródigo"
      },
      description: {
        "pt-BR": "Vídeo complementar sobre a parábola do filho pródigo.",
        "pt-PT": "Vídeo complementar sobre a parábola do filho pródigo.",
        en: "Supplemental video about the parable of the prodigal son.",
        es: "Video complementario sobre la parábola del hijo pródigo."
      },
      url: "https://www.youtube.com/watch?v=PP8XWqggmXw",
      source: {
        "pt-BR": "YouTube",
        "pt-PT": "YouTube",
        en: "YouTube",
        es: "YouTube"
      },
      language: "pt-BR"
    }
  ]
};

const indexList = document.querySelector("#indexList");
const parablesContainer = document.querySelector("#parablesContainer");
const pageRoot = document.querySelector(".page");
const PARABLES_API_DATA = window.ALL_PARABLES_API_BIBLE || window.FIRST_5_PARABLES_API_BIBLE || window.FIRST_PARABLE_API_BIBLE || null;
const langPicker = document.querySelector("#langPicker");
const globalLanguageTrigger = document.querySelector("#global-language-trigger");
const globalLanguageMenu = document.querySelector("#global-language-menu");
const globalLanguageFlag = document.querySelector("#global-language-flag");
const globalLanguageLabel = document.querySelector("#global-language-label");
const shareParableTrigger = document.querySelector("#share-parable-trigger");
const sharePicker = document.querySelector("#sharePicker");
const shareParableMenu = document.querySelector("#share-parable-menu");
const mobileLanguageTrigger = document.querySelector("#mobile-language-trigger");
const mobileLanguageFlag = document.querySelector("#mobile-language-flag");
const mobileLanguageDialog = document.querySelector("#mobile-language-dialog");
const mobileLanguageBackdrop = document.querySelector("#mobile-language-backdrop");
const mobileLanguageClose = document.querySelector("#mobile-language-close");
const mobileLanguageMenu = document.querySelector("#mobile-language-menu");
const mobileLanguageDialogTitle = document.querySelector("#mobile-language-dialog-title");
const pageTitle = document.querySelector("#pageTitle");
const globalControls = document.querySelector("#globalControls");
const indexSection = document.querySelector(".index");
const indexNav = document.querySelector("#indexNav");
const searchBarSection = document.querySelector("#searchBarSection");
const parableSearchInput = document.querySelector("#parableSearchInput");
const pageHeader = document.querySelector("#pageHeader");
const mobilePageTitle = document.querySelector("#mobilePageTitle");
const gospelSelectionByParable = {};
const showVerseMarkersByParable = {};
let currentLanguageCode = "pt-BR";
let currentParableId = null;
let currentView = "index";
let searchQuery = "";
const COMPARE_ALL_KEY = "__compare_all__";
const activeTrackByParable = {};
const LANGUAGE_SELF_LABELS = {
  en: "English",
  es: "Español",
  "pt-BR": "Português (Brasil)",
  "pt-PT": "Português (Portugal)"
};
const UI_STRINGS = {
  "pt-BR": {
    appTitle: "Parábolas de Jesus",
    languageMenuAria: "Idioma",
    globalControlsAria: "Configuração global de idioma e evangelho",
    indexAria: "Lista de parábolas",
    parablesAria: "Conteúdo da parábola",
    searchPlaceholder: "Buscar por título ou conteúdo",
    searchAria: "Buscar parábolas",
    noSearchResults: "Nenhuma parábola encontrada para esta busca.",
    mobileLanguageLabel: "Selecionar idioma",
    languageDialogTitle: "Idioma",
    close: "Fechar",
    prev: "Anterior",
    next: "Próxima",
    home: "Início",
    compareAll: "Comparar todos",
    showVerses: "mostrar versículos",
    noParableContent: "Conteúdo indisponível para esta parábola no idioma selecionado.",
    noPassageContent: "Sem conteúdo disponível.",
    shareParable: "Compartilhar parábola",
    shareParableUnavailable: "Abra uma parábola para compartilhar",
    shareSystem: "Compartilhar...",
    shareWhatsApp: "WhatsApp",
    shareFacebook: "Facebook",
    shareInstagram: "Instagram",
    shareX: "X",
    shareCopyLink: "Copiar link",
    shareCopied: "Link copiado para a área de transferência.",
    shareInstagramHint: "Link copiado. Cole no Instagram para compartilhar.",
    relatedContentTitle: "Conteúdos adicionais relacionados",
    relatedContentOpen: "Abrir conteúdo",
    relatedContentLanguageLabel: "Idioma",
    relatedContentTypeLink: "Link externo",
    relatedContentTypeVideo: "Vídeo",
    relatedContentTypeArticle: "Artigo",
    relatedContentTypePodcast: "Áudio",
    relatedContentTypeStudy: "Estudo"
  },
  "pt-PT": {
    appTitle: "Parábolas de Jesus",
    languageMenuAria: "Idioma",
    globalControlsAria: "Configuração global de idioma e evangelho",
    indexAria: "Lista de parábolas",
    parablesAria: "Conteúdo da parábola",
    searchPlaceholder: "Pesquisar por título ou conteúdo",
    searchAria: "Pesquisar parábolas",
    noSearchResults: "Nenhuma parábola encontrada para esta pesquisa.",
    mobileLanguageLabel: "Selecionar idioma",
    languageDialogTitle: "Idioma",
    close: "Fechar",
    prev: "Anterior",
    next: "Seguinte",
    home: "Início",
    compareAll: "Comparar todos",
    showVerses: "mostrar versículos",
    noParableContent: "Conteúdo indisponível para esta parábola no idioma selecionado.",
    noPassageContent: "Sem conteúdo disponível.",
    shareParable: "Partilhar parábola",
    shareParableUnavailable: "Abra uma parábola para partilhar",
    shareSystem: "Partilhar...",
    shareWhatsApp: "WhatsApp",
    shareFacebook: "Facebook",
    shareInstagram: "Instagram",
    shareX: "X",
    shareCopyLink: "Copiar ligação",
    shareCopied: "Ligação copiada para a área de transferência.",
    shareInstagramHint: "Ligação copiada. Cole no Instagram para partilhar.",
    relatedContentTitle: "Conteúdos adicionais relacionados",
    relatedContentOpen: "Abrir conteúdo",
    relatedContentLanguageLabel: "Idioma",
    relatedContentTypeLink: "Ligação externa",
    relatedContentTypeVideo: "Vídeo",
    relatedContentTypeArticle: "Artigo",
    relatedContentTypePodcast: "Áudio",
    relatedContentTypeStudy: "Estudo"
  },
  en: {
    appTitle: "Parables of Jesus",
    languageMenuAria: "Language",
    globalControlsAria: "Global language and gospel settings",
    indexAria: "Parables list",
    parablesAria: "Parable content",
    searchPlaceholder: "Search by title or content",
    searchAria: "Search parables",
    noSearchResults: "No parables found for this search.",
    mobileLanguageLabel: "Choose language",
    languageDialogTitle: "Language",
    close: "Close",
    prev: "Previous",
    next: "Next",
    home: "Home",
    compareAll: "Compare all",
    showVerses: "show verses",
    noParableContent: "Content unavailable for this parable in the selected language.",
    noPassageContent: "No content available.",
    shareParable: "Share parable",
    shareParableUnavailable: "Open a parable to share",
    shareSystem: "Share...",
    shareWhatsApp: "WhatsApp",
    shareFacebook: "Facebook",
    shareInstagram: "Instagram",
    shareX: "X",
    shareCopyLink: "Copy link",
    shareCopied: "Link copied to clipboard.",
    shareInstagramHint: "Link copied. Paste it on Instagram to share.",
    relatedContentTitle: "Related additional content",
    relatedContentOpen: "Open content",
    relatedContentLanguageLabel: "Language",
    relatedContentTypeLink: "External link",
    relatedContentTypeVideo: "Video",
    relatedContentTypeArticle: "Article",
    relatedContentTypePodcast: "Audio",
    relatedContentTypeStudy: "Study"
  },
  es: {
    appTitle: "Parábolas de Jesús",
    languageMenuAria: "Idioma",
    globalControlsAria: "Configuración global de idioma y evangelio",
    indexAria: "Lista de parábolas",
    parablesAria: "Contenido de la parábola",
    searchPlaceholder: "Buscar por título o contenido",
    searchAria: "Buscar parábolas",
    noSearchResults: "No se encontraron parábolas para esta búsqueda.",
    mobileLanguageLabel: "Seleccionar idioma",
    languageDialogTitle: "Idioma",
    close: "Cerrar",
    prev: "Anterior",
    next: "Siguiente",
    home: "Inicio",
    compareAll: "Comparar todos",
    showVerses: "mostrar versículos",
    noParableContent: "Contenido no disponible para esta parábola en el idioma seleccionado.",
    noPassageContent: "Sin contenido disponible.",
    shareParable: "Compartir parábola",
    shareParableUnavailable: "Abre una parábola para compartir",
    shareSystem: "Compartir...",
    shareWhatsApp: "WhatsApp",
    shareFacebook: "Facebook",
    shareInstagram: "Instagram",
    shareX: "X",
    shareCopyLink: "Copiar enlace",
    shareCopied: "Enlace copiado al portapapeles.",
    shareInstagramHint: "Enlace copiado. Pégalo en Instagram para compartir.",
    relatedContentTitle: "Contenidos adicionales relacionados",
    relatedContentOpen: "Abrir contenido",
    relatedContentLanguageLabel: "Idioma",
    relatedContentTypeLink: "Enlace externo",
    relatedContentTypeVideo: "Vídeo",
    relatedContentTypeArticle: "Artículo",
    relatedContentTypePodcast: "Audio",
    relatedContentTypeStudy: "Estudio"
  }
};
const PARABLE_TRACKING = {
  1: {
    "pt-BR": {
      title: "Simbologia",
      items: [
        { id: "jesus_ensino", term: "Jesus e seus ensinamentos", meaning: "A autoridade e a palavra que devem ser ouvidas e praticadas.", matches: ["palavras que eu digo", "quem ouve as palavras", "ouve as palavras que eu digo", "vem até mim", "vem a mim", "ouve minhas orientações", "me ouve"] },
        { id: "rocha", term: "Rocha", meaning: "Fundamento sólido: obediência e prática.", matches: ["rocha", "rocha sólida", "alicerce", "fundamento"] },
        { id: "areia", term: "Areia", meaning: "Base frágil: ouvir sem praticar.", matches: ["areia", "sem o alicerce", "sem fundamento"] },
        { id: "casa", term: "Casa", meaning: "A própria vida construída nas escolhas diárias.", matches: ["casa"] },
        { id: "provas", term: "Chuvas, ventos e enchentes", meaning: "Crises e pressões que testam o fundamento.", matches: ["chuva", "chuvas", "enchente", "enchentes", "vento", "ventos", "torrente", "rio", "correnteza"] }
      ]
    },
    "pt-PT": {
      title: "Simbologia",
      items: [
        { id: "jesus_ensino", term: "Jesus e o seu ensinamento", meaning: "A palavra que deve ser ouvida e obedecida.", matches: ["o que eu digo", "as minhas mensagens", "ouvem as minhas mensagens", "vêm a mim", "ouvem"] },
        { id: "rocha", term: "Rocha", meaning: "Fundamento firme: obediência e prática.", matches: ["rocha", "terra firme", "alicerces", "fundamento"] },
        { id: "areia", term: "Areia", meaning: "Base frágil: ouvir sem obedecer.", matches: ["areia", "sem cavar", "sem alicerces", "sem fundamento"] },
        { id: "casa", term: "Casa", meaning: "A vida construída pelas escolhas.", matches: ["casa"] },
        { id: "provas", term: "Chuvas, ventos e enchentes", meaning: "Provas que revelam a qualidade do alicerce.", matches: ["chuva", "rio", "enchente", "vento", "água"] }
      ]
    },
    en: {
      title: "Symbolism",
      items: [
        { id: "jesus_ensino", term: "Jesus and his teaching", meaning: "The authority and words that must be heard and practiced.", matches: ["these words of mine", "hears my words", "comes to me", "puts them into practice", "hears these words of mine"] },
        { id: "rock", term: "Rock", meaning: "Solid foundation: hearing and doing.", matches: ["rock", "foundation", "well built"] },
        { id: "sand", term: "Sand", meaning: "Fragile base: hearing without practice.", matches: ["sand", "without a foundation"] },
        { id: "house", term: "House", meaning: "Life structure formed by daily decisions.", matches: ["house"] },
        { id: "trials", term: "Rain, winds and floods", meaning: "Pressures that test the structure.", matches: ["rain", "winds", "flood", "torrent", "streams"] }
      ]
    },
    es: {
      title: "Simbología",
      items: [
        { id: "jesus_ensino", term: "Jesús y su enseñanza", meaning: "La palabra que debe oírse y ponerse en práctica.", matches: ["mis palabras", "viene á mí", "viene a mí", "oye mis palabras", "me oye estas palabras"] },
        { id: "roca", term: "Roca", meaning: "Fundamento firme: oír y obedecer.", matches: ["peña", "roca", "fundamento"] },
        { id: "arena", term: "Arena", meaning: "Base frágil: oír sin practicar.", matches: ["arena", "sin fundamento"] },
        { id: "casa", term: "Casa", meaning: "La vida construida por decisiones.", matches: ["casa"] },
        { id: "pruebas", term: "Lluvia, vientos e inundaciones", meaning: "Pruebas que exponen el fundamento.", matches: ["lluvia", "vientos", "ríos", "avenida", "ímpetu"] }
      ]
    }
  },
  2: {
    "pt-BR": {
      title: "Simbologia",
      items: [
        { id: "remendo_novo", term: "Remendo novo", meaning: "A novidade espiritual que não cabe em ajuste superficial.", matches: ["retalho de pano novo", "retalho de uma roupa nova", "retalho da nova"] },
        { id: "roupa_velha", term: "Roupa velha", meaning: "Estruturas antigas que não sustentam a renovação interior.", matches: ["roupa velha", "tecido da roupa velha"] },
        { id: "rasgo", term: "Rasgo", meaning: "O conflito piora quando se tenta misturar o novo com o velho sem transformação.", matches: ["rasgo", "buraco", "estragada"] },
        { id: "incompatibilidade", term: "Incompatibilidade", meaning: "Sem mudança profunda, o novo não combina com o velho.", matches: ["não combinará", "não combinará com o tecido"] }
      ]
    },
    "pt-PT": {
      title: "Simbologia",
      items: [
        { id: "nova_mensagem", term: "Nova mensagem", meaning: "O ensinamento renovador que pede mudança real de vida.", matches: ["nova mensagem dele", "nova mensagem de Deus", "segundo a nova mensagem"] },
        { id: "velhas_tradicoes", term: "Velhas tradições", meaning: "Práticas antigas incapazes de conter o novo sentido espiritual.", matches: ["velhas tradições", "velhas tradições religiosas", "esses rituais"] },
        { id: "remendo_novo", term: "Remendo novo", meaning: "Tentativa externa de corrigir o antigo sem renovação profunda.", matches: ["retalho de pano que ainda não foi encolhido", "retalho de pano novo", "novo pedaço de material", "pedaço de uma roupa nova"] },
        { id: "rasgo", term: "Rasgo e buraco maior", meaning: "A incoerência aumenta a ruptura em vez de curar.", matches: ["rasgará a roupa velha", "rasgar a roupa velha", "aumentando o buraco", "buraco ficará ainda maior"] }
      ]
    },
    en: {
      title: "Symbolism",
      items: [
        { id: "new_patch", term: "New patch / new cloth", meaning: "New spiritual reality that cannot be reduced to a superficial fix.", matches: ["patch of unshrunk cloth", "new piece", "piece out of a new garment", "patch from the new", "new garment"] },
        { id: "old_garment", term: "Old garment", meaning: "Old structures and habits unable to hold the renewal.", matches: ["old garment", "old one", "from the old"] },
        { id: "tear", term: "Tear made worse", meaning: "Mixing old and new without transformation increases the rupture.", matches: ["tear worse", "making the tear worse", "torn the new garment"] },
        { id: "mismatch", term: "Mismatch", meaning: "The new does not fit the old when there is no inner change.", matches: ["will not match the old", "will not match"] }
      ]
    },
    es: {
      title: "Simbología",
      items: [
        { id: "remiendo_nuevo", term: "Remiendo nuevo", meaning: "La novedad espiritual que no cabe en un ajuste superficial.", matches: ["remiendo de paño recio", "remiendo nuevo", "remiendo de paño nuevo"] },
        { id: "vestido_viejo", term: "Vestido viejo", meaning: "Estructuras antiguas que no sostienen la renovación.", matches: ["vestido viejo", "del viejo", "al viejo"] },
        { id: "rotura", term: "Rotura peor", meaning: "La mezcla incoherente agrava la ruptura.", matches: ["rotura", "se hace peor la rotura", "rompe"] },
        { id: "incompatibilidad", term: "Incompatibilidad", meaning: "Sin transformación interior, lo nuevo no conviene a lo viejo.", matches: ["no conviene remiendo nuevo", "no conviene"] }
      ]
    }
  },
  5: {
    "pt-BR": {
      title: "Simbologia",
      items: [
        { id: "semeador", term: "Semeador", meaning: "Quem anuncia e lança a mensagem espiritual.", matches: ["homem saiu para semear", "enquanto realizava a semeadura", "um homem saiu para plantar", "ele espalhava as sementes"] },
        { id: "semente", term: "Semente", meaning: "A palavra ensinada, oferecida a todos.", matches: ["sementes", "semente", "simiente", "palavra de deus", "conhecimentos a respeito dos mistérios"] },
        { id: "caminho", term: "Caminho", meaning: "Coração endurecido que não acolhe a mensagem.", matches: ["caíram pelo caminho", "caíram na estrada", "foram pisadas", "pelo caminho", "na pista"] },
        { id: "aves", term: "Aves", meaning: "Influências que retiram rapidamente o que foi ouvido.", matches: ["pássaros vieram e as comeram", "comidas pelos pássaros", "as comeram", "vieram alguns pássaros"] },
        { id: "pedras", term: "Pedras / solo raso", meaning: "Recebe com entusiasmo, mas sem raiz profunda.", matches: ["chão duro como pedra", "havia pouca terra", "solo não era profundo", "falta de umidade", "não tinham raízes"] },
        { id: "espinhos", term: "Espinhos", meaning: "Preocupações e pressões que sufocam o crescimento.", matches: ["entre espinhos", "espinhos cresceram", "as sufocaram", "sufocaram as plantas"] },
        { id: "boa_terra", term: "Boa terra", meaning: "Coração receptivo que persevera e frutifica.", matches: ["terra boa", "bom solo", "produziram uma colheita", "cem vezes", "sessenta", "trinta"] },
        { id: "fruto", term: "Fruto", meaning: "Resultado visível da palavra vivida.", matches: ["colheita", "produziu", "produziram", "fruto", "cem vezes maior"] }
      ]
    },
    "pt-PT": {
      title: "Simbologia",
      items: [
        { id: "semeador", term: "Semeador", meaning: "Quem espalha o ensinamento divino.", matches: ["foi para sua roça e começou a semear", "fazendeiro saiu ao campo", "saíu para semear"] },
        { id: "semente", term: "Semente", meaning: "A mensagem espiritual lançada aos ouvintes.", matches: ["sementes", "semente", "nova mensagem de deus", "ensino", "minhas palavras"] },
        { id: "caminho", term: "Caminho", meaning: "Coração exposto e sem proteção interior.", matches: ["caíram no caminho", "caiu na pista", "caiu no caminho", "as pessoas andavam nela"] },
        { id: "aves", term: "Aves", meaning: "Forças que removem depressa o que foi semeado.", matches: ["pássaros chegaram e comeram", "vieram alguns pássaros e comeram", "os pássaros a comeram"] },
        { id: "pedras", term: "Pedras / pouca profundidade", meaning: "Recepção rápida, sem firmeza para permanecer.", matches: ["terra rochosa", "muitas pedras", "solo pouco profundo", "falta de raízes profundas", "secaram porque não tinham água"] },
        { id: "espinhos", term: "Espinhos", meaning: "Interferências que abafam o crescimento espiritual.", matches: ["raízes de espinhos", "espinheiros cresceram", "sufocaram", "abafaram as plantas"] },
        { id: "boa_terra", term: "Terra boa", meaning: "Interior fértil que acolhe e multiplica.", matches: ["terra produtiva", "terra bem boa", "solo bom", "cem vezes mais sementes", "produziu muitíssimo fruto"] },
        { id: "fruto", term: "Fruto", meaning: "Maturidade expressa em perseverança e produção.", matches: ["fruto", "grãos", "produzir", "produziu", "muitíssimo fruto"] }
      ]
    },
    en: {
      title: "Symbolism",
      items: [
        { id: "sower", term: "Sower", meaning: "The one who proclaims and scatters the message.", matches: ["a farmer went out to sow his seed", "as he was scattering the seed"] },
        { id: "seed", term: "Seed", meaning: "The word being offered to all hearers.", matches: ["seed", "the seed is the word of god", "word of god"] },
        { id: "path", term: "Path", meaning: "A hardened heart where the message does not settle.", matches: ["along the path", "it was trampled on"] },
        { id: "birds", term: "Birds", meaning: "Forces that quickly remove what was heard.", matches: ["the birds came and ate it up", "birds ate it up"] },
        { id: "rocky", term: "Rocky ground", meaning: "Quick reception without deep root.", matches: ["rocky places", "rocky ground", "soil was shallow", "had no root", "had no moisture"] },
        { id: "thorns", term: "Thorns", meaning: "Competing pressures that choke growth.", matches: ["among thorns", "thorns", "choked the plants", "choke the word"] },
        { id: "good_soil", term: "Good soil", meaning: "A receptive heart that perseveres.", matches: ["good soil", "yielded a crop", "produced a crop", "a hundred", "sixty", "thirty"] },
        { id: "fruit", term: "Fruit", meaning: "Visible outcomes of sustained obedience.", matches: ["produce a crop", "yielded a crop", "did not bear grain"] }
      ]
    },
    es: {
      title: "Simbología",
      items: [
        { id: "sembrador", term: "Sembrador", meaning: "Quien sale a anunciar y sembrar la palabra.", matches: ["el que sembraba salió á sembrar", "el sembrador salió á sembrar", "uno que sembraba"] },
        { id: "simiente", term: "Simiente", meaning: "La palabra ofrecida a todos los oyentes.", matches: ["simiente", "la simiente es la palabra de dios", "palabra de dios"] },
        { id: "camino", term: "Camino", meaning: "Corazón endurecido que no retiene la palabra.", matches: ["junto al camino", "fué hollada"] },
        { id: "aves", term: "Aves", meaning: "Influencias que arrebatan lo sembrado.", matches: ["vinieron las aves", "aves del cielo", "la comieron", "la tragaron"] },
        { id: "pedregales", term: "Pedregales / piedra", meaning: "Recepción rápida sin profundidad ni raíz.", matches: ["en pedregales", "sobre la piedra", "no tenía profundidad de tierra", "no tenía raíz", "no tenía humedad"] },
        { id: "espinas", term: "Espinas", meaning: "Factores que ahogan el crecimiento.", matches: ["en espinas", "las espinas crecieron", "la ahogaron"] },
        { id: "buena_tierra", term: "Buena tierra", meaning: "Corazón fértil que persevera y produce.", matches: ["buena tierra", "dió fruto", "llevó fruto", "á ciento", "á sesenta", "á treinta"] },
        { id: "fruto", term: "Fruto", meaning: "Resultado de oír, retener y perseverar.", matches: ["fruto", "hacen fruto", "infructuosa"] }
      ]
    }
  }
};
const BOOK_ORDER = {
  mateus: 1,
  matthew: 1,
  marcos: 2,
  mark: 2,
  lucas: 3,
  luke: 3
};

function parseReferenceLocation(location) {
  if (!location) return null;
  const refs = location.split(";").map((part) => part.trim()).filter(Boolean);
  const parsed = refs
    .map((ref) => {
      const match = ref.match(/^([A-Za-zÀ-ÿ]+)\s+(\d+):(\d+)/);
      if (!match) return null;
      const book = match[1].toLowerCase();
      const chapter = Number(match[2]);
      const verse = Number(match[3]);
      const bookOrder = BOOK_ORDER[book];
      if (!bookOrder || !Number.isFinite(chapter) || !Number.isFinite(verse)) return null;
      return { bookOrder, chapter, verse };
    })
    .filter(Boolean);

  if (!parsed.length) return null;
  return parsed.sort((a, b) =>
    a.bookOrder - b.bookOrder ||
    a.chapter - b.chapter ||
    a.verse - b.verse
  )[0];
}

const PARABLES_BY_GOSPEL_LOCATION = [...PARABLES].sort((a, b) => {
  const locA = parseReferenceLocation(a.location);
  const locB = parseReferenceLocation(b.location);
  if (!locA && !locB) return a.id - b.id;
  if (!locA) return 1;
  if (!locB) return -1;
  return (
    locA.bookOrder - locB.bookOrder ||
    locA.chapter - locB.chapter ||
    locA.verse - locB.verse ||
    a.id - b.id
  );
});

function isValidParableId(value) {
  const id = Number(value);
  return Number.isFinite(id) && PARABLES.some((parable) => parable.id === id);
}

function readStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const rawId = params.get("parable");
  if (isValidParableId(rawId)) {
    return { view: "parable", parableId: Number(rawId) };
  }
  return { view: "index", parableId: null };
}

function writeStateToUrl() {
  const url = new URL(window.location.href);
  if (currentView === "parable" && isValidParableId(currentParableId)) {
    url.searchParams.set("parable", String(currentParableId));
  } else {
    url.searchParams.delete("parable");
  }
  const next = `${url.pathname}${url.search}${url.hash}`;
  if (next !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
    window.history.replaceState({}, "", next);
  }
}

function getLanguageFlag(code) {
  if (code === "en") return "🇺🇸";
  if (code === "pt-BR") return "🇧🇷";
  if (code === "pt-PT") return "🇵🇹";
  if (code === "es") return "🇪🇸";
  return "🌐";
}

function getUiStrings() {
  return UI_STRINGS[currentLanguageCode] || UI_STRINGS["pt-BR"];
}

function t(key) {
  const strings = getUiStrings();
  return strings[key] || key;
}

function buildParableShareUrl(parableId) {
  const url = new URL(window.location.href);
  url.searchParams.delete("parable");
  if (isValidParableId(parableId)) {
    url.searchParams.set("parable", String(parableId));
  }
  return url.toString();
}

function updateShareParableButtonState() {
  if (!shareParableTrigger) return;
  const hasParableOpen = currentView === "parable" && isValidParableId(currentParableId);
  shareParableTrigger.hidden = !hasParableOpen;
  shareParableTrigger.disabled = !hasParableOpen;
  if (!hasParableOpen) closeShareMenu();
  shareParableTrigger.setAttribute("aria-label", hasParableOpen ? t("shareParable") : t("shareParableUnavailable"));
  shareParableTrigger.title = hasParableOpen ? t("shareParable") : t("shareParableUnavailable");
  shareParableTrigger.setAttribute("aria-expanded", sharePicker?.classList.contains("is-open") ? "true" : "false");
}

function closeShareMenu() {
  if (!sharePicker || !shareParableTrigger) return;
  sharePicker.classList.remove("is-open");
  shareParableTrigger.setAttribute("aria-expanded", "false");
}

function openShareMenu() {
  if (!sharePicker || !shareParableTrigger || shareParableTrigger.hidden || shareParableTrigger.disabled) return;
  sharePicker.classList.add("is-open");
  shareParableTrigger.setAttribute("aria-expanded", "true");
}

function updateShareMenuTranslations() {
  if (!shareParableMenu) return;
  shareParableMenu.setAttribute("aria-label", t("shareParable"));
  const actions = {
    system: t("shareSystem"),
    whatsapp: t("shareWhatsApp"),
    facebook: t("shareFacebook"),
    instagram: t("shareInstagram"),
    x: t("shareX"),
    copy: t("shareCopyLink")
  };
  shareParableMenu.querySelectorAll(".share-option").forEach((button) => {
    const label = actions[button.dataset.shareAction];
    if (!label) return;
    const labelNode = button.querySelector(".share-label");
    if (labelNode) labelNode.textContent = label;
    else button.textContent = label;
  });
}

async function copyTextToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return true;
  }
  return false;
}

async function runShareAction(action) {
  if (!(currentView === "parable" && isValidParableId(currentParableId))) return;
  const shareUrl = buildParableShareUrl(currentParableId);
  const shareTitle = getParableDisplayTitle(currentParableId);
  const shareText = `${shareTitle}\n${shareUrl}`;

  if (action === "system") {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareTitle, url: shareUrl });
        return;
      } catch (_error) {
        // Continue with prompt fallback below.
      }
    }
    window.prompt(t("shareParable"), shareUrl);
    return;
  }

  if (action === "copy") {
    try {
      const copied = await copyTextToClipboard(shareUrl);
      if (copied) {
        window.alert(t("shareCopied"));
        return;
      }
    } catch (_error) {
      // Final fallback below.
    }
    window.prompt(t("shareParable"), shareUrl);
    return;
  }

  if (action === "whatsapp") {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank", "noopener,noreferrer");
    return;
  }

  if (action === "facebook") {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank", "noopener,noreferrer");
    return;
  }

  if (action === "instagram") {
    try {
      await copyTextToClipboard(shareUrl);
    } catch (_error) {
      // Continue opening Instagram even if copy fails.
    }
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    window.alert(t("shareInstagramHint"));
    return;
  }

  if (action === "x") {
    const text = encodeURIComponent(shareTitle);
    const url = encodeURIComponent(shareUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getLanguageDisplayName(code) {
  if (!code) return "";
  if (LANGUAGE_SELF_LABELS[code]) return LANGUAGE_SELF_LABELS[code];
  const parts = code.split("-");
  try {
    return new Intl.DisplayNames([currentLanguageCode, "pt-BR", "en"], { type: "language" }).of(parts[0]) || code;
  } catch (_error) {
    return code;
  }
}

function getRelatedContentItems(parableId) {
  const items = RELATED_CONTENT_BY_PARABLE[parableId];
  return Array.isArray(items) ? items.filter((item) => item?.url && item?.title) : [];
}

function getLocalizedContentValue(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value !== "object") return "";
  return (
    value[currentLanguageCode] ||
    value["pt-BR"] ||
    value["pt-PT"] ||
    value.en ||
    value.es ||
    Object.values(value).find((entry) => typeof entry === "string") ||
    ""
  );
}

function getContentLanguageDisclaimer(languageCode) {
  const languageName = getLanguageDisplayName(languageCode);
  const templates = {
    "pt-BR": `Este item está em ${languageName}. O conteúdo complementar do site prioriza Português (Brasil); verifique se a plataforma oferece tradução automática.`,
    "pt-PT": `Este item está em ${languageName}. O conteúdo complementar do site privilegia Português (Brasil); verifique se a plataforma oferece tradução automática.`,
    en: `This item is in ${languageName}. Supplemental content on this site primarily targets Brazilian Portuguese; check whether the platform offers automatic translation.`,
    es: `Este elemento está en ${languageName}. El contenido complementario del sitio prioriza el portugués de Brasil; verifica si la plataforma ofrece traducción automática.`
  };
  return templates[currentLanguageCode] || templates["pt-BR"];
}

function getRelatedContentTypeLabel(type) {
  if (type === "video") return t("relatedContentTypeVideo");
  if (type === "article") return t("relatedContentTypeArticle");
  if (type === "podcast") return t("relatedContentTypePodcast");
  if (type === "study") return t("relatedContentTypeStudy");
  return t("relatedContentTypeLink");
}

function parseYouTubeVideoId(url) {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace(/\//g, "").trim() || null;
    }
    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v") || null;
    }
  } catch (_error) {
    return null;
  }
  return null;
}

function getHostnameLabel(url) {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    return hostname;
  } catch (_error) {
    return "";
  }
}

function resolveRelatedContentImage(item) {
  if (item.image) return item.image;
  const youtubeId = parseYouTubeVideoId(item.url);
  if (youtubeId) return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  return "";
}

function renderRelatedContentSection(parableId) {
  const items = getRelatedContentItems(parableId);
  if (!items.length) return "";

  return `
    <section class="related-content" aria-label="${escapeHtml(t("relatedContentTitle"))}">
      <div class="related-content-header">
        <h3 class="related-content-title">${escapeHtml(t("relatedContentTitle"))}</h3>
      </div>
      <div class="related-content-grid">
        ${items.map((item) => {
          const image = resolveRelatedContentImage(item);
          const typeClass = `is-${escapeHtml(item.type || "link")}`;
          const language = item.language || "pt-BR";
          const languageName = getLanguageDisplayName(language);
          const showLanguageDisclaimer = language !== "pt-BR";
          const title = getLocalizedContentValue(item.title);
          const description = getLocalizedContentValue(item.description);
          const sourceLabel = getLocalizedContentValue(item.source) || getHostnameLabel(item.url);
          const ctaLabel = getLocalizedContentValue(item.ctaLabel) || t("relatedContentOpen");
          return `
            <a
              class="related-card ${typeClass}"
              href="${escapeHtml(item.url)}"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div class="related-card-media ${image ? "has-image" : "is-fallback"}">
                ${image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy" />` : `<span class="related-card-fallback-label">${escapeHtml(sourceLabel || getRelatedContentTypeLabel(item.type))}</span>`}
                <div class="related-card-overlay">
                  <span class="related-card-kind">${escapeHtml(getRelatedContentTypeLabel(item.type))}</span>
                  ${sourceLabel ? `<span class="related-card-source">${escapeHtml(sourceLabel)}</span>` : ""}
                </div>
              </div>
              <div class="related-card-body">
                <h4 class="related-card-title">${escapeHtml(title)}</h4>
                ${description ? `<p class="related-card-description">${escapeHtml(description)}</p>` : ""}
                <div class="related-card-meta">
                  <span class="related-card-language">${escapeHtml(t("relatedContentLanguageLabel"))}: ${escapeHtml(languageName)}</span>
                  <span class="related-card-cta">${escapeHtml(ctaLabel)}</span>
                </div>
                ${showLanguageDisclaimer ? `<p class="related-card-disclaimer">${escapeHtml(getContentLanguageDisclaimer(language))}</p>` : ""}
              </div>
            </a>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function getParableTracking(parableId) {
  const byParable = PARABLE_TRACKING[parableId];
  if (!byParable) return null;
  return byParable[currentLanguageCode] || byParable["pt-BR"] || null;
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function applyTrackingMarkup(text, tracking) {
  if (!tracking || !tracking.items || !tracking.items.length) return text;
  const termToTrackId = {};
  tracking.items.forEach((item) => {
    (item.matches || []).forEach((term) => {
      const key = term.toLocaleLowerCase();
      if (!termToTrackId[key]) termToTrackId[key] = item.id;
    });
  });
  const terms = Object.keys(termToTrackId).sort((a, b) => b.length - a.length);
  if (!terms.length) return text;
  const pattern = new RegExp(terms.map(escapeRegex).join("|"), "gi");
  return text.replace(pattern, (match) => {
    const trackId = termToTrackId[match.toLocaleLowerCase()];
    return trackId ? `<span class="track-hit" data-track-id="${trackId}">${match}</span>` : match;
  });
}

function setActiveTrack(parableId, trackId) {
  activeTrackByParable[parableId] = trackId || null;
  const root = document.querySelector(`#parabola-${parableId}`);
  if (!root) return;
  root.querySelectorAll(".track-hit, .explanation-item").forEach((el) => {
    const isActive = Boolean(trackId) && el.dataset.trackId === trackId;
    el.classList.toggle("is-active", isActive);
  });
}

function renderParableExplanation(parableId) {
  const container = document.querySelector(`#parable-${parableId}-explanation`);
  if (!container) return;
  const tracking = getParableTracking(parableId);
  if (!tracking) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <h3 class="explanation-title">${tracking.title}</h3>
    <ul class="explanation-list">
      ${tracking.items.map((item) => `
        <li class="explanation-item" data-track-id="${item.id}">
          <span class="explanation-item-term" data-track-id="${item.id}">${item.term}</span>
          <span class="explanation-item-sep"> - </span>
          <span class="explanation-item-meaning">${item.meaning}</span>
        </li>
      `).join("")}
    </ul>
  `;

  container.querySelectorAll(".explanation-item-term, .explanation-item").forEach((el) => {
    el.addEventListener("mouseenter", () => setActiveTrack(parableId, el.dataset.trackId));
    el.addEventListener("mouseleave", () => setActiveTrack(parableId, null));
  });

  setActiveTrack(parableId, activeTrackByParable[parableId] || null);
}

function applyStaticTranslations() {
  const strings = getUiStrings();
  document.documentElement.lang = currentLanguageCode;
  document.title = strings.appTitle;
  if (pageTitle) pageTitle.textContent = strings.appTitle;
  if (mobilePageTitle) mobilePageTitle.textContent = strings.appTitle;
  if (globalControls) globalControls.setAttribute("aria-label", strings.globalControlsAria);
  if (globalLanguageMenu) globalLanguageMenu.setAttribute("aria-label", strings.languageMenuAria);
  if (indexNav) indexNav.setAttribute("aria-label", strings.indexAria);
  if (parablesContainer) parablesContainer.setAttribute("aria-label", strings.parablesAria);
  if (parableSearchInput) {
    parableSearchInput.placeholder = strings.searchPlaceholder;
    parableSearchInput.setAttribute("aria-label", strings.searchAria);
  }
  if (mobileLanguageTrigger) mobileLanguageTrigger.setAttribute("aria-label", strings.mobileLanguageLabel);
  if (mobileLanguageDialogTitle) mobileLanguageDialogTitle.textContent = strings.languageDialogTitle;
  if (mobileLanguageClose) mobileLanguageClose.setAttribute("aria-label", strings.close);
  if (mobileLanguageMenu) mobileLanguageMenu.setAttribute("aria-label", strings.languageMenuAria);
  updateShareParableButtonState();
  updateShareMenuTranslations();
}

function getLanguageSelfLabel(code) {
  return LANGUAGE_SELF_LABELS[code] || PARABLES_API_DATA?.languages?.[code]?.label || code;
}

function getLanguageParables() {
  return PARABLES_API_DATA?.languages?.[currentLanguageCode]?.parables || null;
}

function getApiParable(parableId) {
  const languageParables = getLanguageParables();
  return languageParables ? languageParables[String(parableId)] : null;
}

function getStaticFallbackTitle(parableId) {
  const source = PARABLES.find((item) => item.id === parableId);
  return source ? source.title : "";
}

function getParableDisplayTitle(parableId) {
  const apiParable = getApiParable(parableId);
  if (!apiParable) return getStaticFallbackTitle(parableId);

  const selectedGospelKey = gospelSelectionByParable[parableId];
  const gospelData = selectedGospelKey ? apiParable.gospels[selectedGospelKey] : null;
  return pickDisplayTitle(gospelData, apiParable, getStaticFallbackTitle(parableId));
}

function getParableReferenceLine(parableId) {
  const apiParable = getApiParable(parableId);
  const refs = apiParable?.gospels
    ? Object.values(apiParable.gospels)
      .map((gospel) => (gospel.reference || "").trim())
      .filter(Boolean)
    : [];

  if (refs.length) return refs.join(" | ");

  const staticParable = PARABLES.find((item) => item.id === parableId);
  return (staticParable?.location || "").replace(/;\s*/g, " | ");
}

function normalizeSearchText(value) {
  return (value || "")
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getParableSearchCorpus(parableId) {
  const apiParable = getApiParable(parableId);
  if (!apiParable?.gospels) return "";
  return Object.values(apiParable.gospels)
    .map((gospel) => `${gospel.reference || ""}\n${gospel.title || ""}\n${gospel.text || ""}`)
    .join("\n");
}

function getFilteredParables() {
  const query = normalizeSearchText(searchQuery);
  if (!query) return PARABLES_BY_GOSPEL_LOCATION;

  const titleMatches = [];
  const contentMatches = [];

  PARABLES_BY_GOSPEL_LOCATION.forEach((parable) => {
    const titleText = normalizeSearchText(getParableDisplayTitle(parable.id));
    if (titleText.includes(query)) {
      titleMatches.push(parable);
      return;
    }

    const contentText = normalizeSearchText(getParableSearchCorpus(parable.id));
    if (contentText.includes(query)) {
      contentMatches.push(parable);
    }
  });

  return [...titleMatches, ...contentMatches];
}

function renderIndex() {
  const visibleParables = getFilteredParables();

  if (!visibleParables.length) {
    indexList.innerHTML = `<li class="index-empty">${t("noSearchResults")}</li>`;
    return;
  }

  indexList.innerHTML = visibleParables.map((parable) => `
    <li>
      <a href="#" class="${parable.id === currentParableId ? "is-active" : ""}" data-parable-id="${parable.id}">
        <span class="index-card-title">${getParableDisplayTitle(parable.id)}</span>
        <span class="index-card-ref">${getParableReferenceLine(parable.id)}</span>
      </a>
    </li>
  `).join("");

  indexList.querySelectorAll("a[data-parable-id]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const nextId = Number(link.dataset.parableId);
      if (!Number.isFinite(nextId)) return;
      currentParableId = nextId;
      currentView = "parable";
      renderApp();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  });
}

function renderParableArticle(parableId, options = {}) {
  const { showFooterNav = false } = options;
  const apiParable = getApiParable(parableId);
  const titleMarkup = `<span class="title-text">${getParableDisplayTitle(parableId)}</span>`;
  let footerMarkup = "";

  if (showFooterNav) {
    const currentIndex = PARABLES_BY_GOSPEL_LOCATION.findIndex((item) => item.id === parableId);
    const isFirst = currentIndex <= 0;
    const isLast = currentIndex >= PARABLES_BY_GOSPEL_LOCATION.length - 1;
    footerMarkup = `
      <div class="parable-footer-nav">
        <button type="button" class="nav-btn" id="prevParableBtn" ${isFirst ? "disabled" : ""}>${t("prev")}</button>
        <button type="button" class="nav-btn nav-btn-index" id="backToIndexBtn">${t("home")}</button>
        <button type="button" class="nav-btn" id="nextParableBtn" ${isLast ? "disabled" : ""}>${t("next")}</button>
      </div>
    `;
  }

  return `
    <article class="parable" id="parabola-${parableId}">
      <h2>${titleMarkup}</h2>
      ${apiParable ? `<div class="gospel-controls"><div id="parable-${parableId}-gospel-nav" class="gospel-nav"></div><div id="parable-${parableId}-verse-toggle" class="verse-toggle"></div></div><div id="parable-${parableId}-passage" class="passage-content"></div>` : `<p>${t("noParableContent")}</p>`}
      ${renderRelatedContentSection(parableId)}
      ${footerMarkup}
    </article>
  `;
}

function bindSingleParableFooter(parableId) {
  const currentIndex = PARABLES_BY_GOSPEL_LOCATION.findIndex((item) => item.id === parableId);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= PARABLES_BY_GOSPEL_LOCATION.length - 1;
  const prevBtn = document.querySelector("#prevParableBtn");
  const nextBtn = document.querySelector("#nextParableBtn");
  const backBtn = document.querySelector("#backToIndexBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (isFirst) return;
      currentParableId = PARABLES_BY_GOSPEL_LOCATION[currentIndex - 1].id;
      renderApp();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (isLast) return;
      currentParableId = PARABLES_BY_GOSPEL_LOCATION[currentIndex + 1].id;
      renderApp();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      currentView = "index";
      renderApp();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }
}

function renderCurrentParable() {
  const fallbackId = PARABLES_BY_GOSPEL_LOCATION[0]?.id || PARABLES[0]?.id || null;
  const resolvedId = currentParableId ?? fallbackId;
  const parable = PARABLES.find((item) => item.id === resolvedId) || PARABLES[0];
  if (!parable) return;
  if (currentParableId == null) currentParableId = parable.id;

  parablesContainer.innerHTML = renderParableArticle(parable.id, { showFooterNav: true });
  bindSingleParableFooter(parable.id);
  if (getApiParable(parable.id)) renderParablePassage(parable.id);
}

function renderApp() {
  applyStaticTranslations();
  if (pageHeader) {
    pageHeader.classList.toggle("is-visible-mobile", currentView === "index");
  }

  renderIndex();
  if (currentView === "index") {
    if (pageRoot) pageRoot.classList.add("is-index-view");
    if (indexSection) indexSection.classList.remove("is-hidden");
    if (searchBarSection) searchBarSection.classList.remove("is-hidden");
    parablesContainer.innerHTML = "";
    writeStateToUrl();
    return;
  }

  if (pageRoot) pageRoot.classList.remove("is-index-view");
  if (indexSection) indexSection.classList.add("is-hidden");
  if (searchBarSection) searchBarSection.classList.add("is-hidden");
  renderCurrentParable();
  writeStateToUrl();
}

function normalizePassageText(text) {
  return (text || "")
    .replace(/\s+\[(\d+)\]/g, "\n[$1]")
    .replace(/ +/g, " ")
    .trim();
}

function maybeHideVerseMarkers(text, showVerseMarkers) {
  if (showVerseMarkers) return text;
  return text
    .replace(/\[\d+\]\s*/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function stripInlinePassageTitle(text, title) {
  const normalized = (text || "").trim();
  const cleanTitle = (title || "").trim();
  if (!normalized) return normalized;
  const lines = normalized
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  if (!lines.length) return "";

  // Remove heading-like lines before the first verse marker (e.g. "The Wise and Foolish Builders").
  const firstVerseIdx = lines.findIndex((line) => /\[\d+\]/.test(line));
  if (firstVerseIdx > 0) {
    return lines.slice(firstVerseIdx).join("\n").trim();
  }

  if (!cleanTitle) return lines.join("\n").trim();
  const firstLine = lines[0];
  const firstLineCanonical = firstLine.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  const titleCanonical = cleanTitle.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  if (firstLineCanonical && titleCanonical && firstLineCanonical === titleCanonical) {
    return lines.slice(1).join("\n").trim();
  }
  return lines.join("\n").trim();
}

function canonicalizeTitle(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]/g, "");
}

function pickDisplayTitle(gospelData, langData, fallback) {
  const apiTitle = (gospelData?.title || "").trim();
  if (!apiTitle) return langData?.popular_title || fallback;
  const ref = canonicalizeTitle(gospelData?.reference || "");
  const title = canonicalizeTitle(apiTitle);
  if (ref && title && (title === ref || title.startsWith(ref))) {
    return langData?.popular_title || fallback;
  }
  return apiTitle;
}

function renderParablePassage(parableId) {
  if (!PARABLES_API_DATA) return;
  const nav = document.querySelector(`#parable-${parableId}-gospel-nav`);
  const content = document.querySelector(`#parable-${parableId}-passage`);
  const verseToggleContainer = document.querySelector(`#parable-${parableId}-verse-toggle`);
  const titleEl = document.querySelector(`#parabola-${parableId} .title-text`);
  if (!nav || !content) return;

  const langParables = getLanguageParables();
  if (!langParables) return;
  const parableData = langParables[String(parableId)];
  if (!parableData) return;

  const gospelEntries = Object.entries(parableData.gospels || {});
  if (!gospelEntries.length) return;
  const hasCompareOption = gospelEntries.length > 1;
  const selectedKey = gospelSelectionByParable[parableId];
  const isSelectionValid = Boolean(parableData.gospels[selectedKey]) || (hasCompareOption && selectedKey === COMPARE_ALL_KEY);
  if (!isSelectionValid) {
    gospelSelectionByParable[parableId] = gospelEntries[0][0];
  }

  const navItems = [
    ...gospelEntries.map(([key, data]) => `<button type="button" class="gospel-link ${key === gospelSelectionByParable[parableId] ? "is-active" : ""}" data-gospel="${key}">${data.reference}</button>`)
  ];
  if (hasCompareOption) {
    navItems.push(`<button type="button" class="gospel-link ${gospelSelectionByParable[parableId] === COMPARE_ALL_KEY ? "is-active" : ""}" data-gospel="${COMPARE_ALL_KEY}">${t("compareAll")}</button>`);
  }
  nav.innerHTML = navItems.join('<span class="gospel-divider">|</span>');

  nav.querySelectorAll(".gospel-link").forEach((button) => {
    button.addEventListener("click", () => {
      gospelSelectionByParable[parableId] = button.dataset.gospel;
      renderParablePassage(parableId);
      if (currentView === "index") renderIndex();
    });
  });

  const showVerseMarkers = Boolean(showVerseMarkersByParable[parableId]);
  if (verseToggleContainer) {
    verseToggleContainer.innerHTML = `
      <label class="verse-toggle-label">
        <input type="checkbox" class="verse-toggle-input" ${showVerseMarkers ? "checked" : ""} />
        <span>${t("showVerses")}</span>
      </label>
    `;
    const input = verseToggleContainer.querySelector(".verse-toggle-input");
    if (input) {
      input.addEventListener("change", () => {
        showVerseMarkersByParable[parableId] = input.checked;
        renderParablePassage(parableId);
      });
    }
  }

  const gospelData = parableData.gospels[gospelSelectionByParable[parableId]];
  const isCompareMode = hasCompareOption && gospelSelectionByParable[parableId] === COMPARE_ALL_KEY;
  if (!gospelData && !isCompareMode) return;

  if (titleEl) {
    titleEl.textContent = pickDisplayTitle(gospelData, parableData, getStaticFallbackTitle(parableId));
  }

  if (isCompareMode) {
    content.classList.add("is-comparison");
    content.innerHTML = `
      <div class="comparison-grid">
        ${gospelEntries.map(([key, data]) => {
          const noInlineTitle = stripInlinePassageTitle(data.text || "", data.title || "");
          const text = maybeHideVerseMarkers(normalizePassageText(noInlineTitle), showVerseMarkers);
          const paragraphs = text
            .split("\n")
            .filter(Boolean)
            .map((line) => `<p>${line}</p>`)
            .join("");
          return `
            <article class="comparison-column ${key === gospelSelectionByParable[parableId] ? "is-selected" : ""}">
              <h3 class="comparison-reference">${data.reference}</h3>
              <div class="comparison-text">${paragraphs || `<p>${t("noPassageContent")}</p>`}</div>
            </article>
          `;
        }).join("")}
      </div>
    `;
    return;
  }

  content.classList.remove("is-comparison");
  const noInlineTitle = stripInlinePassageTitle(gospelData.text, gospelData.title || "");
  const cleaned = maybeHideVerseMarkers(normalizePassageText(noInlineTitle), showVerseMarkers);
  content.innerHTML = cleaned
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${line}</p>`)
    .join("");
}

function initGlobalVersionUI() {
  if (!globalLanguageTrigger || !globalLanguageMenu || !globalLanguageFlag || !globalLanguageLabel) {
    return;
  }

  const closeMobileLanguageDialog = () => {
    if (!mobileLanguageDialog) return;
    mobileLanguageDialog.classList.remove("is-open");
    mobileLanguageDialog.setAttribute("aria-hidden", "true");
    if (mobileLanguageTrigger) mobileLanguageTrigger.setAttribute("aria-expanded", "false");
  };

  const openMobileLanguageDialog = () => {
    if (!mobileLanguageDialog) return;
    mobileLanguageDialog.classList.add("is-open");
    mobileLanguageDialog.setAttribute("aria-hidden", "false");
    if (mobileLanguageTrigger) mobileLanguageTrigger.setAttribute("aria-expanded", "true");
  };

  const renderLanguageMenu = () => {
    if (!PARABLES_API_DATA) {
      globalLanguageMenu.innerHTML = "";
      if (mobileLanguageMenu) mobileLanguageMenu.innerHTML = "";
      return;
    }
    const languages = Object.keys(PARABLES_API_DATA.languages)
      .sort((a, b) => getLanguageSelfLabel(a).localeCompare(getLanguageSelfLabel(b), undefined, { sensitivity: "base" }));
    const optionsMarkup = languages
      .map((code) => `<button type="button" class="lang-option" role="option" data-lang="${code}" aria-selected="false"><span class="lang-flag">${getLanguageFlag(code)}</span><span>${getLanguageSelfLabel(code)}</span></button>`)
      .join("");
    globalLanguageMenu.innerHTML = optionsMarkup;
    if (mobileLanguageMenu) mobileLanguageMenu.innerHTML = optionsMarkup;

    globalLanguageMenu.querySelectorAll(".lang-option").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
        langPicker.classList.remove("is-open");
        globalLanguageTrigger.setAttribute("aria-expanded", "false");
        closeMobileLanguageDialog();
      });
    });
    if (mobileLanguageMenu) {
      mobileLanguageMenu.querySelectorAll(".lang-option").forEach((button) => {
        button.addEventListener("click", () => {
          setLanguage(button.dataset.lang);
          langPicker.classList.remove("is-open");
          globalLanguageTrigger.setAttribute("aria-expanded", "false");
          closeMobileLanguageDialog();
        });
      });
    }
  };

  const setLanguage = (code) => {
    if (PARABLES_API_DATA && !PARABLES_API_DATA.languages[code]) return;
    currentLanguageCode = code;
    applyStaticTranslations();
    const label = PARABLES_API_DATA ? getLanguageSelfLabel(code) : "Português (Brasil)";
    globalLanguageFlag.textContent = getLanguageFlag(code);
    globalLanguageLabel.textContent = label;
    if (mobileLanguageFlag) mobileLanguageFlag.textContent = getLanguageFlag(code);
    globalLanguageMenu.querySelectorAll(".lang-option").forEach((button) => {
      const isSelected = button.dataset.lang === code;
      button.classList.toggle("is-active", isSelected);
      button.setAttribute("aria-selected", isSelected ? "true" : "false");
    });
    if (mobileLanguageMenu) {
      mobileLanguageMenu.querySelectorAll(".lang-option").forEach((button) => {
        const isSelected = button.dataset.lang === code;
        button.classList.toggle("is-active", isSelected);
        button.setAttribute("aria-selected", isSelected ? "true" : "false");
      });
    }
    renderApp();
  };

  globalLanguageTrigger.addEventListener("click", () => {
    const willOpen = !langPicker.classList.contains("is-open");
    langPicker.classList.toggle("is-open", willOpen);
    globalLanguageTrigger.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    if (!langPicker.contains(event.target)) {
      langPicker.classList.remove("is-open");
      globalLanguageTrigger.setAttribute("aria-expanded", "false");
    }
    if (sharePicker && !sharePicker.contains(event.target)) {
      closeShareMenu();
    }
  });
  if (pageTitle) {
    pageTitle.addEventListener("click", () => {
      currentView = "index";
      currentParableId = null;
      searchQuery = "";
      if (parableSearchInput) parableSearchInput.value = "";
      renderApp();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }
  if (mobileLanguageTrigger) {
    mobileLanguageTrigger.addEventListener("click", () => {
      const isOpen = mobileLanguageDialog?.classList.contains("is-open");
      if (isOpen) closeMobileLanguageDialog();
      else openMobileLanguageDialog();
    });
  }
  if (mobileLanguageClose) {
    mobileLanguageClose.addEventListener("click", closeMobileLanguageDialog);
  }
  if (mobileLanguageBackdrop) {
    mobileLanguageBackdrop.addEventListener("click", closeMobileLanguageDialog);
  }
  if (shareParableTrigger) {
    shareParableTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = sharePicker?.classList.contains("is-open");
      if (isOpen) closeShareMenu();
      else openShareMenu();
    });
  }
  if (shareParableMenu) {
    shareParableMenu.querySelectorAll(".share-option").forEach((button) => {
      button.addEventListener("click", async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const action = button.dataset.shareAction;
        if (!action) return;
        closeShareMenu();
        await runShareAction(action);
      });
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileLanguageDialog();
      closeShareMenu();
    }
  });

  const initialState = readStateFromUrl();
  currentView = initialState.view;
  currentParableId = initialState.parableId;

  renderLanguageMenu();
  setLanguage(PARABLES_API_DATA ? "pt-BR" : currentLanguageCode);
}

initGlobalVersionUI();
if (parableSearchInput) {
  parableSearchInput.addEventListener("input", () => {
    searchQuery = parableSearchInput.value || "";
    if (currentView === "index") renderIndex();
  });
}
window.addEventListener("popstate", () => {
  const state = readStateFromUrl();
  currentView = state.view;
  currentParableId = state.parableId;
  renderApp();
});
if (!PARABLES_API_DATA) {
  renderApp();
}
