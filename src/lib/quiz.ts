export const quiz = [
	{
		id: 'info_type',
		heading: 'Soort informatie',
		question:
			'Wat voor soort informatie ga je publiceren? Kies de beschrijving die het beste past.',
		options: [
			'brief',
			'formulier',
			'handleiding',
			'kennisgeving',
			'nieuwsbericht',
			'nota',
			'presentatie',
			'rapport',
			'vergaderstuk',
			'anders'
		]
	},
	{
		id: 'doelgroep',
		heading: 'Doel en doelgroep',
		question:
			'Is het duidelijk voor wie deze informatie bestemd is en wat de ontvanger er mee moet doen?',
		options: ['ja', 'min of meer', 'nee']
	},
	{
		id: 'doelgroep_confirm',
		heading: 'Doel en doelgroep',
		when: (state) => state.doelgroep === 'min of meer' || state.doelgroep === 'nee',
		question:
			'Als je niet scherp hebt voor wie deze informatie bestemd is of welke actie je verwacht van de ontvanger, vraag je dan af of er wel een goede reden is waarom deze informatie online moet worden gezet. Wat wil je doen?',
		options: ['toch doorgaan', 'stoppen']
	},
	{
		id: 'readable_tablet',
		heading: 'Apparaten waarop de informatie gelezen wordt',
		when: (state) => state.doelgroep_confirm !== 'stoppen',
		question: 'Dient de informatie leesbaar zijn op smartphone of tablet?',
		options: ['ja', 'nee']
	},
	{
		id: 'readable_pc',
		heading: 'Apparaten waarop de informatie gelezen wordt',
		when: (state) => state.doelgroep_confirm !== 'stoppen',
		question: 'Dient de informatie leesbaar zijn op laptop of pc?',
		options: ['ja', 'nee']
	},
	{
		id: 'readable_print',
		heading: 'Apparaten waarop de informatie gelezen wordt',
		when: (state) => state.doelgroep_confirm !== 'stoppen',
		question: 'Is de informatie ook om te printen?',
		options: ['ja', 'nee']
	},
	{
		id: 'readable_devices_confirm',
		heading: 'Apparaten waarop de informatie gelezen wordt',
		when: (state) =>
			state.readable_print === 'ja' &&
			state.readable_pc === 'nee' &&
			state.readable_tablet === 'nee',
		question:
			'Je hebt aangegeven dat de informatie alleen bestemd is om op papier afgedrukt en gelezen te worden. Je hebt de wettelijke verplichting om informatie digitaal toegankelijk aan te bieden, zodat ook bijvoorbeeld blinden, slechtzienden en dyslectici deze kunnen verwerken. De beslisboom houdt hier rekening mee. Wil je je keuze nog wijzigen? (dit is niet verplicht)',
		options: ['ja', 'nee']
	},
	{
		id: 'readable_tablet_reconsider',
		heading: 'Apparaten waarop de informatie gelezen wordt',
		when: (state) =>
			state.readable_pc === 'ja' &&
			state.readable_tablet === 'nee' &&
			state.readable_devices_confirm !== 'ja',
		question:
			'Je hebt aangegeven dat de informatie wel op een laptop of PC leesbaar moet zijn, maar niet op smartphone of tablet. Onderzoek wijst uit dat 50% van het bezoek aan overheidswebsites van mobiele apparaten komt. Dient de informatie ook op mobiel te worden gelezen?',
		options: ['ja', 'nee']
	},
	{
		id: 'form_how',
		heading: 'Bewerkbaar of niet',
		when: (state) => state.info_type === 'formulier' && state.doelgroep_confirm !== 'stoppen',
		question: 'Hoe moet de gebruiker het formulier invullen?',
		options: ['online', 'in een editor', 'afdrukken en handmatig invullen']
	},
	{
		id: 'editing',
		heading: 'Bewerkbaar of niet',
		when: (state) => state.info_type !== 'formulier' && state.doelgroep_confirm !== 'stoppen',
		question: 'Moet de ontvanger het bestand bewerken?',
		options: ['ja', 'nee']
	},
	{
		id: 'local_editing',
		heading: 'Lokaal bewaren',
		when: (state) => state.doelgroep_confirm !== 'stoppen',
		question: 'Is het van belang dat de ontvanger lokaal een kopie van de informatie kan bewaren?',
		options: ['ja', 'nee', 'weet ik niet']
	},
	{
		id: 'archiving',
		heading: 'Archiveren',
		when: (state) => state.doelgroep_confirm !== 'stoppen',
		question: 'Moet de informatie gearchiveerd worden volgens de Archiefwet?',
		options: ['ja', 'nee', 'weet ik niet']
	},
	{
		id: 'reuse',
		heading: 'Hergebruik van data',
		when: (state) => state.doelgroep_confirm !== 'stoppen',
		question:
			'Bevat de publicatie gegevens (data) die andere organisaties kunnen hergebruiken? Denk bijvoorbeeld aan verkiezingsgegevens, waterstanden of statistieken.',
		options: ['ja', 'nee', 'weet ik niet']
	},
	{
		id: 'online_copies',
		heading: 'Kopieën online',
		when: (state) => state.doelgroep_confirm !== 'stoppen',
		question: 'Is het goed dat je bestand ook op websites van derden terecht komt?',
		options: ['ja', 'nee']
	},
	{
		id: 'online_copies_vs_local',
		heading: 'Kopieën online',
		when: (state) => state.online_copies === 'nee' && state.local_editing === 'ja',
		question:
			'Je hebt eerder aangegeven dat de ontvanger het bestand lokaal moet kunnen opslaan. Als je een bestand voor download aanbiedt, dan kan het ook op andere websites terecht komen. Is het downloaden het belangrijkst?',
		options: ['ja', 'nee']
	}
] satisfies Quiz;

