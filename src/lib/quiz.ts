export type QuizResult = {
	result: string;
	fileTypes: string[];
};

export type QuizQuestion = {
	title: string;
	question: string;
};

export type Quiz = QuizQuestion & {
	options: Record<string, Quiz | QuizResult>;
};

const questions = {
	data: {
		title: 'Nieuwe data',
		question: 'Is het document (deels) gebaseerd op nieuwe data of cijfers?'
	},
	api: {
		title: 'Dynamische data',
		question: 'Worden de gegevens regelmatig bijgewerkt of aangevuld?'
	},
	online: {
		title: 'Online leesbaar',
		question: 'Dient het document goed leesbaar te zijn vanuit browsers?'
	},
	partOfText: {
		title: 'Onderdeel van tekst',
		question: 'Is de afbeelding onderdeel van een tekst?'
	}
} as const satisfies Record<string, QuizQuestion>;

const result = {
	doc: {
		archive_online:
			'Voor formele publicatie en archivering is PDF de norm. Voor optimaal online bereik en gebruiksgemak op alle apparaten is een webpagina (HTML) echter meer geschikt. De beste keuze is vaak om informatie op een webpagina te publiceren met de PDF/A als download voor formele doeleinden.',
		archive_offline:
			'Voor formele publicatie en archivering is PDF de norm. Zorg er wel voor dat de PDF digitaal toegankelijk is (PDF/UA), zodat de informatie voor iedereen beschikbaar is.',
		editable:
			'Voor documenten die de ontvanger moet kunnen bewerken, is zijn Open Document-formaten (ODF), zoals ODT voor tekst of ODP voor presentaties, de geadviseerde en verplichte open standaard. We raden het gebruik van andere gesloten of applicatie-specifieke formaten af. Werk direct in een ODF-formaat om informatie- en opmaakverlies door latere conversie te voorkomen.',
		editable_online:
			'Een webpagina (HTML) is daarnaast de beste optie voor optimaal online bereik en gebruiksgemak op alle apparaten, zoals laptops en smartphones. Overweeg beide formaten aan te bieden.',
		read_online:
			'We adviseren een webpagina (HTML) te publiceren. Dit is de standaard voor informatie op het internet en zorgt voor optimaal bereik en gebruiksgemak op alle apparaten, zoals laptops en smartphones.',
		read_online_print:
			'Zorg er daarnaast voor dat de webpagina de juiste opmaak heeft voor printen, of bied een printvriendelijke versie aan als PDF.',
		fixed:
			'Als het behoud van de exacte opmaak essentieel is, dan is publicatie in PDF een logische keuze. Het is wel belangrijk dat het bestand voldoet aan de eisen voor digitale toegankelijkheid (PDF/UA), zodat de informatie voor iedereen beschikbaar is.',
		long_read:
			'Zowel PDF als EPUB geschikte formaten om documenten te publiceren. PDF biedt zekerheid over een exacte opmaak, terwijl EPUB zich flexibel aanpast aan de grootte van het scherm van de lezer. Overweeg één of beide formaten aan te bieden.',
		data_check:
			'Overweeg ook om de onderliggende gegevens, zoals data en cijfers, als open data aan te bieden, om hergebruik te stimuleren en transparantie te bevorderen. Je kunt de keuzehulp opnieuw doorlopen voor advies over geschikte dataformaten.'
	},
	data: {
		spreadsheet_logic:
			'Als diagrammen en formules behouden moeten blijven, adviseren we om de data te publiceren als ODS. We raden het gebruik van andere gesloten of applicatie-specifieke formaten af.',
		spreadsheet_mix:
			'We adviseren om de data in twee formaten te publiceren: een ODS-bestand voor wie de tabel met opmaak wil zien en een CSV-bestand voor hergebruik door dataspecialisten.',
		raw_csv:
			'Voor tabeldata zonder opmaak adviseren we publicatie als CSV. Dit maakt zowel direct gebruik als machineleesbaarheid mogelijk.',
		complex:
			'Voor complexe datastructuren zijn JSON en XML de geadviseerde open formaten. Deze zijn breed toepasbaar en machineleesbaar.',
		complex_linked:
			'Raadpleeg dataspecialisten in jouw organisatie of jouw gegevens geschikt zijn om te publiceren als Linked Data (RDF). Deze standaard is bij uitstek geschikt op basis van betekenis te verbinden met andere bronnen, wat de herbruikbaarheid vergroot.',
		api: 'Bij regelmatige updates is het sterk aanbevolen om een API beschikbaar te stellen, zodat systemen de data automatisch kunnen ophalen wanneer het is bijgewerkt. Raadpleeg dataspecialisten in jouw organisatie voor mogelijkheden en implementatie.',
		complex_linked_api:
			'Bij regelmatige updates van gekoppelde gegevensbronnen is het sterk aanbevolen om een API beschikbaar te stellen, zodat systemen de data automatisch kunnen ophalen wanneer het is bijgewerkt. Overweeg daarnaast publicatie als Linked Data (RDF) voor koppeling met andere bronnen op basis van betekenis. Raadpleeg dataspecialisten in jouw organisatie voor mogelijkheden en implementatie.'
	},
	img: {
		vector:
			(type: string) => `Voor ${type} raden we het formaat SVG aan. Dit is een open standaard die bij het vergroten van ${type} altijd scherp blijft.`,
		raster:
			"Voor foto's is PNG het meest geschikte open formaat. Dit formaat behoudt de beeldkwaliteit zonder scherpteverlies door compressie.",
		doc_check: "Je kunt de keuzehulp opnieuw doorlopen voor advies over geschikte publicatieformaten voor de tekst waar de afbeelding onderdeel van is."
	}
} as const;

