// ============================================================
// ROMAGNA AFFITTI BREVI — File dati struttura
// ============================================================
// Modifica SOLO questo file per personalizzare il sito.
// Il file App.jsx legge tutti i dati da qui.
// ============================================================

export const STRUTTURA = {

  // ── IDENTITA ──────────────────────────────────────────────
  nome:   "La Perla del Mare",
  slug:   "la-perla-del-mare",
  tipo:   "Appartamento vacanze",
  airbnb: "https://www.airbnb.it/rooms/1310946139319199865",

  // ── INDIRIZZO ─────────────────────────────────────────────
  indirizzo: "Viale XXV Luglio 13C",
  citta:     "Cesenatico",
  provincia: "FC",
  cap:       "47042",
  regione:   "Emilia-Romagna",

  // ── LINGUE (switcher in navbar) ───────────────────────────
 lingue: [
  { code: "IT", url: "https://La-Perla-Cesenatico.vercel.app/" },
  { code: "EN", url: "https://la-perla-cesenatico-en.vercel.app/" },
],

  // ── HERO ──────────────────────────────────────────────────
  heroTagline:    "Cesenatico · Emilia-Romagna · Appartamento",
  heroTitle:      "La Perla del Mare",
  heroTitleItalic:"un angolo di paradiso sulla Riviera Romagnola.",
  heroSubtitle:   "A 400 metri dalla spiaggia, nel cuore di Cesenatico. Spazi luminosi, garage privato con biciclette, ascensore e aria condizionata ovunque.",

  // Statistiche sotto i bottoni hero (max 4)
  stats: [
    { v: "★★★★★", l: "Rating Airbnb" },
    { v: "6",      l: "Ospiti max" },
    { v: "400 mt", l: "dalla spiaggia" },
    { v: "15 min", l: "da Cesena" },
  ],

  // ── APPARTAMENTO ──────────────────────────────────────────
  aptTitle:       "Sentiti in vacanza",
  aptTitleItalic: "sin dal primo momento.",
  aptDescrizione: "Situato nel cuore di Cesenatico, a pochi passi dal mare, La Perla del Mare e l'alloggio perfetto per famiglie e gruppi di amici. Ampi e luminosi spazi, ascensore, balconi e garage privato rendono questo appartamento l'opzione ideale per ogni tipo di ospite. Uno dei plus e il box privato con biciclette incluse — una rarita in zona. L'alloggio e esposto a sud e gode della massima esposizione al sole. Ideale anche per chi lavora in smart grazie al Wi-Fi veloce.",

  // 6 card servizi
  amenities: [
    { icon: "🛋️", title: "Salotto luminoso",       desc: "Grande soggiorno con smart TV, divano doppio e tavolo da pranzo per 6 persone" },
    { icon: "👨‍🍳", title: "Cucina completa",        desc: "Forno, lavastoviglie, macchinetta del caffe e tutto il necessario per cucinare" },
    { icon: "💻", title: "WiFi fibra veloce",       desc: "Connessione super veloce, ideale per lo smart working" },
    { icon: "🚗", title: "Box auto privato",        desc: "Garage privato al piano interrato con biciclette incluse e spazio bagagli" },
    { icon: "🌡️", title: "A/C & riscaldamento",    desc: "Aria condizionata in ogni stanza — perfetto in estate e in inverno" },
    { icon: "🛁", title: "Bagno attrezzato",        desc: "Doccia, sanitari sospesi, asciugacapelli, shampoo, sapone e gel doccia inclusi" },
  ],

  // ── POSIZIONE ─────────────────────────────────────────────
  distanze: [
    { label: "Mare e spiaggia",         time: "400 mt",  mode: "A piedi" },
    { label: "Negozi e ristoranti",     time: "5 min",   mode: "A piedi" },
    { label: "Parco di Levante",        time: "4 min",   mode: "A piedi" },
    { label: "Parco Kinderland",        time: "2 min",   mode: "A piedi" },
    { label: "Porto Canale Leonardesco",time: "10 min",  mode: "A piedi" },
    { label: "Cesena",                  time: "15 min",  mode: "In auto" },
    { label: "Rimini",                  time: "30 min",  mode: "In auto" },
    { label: "Bertinoro",               time: "25 min",  mode: "In auto" },
    { label: "Repubblica di San Marino",time: "35 min",  mode: "In auto" },
    { label: "Bologna",                 time: "60 min",  mode: "In auto" },
  ],

  // Esperienze locali consigliate
  esperienze: [
    { icon: "🚴", title: "Bicicletta fino al mare",        desc: "Con le bici incluse nel garage raggiungi la spiaggia in pochi minuti. Lungomare, stabilimenti balneari e aperitivi vista Adriatico." },
    { icon: "⛵", title: "Porto Canale Leonardesco",       desc: "A 10 minuti a piedi il porto storico di Cesenatico, progettato da Leonardo da Vinci nel 1502. Pesce fresco, mercatini e atmosfera autentica." },
    { icon: "🌿", title: "Parco di Levante",               desc: "A 4 minuti a piedi: 40 ettari di prato, pineta, pioppi e querce con laghetti, fauna selvatica e area dog-friendly." },
    { icon: "🍝", title: "Piadina e pesce fresco",         desc: "Cesenatico e la capitale della piadina romagnola e del pesce fresco. Ristoranti e piadinerie a 5 minuti a piedi." },
    { icon: "🏰", title: "San Marino & Borghi medievali",  desc: "La Serenissima Repubblica a 35 minuti. Bertinoro, il Balcone della Romagna, a 25 minuti — panorama mozzafiato sull'Adriatico." },
    { icon: "🎡", title: "Estate sulla Riviera",           desc: "Concerti, eventi, mercatini e notti di luna sulla Riviera Romagnola. Cesenatico si anima da giugno a settembre." },
  ],

  // ── TESTIMONIANZE ─────────────────────────────────────────
  testimonianze: [
    { quote: "L'alloggio si presenta come nelle foto, accogliente, pulito e di ogni comfort. Si trova in una posizione tranquilla e vicino a tutto — mare, ristoranti e negozi a 10 minuti a piedi. I consigli su cosa fare in zona sono stati molto utili.", name: "Nicole", origin: "Parigi, Francia" },
    { quote: "La casa e pulita e lo spazio distribuito in maniera perfetta per le nostre esigenze. Il box privato e le biciclette sono stati un plus enorme — rarissimo trovarlo in zona.", name: "Emanuele", origin: "Roma, Italia" },
    { quote: "L'appartamento e davvero carino e tenuto molto bene. Il riscaldamento funzionava benissimo, io e la mia famiglia abbiamo trascorso un capodanno felice. Grazie di tutto!", name: "Francesco", origin: "Como, Italia" },
    { quote: "Appartamento spazioso, luminoso e dotato di tutti i comfort. La posizione e ottima — vicinissimi al mare e ai servizi. Torneremo sicuramente.", name: "Marco & Giulia", origin: "Milano, Italia" },
  ],

  // ── SEZIONE ABOUT / LA NOSTRA STORIA ─────────────────────
  aboutTitolo:       "Una perla sul mare,",
  aboutTitoloItalic: "nel cuore di Cesenatico.",
  aboutTesto1: "La Perla del Mare si trova a Viale XXV Luglio 13C, nel cuore di Cesenatico — una delle localita balneari piu amate della Riviera Romagnola. A soli 400 metri dal mare, l'appartamento e immerso in un quartiere ricco di servizi, ristoranti, negozi e attrazioni.",
  aboutTesto2: "L'appartamento e stato progettato per offrire il massimo comfort a famiglie e gruppi di amici. Il box auto privato con biciclette incluse e l'ascensore lo rendono accessibile e pratico per ogni tipo di ospite — dal turista estivo allo smart worker in cerca di qualita di vita.",

  aboutPunti: [
    "400 mt dalla spiaggia · 5 min a piedi da negozi e ristoranti",
    "4 min a piedi dal Parco di Levante (40 ettari di natura)",
    "Box auto privato con biciclette incluse",
    "Ascensore · Appartamento esposto a sud",
    "15 min da Cesena · 30 min da Rimini · 35 min da San Marino",
  ],

  // ── COME FUNZIONA (4 step) ────────────────────────────────
  steps: [
    { n: "01", t: "Cerca & Prenota",    b: "Trovaci su Airbnb. Leggi le recensioni di chi ha gia trascorso le vacanze sulla Riviera da qui." },
    { n: "02", t: "Confermiamo",        b: "Ricevi accesso completo, consigli locali e suggerimenti personalizzati per il tuo soggiorno." },
    { n: "03", t: "Check-in autonomo",  b: "Arriva quando vuoi. La smartlock ti aspetta. Zero code, zero reception." },
    { n: "04", t: "Vivi la Riviera",    b: "Bicicletta fino al mare, pesce fresco al porto, aperitivo sul lungomare. Questa e la tua Cesenatico." },
  ],

  // ── PROPERTY MANAGER ──────────────────────────────────────
  propertyManager:      "Cesare & Anna",
  propertyManagerEmail: "info@romagna-affitti-brevi.it",
};