export const results = [
	{
		when: (state) =>
			state.info_type === 'formulier' && state.form_how === 'afdrukken en handmatig invullen',
		results: [
			'Het afdrukken, invullen en terugsturen van informatie voldoet niet aan de eisen van digitale toegankelijkheid en is niet meer van deze tijd. Overweeg om dit formulier online aan te bieden in digitaal toegankelijke HTML.',
			'Is dat onmogelijk, bied het formulier dan aan in <b>PDF</b> of <b>ODF</b> en zorg dat het bestand voldoet aan de <b>WCAG 2.1</b> richtlijnen voor digitale toegankelijkheid.'
		],
		fileTypes: ['PDF', 'ODF']
	},
	{
		when: (state) => state.info_type === 'formulier' && state.form_how === 'in een editor',
		results: [
			'Het in een editor invullen van een formulier en per e-mail terugsturen of uploaden is niet meer van deze tijd. Overweeg om dit formulier online aan te bieden in digitaal toegankelijke <b>HTML</b>.',
			'Is dat onmogelijk, bied het formulier dan aan in <b>PDF</b> of <b>ODF</b> en zorg dat het bestand voldoet aan de <b>WCAG 2.1</b> richtlijnen voor digitale toegankelijkheid.'
		],
		fileTypes: ['PDF', 'ODF']
	},
	{
		when: (state) => state.info_type === 'formulier' && state.form_how === 'online',
		results: [
			'Voor digitale toegankelijkheid is het inderdaad het beste om een formulier online aan te bieden in <b>HTML</b>. Zorg wel dat het formulier digitaal toegankelijk is volgens de <b>WCAG 2.1</b> richtlijnen.'
		],
		fileTypes: ['HTML']
	},
	{
		when: (state) => state.info_type === 'presentatie',
		results: [
			'Als je een presentatie online publiceert, doe dat dan niet in PowerPoint want dat is een leveranciersafhankelijk format. PowerPoint presentaties voldoen meestal niet aan de eisen van digitale toegankelijkheid. Ook niet als je ze omzet naar PDF.',
			'Als je de originele presentatie toch in PDF online wilt zetten, publiceer dan <b>daarnaast</b> een <b>digitaal toegankelijke versie</b> in <b>HTML</b> of <b>EPUB</b>. Dan voldoe je toch aan de wetgeving.'
		],
		fileTypes: ['ODF', 'PDF', 'HTML', 'EPUB']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.editing === 'ja',
		results: [
			'Je hebt aangegeven dat de ontvanger het bestand moet kunnen bewerken. In dit geval kan je het beste publiceren in het open standaard format <b>ODF</b>. De ontvanger kan ODF bestanden bewerken met gratis software zoals LibreOffice en met Microsoft Office. Vermijd publicatie in Word, Excel en Powerpoint. Dit zijn leveranciersafhankelijke formats.'
		],
		fileTypes: ['ODF']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			(((state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
				state.readable_pc === 'nee' &&
				state.readable_print === 'nee') ||
				((state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
					state.readable_pc === 'ja' &&
					state.readable_print === 'nee') ||
				((state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
					state.readable_pc === 'ja' &&
					state.readable_print === 'ja')) &&
			(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
			state.local_editing === 'ja' &&
			state.online_copies_vs_local !== 'nee',
		results: [
			'Je gaf aan dat je informatie vooral op smartphones en tablets gelezen wordt. Ook gaf je aan dat de ontvanger het bestand lokaal moet kunnen opslaan.',
			'Publiceer je informatie in <b>EPUB</b>. EPUB past de weergave van de informatie aan het mobiele apparaat aan en is goed digitaal toegankelijk te maken. Bovendien kan een  EPUB bestand worden gedownload, lokaal bewaard en gelezen.',
			'Let wel op dat EPUB bestanden kunnen worden gekopieerd en op andere websites terecht kunnen komen. Je gaf aan dat je daar geen problemen mee hebt.',
			'Overweeg om je informatie <b>ook in HTML</b> te publiceren voor gebruikers die geen behoefte hebben om de informatie te downloaden.',
			'<b>Gebruik geen PDF</b>. PDF bestanden zijn minder geschikt voor weergave op smartphones en tablets.'
		],
		fileTypes: ['EPUB', 'HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			(((state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
				state.readable_pc === 'nee' &&
				state.readable_print === 'nee') ||
				((state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
					state.readable_pc === 'ja' &&
					state.readable_print === 'nee') ||
				((state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
					state.readable_pc === 'ja' &&
					state.readable_print === 'ja')) &&
			!(
				(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
				state.local_editing === 'ja' &&
				state.online_copies_vs_local !== 'nee'
			),
		results: [
			'Je gaf aan dat je informatie vooral op smartphones en tablets gelezen wordt. Ook gaf je aan dat het niet nodig is dat de ontvanger het bestand lokaal opslaat.',
			'Publiceer je informatie als webpagina, in <b>HTML</b>. HTML past de weergave van de informatie aan het mobiele apparaat aan en is goed digitaal toegankelijk te maken.',
			'<b>Gebruik geen PDF</b>. PDF bestanden zijn minder geschikt voor weergave op smartphones en tablets.'
		],
		fileTypes: ['HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_tablet_reconsider !== 'ja' &&
			state.readable_pc === 'ja' &&
			state.readable_print === 'nee' &&
			(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
			state.local_editing === 'ja' &&
			state.online_copies_vs_local !== 'nee',
		results: [
			'Je gaf aan dat je informatie vooral op laptops en PCs gelezen wordt. Ook gaf je aan dat de ontvanger het bestand lokaal moet kunnen opslaan.',
			'Publiceer je informatie in <b>EPUB</b> of <b>PDF</b>. EPUB past de weergave van de informatie aan het beeldscherm aan, en is goed digitaal toegankelijk te maken. Bovendien kan een EPUB bestand worden gedownload, lokaal bewaard en gelezen.',
			'Publiceer je liever in PDF, kijk dan hier onder om te weten welke versie je moet gebruiken.',
			'PDF is geschikt als de pagina opmaak en indeling vastligt en niet mag veranderen.  Maar bedenk dat PDF minder gemakkelijk digitaal toegankelijk te maken is en zich minder leent voor kleine beeldschermen.'
		],
		fileTypes: ['EPUB', 'PDF', 'HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_tablet_reconsider !== 'ja' &&
			state.readable_pc === 'ja' &&
			state.readable_print === 'nee' &&
			(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
			state.local_editing === 'ja' &&
			state.online_copies_vs_local !== 'nee' &&
			state.archiving === 'ja',
		results: [
			'Gebruik <b>PDF/A-1a</b> of <b>PDF/A-2a</b>. Deze PDF formats zijn te archiveren en geschikt om digitaal toegankelijk te maken. Zorg dat het PDF bestand voldoet aan de WCAG 2.1 toegankelijkheidscriteria <b>of</b> bied de informatie <b>ook</b> aan in een digitaal toegankelijk format, bijvoorbeeld HTML.'
		],
		fileTypes: ['PDF', 'HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_tablet_reconsider !== 'ja' &&
			state.readable_pc === 'ja' &&
			state.readable_print === 'nee' &&
			(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
			state.local_editing === 'ja' &&
			state.online_copies_vs_local !== 'nee' &&
			state.archiving === 'nee',
		results: [
			'Gebruik bij voorkeur <b>PDF/UA</b>. Is dat niet mogelijk, dan mag een ander PDF format ook. Zorg dat het bestand voldoet aan de WCAG 2.1 toegankelijkheidscriteria <b>of</b> bied de informatie <b>ook</b> aan in een digitaal toegankelijk format, bijvoorbeeld HTML.'
		],
		fileTypes: ['PDF', 'HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_tablet_reconsider !== 'ja' &&
			state.readable_pc === 'ja' &&
			state.readable_print === 'nee' &&
			!(
				(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
				state.local_editing === 'ja' &&
				state.online_copies_vs_local !== 'nee'
			),
		results: [
			'Je gaf aan dat je informatie vooral op laptops en PCs gelezen wordt. Publiceer je informatie als webpagina, in HTML.',
			'Ook gaf je aan aan dat je liever niet ziet dat je bestanden op andere websites terecht komen. Vermijd daarom publicatie in een downloadbaar bestand, bijvoorbeeld PDF maar ook EPUB.'
		],
		fileTypes: ['HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_pc === 'nee' &&
			state.readable_print === 'ja' &&
			state.archiving === 'ja',
		results: [
			'Je gaf aan dat je informatie alleen bedoeld is om af te drukken op papier.',
			'Gebruik <b>PDF/A-1a</b> of <b>PDF/A-2a</b>. Deze formats zijn te archiveren en passend voor het afdrukken van informatie met een vaste pagina opmaak. Zorg dat het  bestand voldoet aan de <b>WCAG 2.1</b> toegankelijkheidscriteria <b>of</b> bied de informatie ook aan in een digitaal toegankelijk format, bijvoorbeeld <b>HTML</b>.'
		],
		fileTypes: ['PDF', 'HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_pc === 'nee' &&
			state.readable_print === 'ja' &&
			state.archiving === 'nee',
		results: [
			'Je gaf aan dat je informatie alleen bedoeld is om af te drukken op papier.',
			'Gebruik bij voorkeur <b>PDF/UA</b>. Dit format is digitaal toegankelijk en passend voor het afdrukken van informatie met een vaste pagina opmaak. Is PDF/UA niet mogelijk, dan kan een ander PDF format ook. Zorg dat het  bestand voldoet aan de <b>WCAG 2.1</b> toegankelijkheidscriteria of bied de informatie ook aan in een digitaal toegankelijk format, bijvoorbeeld <b>HTML</b>.'
		],
		fileTypes: ['PDF', 'HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			(state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
			state.readable_pc === 'nee' &&
			state.readable_print === 'ja' &&
			(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
			state.archiving === 'ja',
		results: [
			'Je hebt aangegeven dat je informatie bedoeld is om af te drukken, maar ook om op mobiele apparaten te lezen.',
			'Publiceer je informatie in <b>EPUB</b>. EPUB past de weergave van de informatie aan het beeldscherm aan, en is goed digitaal toegankelijk te maken. Bovendien kan een EPUB bestand worden gedownload, lokaal bewaard en gelezen, en is het geschikt voor archiveren.',
			'Als EPUB geen optie is, publiceer dan <b>zowel</b> in <b>HTML</b> als in <b>PDF/A-1</b> of <b>PDF/A-2</b>. De HTML versie is dan digitaal toegankelijk leesbaar op mobiele apparaten, en het PDF bestand is er om te downloaden, af te drukken en archiveren.'
		],
		fileTypes: ['EPUB', 'HTML', 'PDF']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			(state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
			state.readable_pc === 'nee' &&
			state.readable_print === 'ja' &&
			(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
			state.archiving === 'nee',
		results: [
			'Je hebt aangegeven dat je informatie bedoeld is om af te drukken, maar ook om op mobiele apparaten te lezen.',
			'Publiceer je informatie in <b>EPUB</b>. EPUB past de weergave van de informatie aan het beeldscherm aan, en is goed digitaal toegankelijk te maken. Bovendien kan een EPUB bestand worden gedownload, lokaal bewaard en gelezen.',
			'Als EPUB geen optie is, publiceer dan <b>zowel</b> in <b>HTML</b> als in <b>PDF</b>. De HTML versie is dan digitaal toegankelijk leesbaar op mobiele apparaten, en het PDF bestand is er om te downloaden en af te drukken.'
		],
		fileTypes: ['EPUB', 'HTML', 'PDF']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			(state.readable_tablet === 'ja' || state.readable_tablet_reconsider === 'ja') &&
			state.readable_pc === 'nee' &&
			state.readable_print === 'ja' &&
			state.online_copies === 'nee' &&
			state.online_copies_vs_local !== 'ja',
		results: [
			'Je hebt aangegeven dat je informatie bedoeld is om af te drukken, maar ook om op mobiele apparaten te lezen.',
			'Je hebt aangegeven dat de informatie afgedrukt moet kunnen worden, maar dat je niet wilt dat je bestand op andere websites terecht komt. Daarom kan je beter niet in PDF publiceren.',
			'Bied je informatie aan in <b>HTML</b> zodat deze digitaal toegankelijk leesbaar is op mobiele apparaten. Bied daarbij op je website een <b>afdrukoptie</b> aan met een <b>stylesheet (CSS)</b> die geoptimaliseerd is voor het afdrukken van de inhoud. Je kan ook een real-time PDF export functie aanbieden. Dit maakt het moeilijker om de PDF naar een andere websites te kopieren, maar wees je ervan bewust dat het risico kan kopieren wel blijft bestaan. Daarom heeft een HTML afdrukoptie de voorkeur.'
		],
		fileTypes: ['HTML', 'CSS']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_tablet_reconsider !== 'ja' &&
			state.readable_pc === 'ja' &&
			state.readable_print === 'ja' &&
			(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
			state.local_editing === 'ja' &&
			state.online_copies_vs_local !== 'nee' &&
			state.archiving === 'ja',
		results: [
			'Je gaf aan dat je informatie op laptops en PCs gelezen wordt, en geschikt moet zijn om af te drukken. Ook gaf je aan dat de ontvanger het bestand lokaal moet kunnen opslaan.',
			'Gebruik <b>PDF/A-1a</b> of <b>PDF/A-2a</b>. Deze PDF formats zijn te archiveren en geschikt om digitaal toegankelijk te maken. Zorg dat het PDF bestand voldoet aan de WCAG 2.1 toegankelijkheidscriteria <b>of</b> bied de informatie <b>ook</b> aan in een digitaal toegankelijk format, bijvoorbeeld <b>HTML</b>.'
		],
		fileTypes: ['PDF', 'HTML']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_tablet_reconsider !== 'ja' &&
			state.readable_pc === 'ja' &&
			state.readable_print === 'ja' &&
			(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
			state.local_editing === 'ja' &&
			state.online_copies_vs_local !== 'nee' &&
			state.archiving === 'nee',
		results: [
			'Je gaf aan dat je informatie op laptops en PCs gelezen wordt, en geschikt moet zijn om af te drukken. Ook gaf je aan dat de ontvanger het bestand lokaal moet kunnen opslaan.',
			'Gebruik bij voorkeur <b>PDF/UA</b>. Is dat niet mogelijk, dan mag een ander PDF format ook. Zorg dat het bestand voldoet aan de WCAG 2.1 toegankelijkheidscriteria <b>of</b> bied de informatie <b>ook</b> aan in een digitaal toegankelijk format, bijvoorbeeld <b>HTML</b>.',
			'<b>EPUB</b> is ook een elegante oplossing als je het bestand kan voorzien van een style sheet (CSS) voor optimaal afdrukken.'
		],
		fileTypes: ['PDF', 'HTML', 'EPUB', 'CSS']
	},
	{
		when: (state) =>
			state.info_type !== 'formulier' &&
			state.info_type !== 'presentatie' &&
			state.readable_tablet === 'nee' &&
			state.readable_tablet_reconsider !== 'ja' &&
			state.readable_pc === 'ja' &&
			state.readable_print === 'ja' &&
			!(
				(state.online_copies === 'ja' || state.online_copies_vs_local === 'ja') &&
				state.local_editing === 'ja' &&
				state.online_copies_vs_local !== 'nee'
			),
		results: [
			'Je gaf aan dat je informatie op laptops en PCs gelezen wordt, maar ook af te drukken moet zijn. Tegelijkertijd wil je niet dat je bestand op andere websites terecht komt.',
			'Publiceer je informatie als webpagina, in <b>HTML</b>. Bied daarbij op je website een <b>afdrukoptie</b> aan met een <b>stylesheet (CSS)</b> die geoptimaliseerd is voor het afdrukken van de inhoud. Je kan ook een real-time PDF export functie aanbieden. Dit maakt het moeilijker om de PDF naar een andere websites te kopieren, maar wees je ervan bewust dat het risico kan kopieren wel blijft bestaan. Daarom heeft een HTML afdrukoptie de voorkeur.'
		],
		fileTypes: ['HTML', 'CSS']
	}
] satisfies Results;

type State = {
	info_type:
		| 'brief'
		| 'formulier'
		| 'handleiding'
		| 'kennisgeving'
		| 'nieuwsbericht'
		| 'nota'
		| 'presentatie'
		| 'rapport'
		| 'vergaderstuk'
		| 'anders';
	doelgroep: 'ja' | 'min of meer' | 'nee';
	doelgroep_confirm: 'toch doorgaan' | 'stoppen';
	readable_tablet: 'ja' | 'nee';
	readable_pc: 'ja' | 'nee';
	readable_print: 'ja' | 'nee';
	readable_devices_confirm: 'ja' | 'nee';
	readable_tablet_reconsider: 'ja' | 'nee';
	form_how: 'online' | 'in een editor' | 'afdrukken en handmatig invullen';
	editing: 'ja' | 'nee';
	local_editing: 'ja' | 'nee' | 'weet ik niet';
	archiving: 'ja' | 'nee' | 'weet ik niet';
	reuse: 'ja' | 'nee' | 'weet ik niet';
	online_copies: 'ja' | 'nee';
	online_copies_vs_local: 'ja' | 'nee';
};

type Quiz = Array<
	{
		[TId in keyof State]: {
			id: TId;
			heading: string;
			when?: (state: Partial<State>) => boolean;
			question: string;
			options: State[TId][];
		};
	}[keyof State]
>;

type Results = Array<{
	when: (state: Partial<State>) => boolean;
	results: string[];
	fileTypes: string[];
}>;