export const quiz = {
	title: 'Soort informatie',
	question: 'Wat voor soort informatie ga je publiceren?',
	options: {
		'tekst & documenten': {
			title: 'Formeel publiceren',
			question: 'Dient het document formeel vastgelegd of gearchiveerd te worden?',
			options: {
				ja: {
					...questions.online,
					options: {
						ja: {
							...questions.data,
							options: {
								ja: {
									result: [result.doc.archive_online, result.doc.data_check].join(' '),
									fileTypes: ['html', 'pdf']
								},
								nee: {
									result: result.doc.archive_online,
									fileTypes: ['html', 'pdf']
								}
							}
						},
						nee: {
							...questions.data,
							options: {
								ja: {
									result: [result.doc.archive_offline, result.doc.data_check].join(' '),
									fileTypes: ['pdf']
								},
								nee: {
									result: result.doc.archive_offline,
									fileTypes: ['pdf']
								}
							}
						}
					}
				},
				nee: {
					title: 'Bewerkbaar',
					question: 'Dient het document voor anderen bewerkbaar of herbruikbaar te zijn?',
					options: {
						ja: {
							...questions.online,
							options: {
								ja: {
									result: [result.doc.editable, result.doc.editable_online].join(' '),
									fileTypes: ['odf', 'html']
								},
								nee: {
									result: result.doc.editable,
									fileTypes: ['odf']
								}
							}
						},
						nee: {
							...questions.online,
							options: {
								ja: {
									title: 'Uitprinten',
									question: 'Dient het document uitgeprint te kunnen worden?',
									options: {
										ja: {
											...questions.data,
											options: {
												ja: {
													result: [
														result.doc.read_online,
														result.doc.read_online_print,
														result.doc.data_check
													].join(' '),
													fileTypes: ['html', 'pdf']
												},
												nee: {
													result: [result.doc.read_online, result.doc.read_online_print].join(' '),
													fileTypes: ['html', 'pdf']
												}
											}
										},
										nee: {
											...questions.data,
											options: {
												ja: {
													result: [result.doc.read_online, result.doc.data_check].join(' '),
													fileTypes: ['html']
												},
												nee: {
													result: result.doc.read_online,
													fileTypes: ['html']
												}
											}
										}
									}
								},
								nee: {
									title: 'Consistentie',
									question: 'Is het belangrijk dat het document er overal exact hetzelfde uitziet?',
									options: {
										ja: {
											...questions.data,
											options: {
												ja: {
													result: [result.doc.fixed, result.doc.data_check].join(' '),
													fileTypes: ['pdf']
												},
												nee: {
													result: result.doc.fixed,
													fileTypes: ['pdf']
												}
											}
										},
										nee: {
											...questions.data,
											options: {
												ja: {
													result: [result.doc.long_read, result.doc.data_check].join(' '),
													fileTypes: ['pdf', 'epub']
												},
												nee: {
													result: result.doc.long_read,
													fileTypes: ['pdf', 'epub']
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		'data & cijfers': {
			title: 'Structuur',
			question:
				'Zijn de gegevens tabelvormig, dus enkel met rijen en kolommen? Of zijn de gegevens complexer gestructureerd?',
			options: {
				'ja, tabelvorm': {
					title: 'Diagrammen en formules',
					question: 'Bevat de tabel diagrammen of formules?',
					options: {
						ja: {
							result: result.data.spreadsheet_logic,
							fileTypes: ['odf']
						},
						nee: {
							title: 'Leesbaarheid',
							question:
								'Is het belangrijk dat de tabel eenvoudig leesbaar is, bijvoorbeeld door opmaak?',
							options: {
								ja: {
									...questions.api,
									options: {
										ja: {
											result: [result.data.spreadsheet_mix, result.data.api].join(' '),
											fileTypes: ['odf', 'csv']
										},
										nee: {
											result: result.data.spreadsheet_mix,
											fileTypes: ['odf', 'csv']
										}
									}
								},
								nee: {
									...questions.api,
									options: {
										ja: {
											result: [result.data.raw_csv, result.data.api].join(' '),
											fileTypes: ['csv']
										},
										nee: {
											result: result.data.raw_csv,
											fileTypes: ['csv']
										}
									}
								}
							}
						}
					}
				},
				'nee, complexer': {
					title: 'Linked data',
					question: 'Zijn de gegevens onderling verbonden aan andere gegevensbronnen?',
					options: {
						ja: {
							...questions.api,
							options: {
								ja: {
									result: [result.data.complex, result.data.complex_linked_api].join(
										' '
									),
									fileTypes: ['json', 'rdf']
								},
								nee: {
									result: [result.data.complex, result.data.complex_linked].join(' '),
									fileTypes: ['json', 'rdf']
								}
							}
						},
						nee: {
							...questions.api,
							options: {
								ja: {
									result: [result.data.complex, result.data.api].join(' '),
									fileTypes: ['json']
								},
								nee: {
									result: result.data.complex,
									fileTypes: ['json']
								}
							}
						}
					}
				}
			}
		},
		afbeeldingen: {
			title: 'Soort afbeelding',
			question: 'Wat voor soort afbeelding ga je publiceren?',
			options: {
				illustratie: {
					...questions.partOfText,
					options: {
						ja: {
							result: [result.img.vector('illustraties'), result.img.doc_check].join(' '),
							fileTypes: ['svg']
						},
						nee: {
							result: result.img.vector('illustraties'),
							fileTypes: ['svg']
						}
					}
				},
				infographic: {
					...questions.partOfText,
					options: {
						ja: {
							result: [result.img.vector('infographics'), result.img.doc_check].join(' '),
							fileTypes: ['svg']
						},
						nee: {
							result: result.img.vector('infographics'),
							fileTypes: ['svg']
						}
					}
				},
				diagram: {
					...questions.partOfText,
					options: {
						ja: {
							result: [result.img.vector('diagrammen'), result.img.doc_check].join(' '),
							fileTypes: ['svg']
						},
						nee: {
							result: result.img.vector('diagrammen'),
							fileTypes: ['svg']
						}
					}
				},
				foto: {
					...questions.partOfText,
					options: {
						ja: {
							result: [result.img.raster, result.img.doc_check].join(' '),
							fileTypes: ['png']
						},
						nee: {
							result: result.img.raster,
							fileTypes: ['png']
						}
					}
				}
			}
		}
	}
} as const satisfies Quiz;
