// Italiano

export default {
    //main.ts
    'Open Dictionary View': 'Apri la schermata del dizionario',
    'Open Language Switcher': 'Apri le impostazioni della lingua',

    //_constants.ts
    'Dictionary': 'Dizionario',

    //customContextMenu.ts
    'Cut': 'Taglia',
    'Copy': 'Copia',
    'Paste': 'Incolla',
    'Show Synonyms': 'Mostra i sinonimi',
    'Look up': 'Cerca',

    //settingsTab.ts
    "Reset to default": "Resetta le impostazioni",
    'Dictionary Settings': 'Impostazioni del dizionario',
    'Language': 'Lingua',
    'The Language the Plugin will use to search for Definitions and Pronunciations.': 'La lingua che il plugin utilizzarà per cercare le definizioni e la pronuncia.',
    'Synonym Suggestions': 'Suggerisci sinonimi',
    'Show synonyms for highlighted words': 'Mostra i sinonimi per le parole evidenziate',
    'Enabling this will allow the Plugin to analyze full sentences to better suggest synonyms based on the context.': 'Attivando questa opzione il plugin analizzarà l\'intera frase per migliorare il suggerimento dei sinonimi basati sul contesto.',
    'Click ': 'Clicca ',
    'here': 'qui',
    ' for Privacy Concerns.': ' for Privacy Concerns.',
    'Advanced Synonym Search': 'Ricerca sinonimi avanzata',
    'Show Options in Context Menu': 'Mostra le opzioni nel menu contestuale',
    'Enable custom Context Menu with options to search for synonyms (only if the auto suggestions are disabled) and to look up a full definition in the Sidebar. Warning: This will override Obsidian\'s default Context Menu.': 'Abilita i menucontestuali personalizzati con le opzioni di ricerca dei sinonimi (solo se i suggerimenti automatici sono disattivati) e cerca una definizione intera nella barra laterale. Attenzione: questa opzione sovrascriverà il menu contestuale di default di Obsidian.',
    'Click Here': 'Clicca qui',
    'Definition Provider': 'Provider di definizioni',
    'The API the Plugin will use to search for Definitions.': 'Le API utilizzate dal plugin per cercare le definizioni.',
    'Synonym Provider': 'Provider di sinonimi',
    'The API the Plugin will use to search for Synonyms.': 'Le API utilizzate dal plugin per cercare i sinonimi.',
    'More Information': 'Altre informazioni',
    'View Information about the API\'s and the Plugin itself.': 'Vai alle informazioni riguardanti le API e il plugin.',
    'More Info': 'Altre informazioni',
    'Donate': 'Dona',
    'If you like this Plugin, consider donating to support continued development:': 'Se ti piace il plugin, considera di donare per sostenere lo sviluppo',
    'Local Dictionary Folder': 'Cartella locale del dizionario',
    'Specify a Folder, where all new Notes created by the Dictionary are placed. Please note that this Folder needs to already exist.': 'Specifica una cartella dove inserire tutte le note create dal dizionario. Fai attenzione che questa cartella deve già esistere.',
    'Capitalize File Name': 'Rendi il nome del file maiuscolo',
    'If you disable this, the names of newly created files will be all lowercase.': 'Se disabiliti questa opzione i nomi dei file creati saranno tutti in minuscolo.',
    'Filename Prefix and Suffix': 'Suffisso e prefisso del nome del file',
    'Here you can add a Prefix and Suffix for your newly created Files.': 'Qui puoi aggiungere un prefisso e un suffisso per i nuovi file creati. Puoi usare la variabile {{lang}} qui.',
    "Prefix": "Prefisso",
    "Suffix": "Suffisso",
    'Here you can edit the Template for newly created Files.': 'Qui puoi modificare il template dei nuovi file creati.',
    'Click for a List of Variables': 'Clicca per vedere la lista delle variabili',
    'Meaning splitter': 'Significato separatore',
    'Here you can decide splitter for every single meaning.': 'Qui puoi decidere lo splitter per ogni singolo significato. L\'impostazione predefinita è "---"',
    'Template': 'Template',
    "Local-Dictionary-Builder Settings": "Impostazioni del dizionario locale",
    "Miscellaneous": "Altre",
    "Caching Settings": "Impostazioni di caching",
    "Use Caching": "Usa il caching",
    "Enable or disable caching. Caching provides a semi-offline experience by saving every result for later use.": "Attiva o disattiva la cache. La cache fornisce un\'esperienza offline tramite il salvataggio di ogni risultato per un uso successivo.",
    'Here you can delete all cached Data.': 'Qui puoi cancellare tutti i dati nella cache.',
    "You currently have ": "Al momento ci sono ",
    " cached Definitions and ": " definizioni nella cache e ",
    " cached Synonyms.": " sinonimi nella cache.",
    "Delete Cache": "Cancella la cache",
    "Delete": "Elimina",
    "Success": "Operazione avvenuta con successo",
    'Use Language specific Subfolders': 'Usa cartelle specifiche per la lingua',
    'Create Subfolders for every language, e.g. "Dictionary/en-US/Cake"': 'Crea cartelle specifiche per ogni lingua, ad esempio "Dictionary/en-US/Cake"',


    //localDictionaryBuilder.ts
    'Autogenerated by Obsidian Dictionary Plugin': 'Generate in automatico da Obsidian Dictionary Plugin',
    "Yes, overwrite the old File.": "Si, sovrascrivi i vecchi file.",
    "A existing File with the same Name was found, do you want to overwrite it?": "È stato trovato un file con lo stesso nome, lo vuoi sovrascrivere?",
    "No, keep the old File.": "No, mantieni il vecchio file.",
    "Meaning {{i}}": "Significato {{i}}",


    //infoModal.svelte
    'API Information': 'Informazioni API',
    'Definition API\'s': 'Definizioni API',
    'Website': 'Sito web',
    'Synonym API\'s': 'API dei sinonimi',
    'Part of Speech API\'s': 'API per la parte parlata',
    'This Plugin is using <a href="https://feathericons.com/">Feather Icons</a>': 'Questo plugin sta usando <a href="https://feathericons.com/">Feather Icons</a>',

    //dictionaryView.svelte
    'Enter a word': 'Inserisci una parola',
    "Clear": "Cancella",
    "Change Language": "Cambia lingua",
    "Change Provider": "Cambia provider",
    "Collapse Results": "Comprimi i risultati",
    'Pronunciation': 'Pronuncia',
    'Meanings': 'Significati',
    "Origin": "Origini",
    'New Note': 'Nuova nota',
    "View Error": "Vedi gli errori",
    "Match Case": "Match Case",
    "Copied \"{{word}}\" to clipboard": "\"{{word}}\" copiato negli appunti",

    //errorComponent.ts
    'I can\'t find the word you are looking for or the server can\'t be reached. You can try again in a few minutes.': 'Non posso trovare le parole che stai cercando o il server non è raggiungibile. Riprova tra qualche minuto.',

    //meaningComponent.ts
    'Definition:': 'Definizione:',
    'Synonyms:': 'Sinonimi:',
    'Antonyms:': 'Contrari:',

    //modals
    "Choose a Definition Provider Service": "Scegli un provider di definizioni",
    "Choose a Language": "Scegli una lingua",
    "Choose a Synonym Provider Service": "Scegli un provider di sinonimi",
};
