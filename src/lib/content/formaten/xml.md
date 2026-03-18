---
title: XML
description: Een formaat voor gestructureerde gegevens voor verwerking door machines. Een XML-document is een gewoon tekstdocument, daardoor kunnen ook mensen het lezen.
sorting_score: 64
category: Data
---

XML (Extensible Markup Language) is een formaat voor gestructureerde gegevens voor, vooral, verwerking door machines. Een XML-document is een gewoon tekstdocument. Daardoor kunnen mensen (en niet alleen machines) het lezen.

### Wanneer gebruik je XML?

XML is bedoeld voor softwareontwikkelaars en data-specialisten die:

- Applicaties bouwen die overheidsdata gebruiken
- Geautomatiseerde koppelingen maken met overheidssystemen
- Gestructureerde gegevens ook leesbaar en begrijpelijk voor de mens willen vastleggen
- Data ophalen via API's voor analyse of visualisatie

Als je informatie publiceert voor "gewone" lezers, is XML niet het juiste formaat. Kies dan voor een webpagina ([HTML](/formaten/html)) of een downloadbaar bestand ([PDF](/formaten/pdf), [CSV](/formaten/csv)).

### Voorbeeld: stemuitslag gemeenteraad

Zo ziet XML eruit — in dit geval de uitslag van een raadsstemming:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<stemming>
	<id>2024-GR-0142</id>
	<datum>2024-11-14</datum>
	<onderwerp>Motie duurzame mobiliteit binnenstad</onderwerp>
	<type>motie</type>
	<uitslag>
		<aangenomen>true</aangenomen>
		<stemmen_voor>23</stemmen_voor>
		<stemmen_tegen>12</stemmen_tegen>
		<onthoudingen>2</onthoudingen>
	</uitslag>
	<fracties>
		<fractie>
			<naam>GroenLinks</naam>
			<stemmen>8</stemmen>
			<standpunt>voor</standpunt>
		</fractie>
		<fractie>
			<naam>VVD</naam>
			<stemmen>6</stemmen>
			<standpunt>tegen</standpunt>
		</fractie>
	</fracties>
	<bijlagen>
		<bijlage>
			<type>motie</type>
			<titel>Motie duurzame mobiliteit binnenstad</titel>
			<bestandsformaat>application/pdf</bestandsformaat>
			<url>https://gemeente.nl/documenten/moties/2024-GR-0142.pdf</url>
			<grootte_kb>245</grootte_kb>
		</bijlage>
	</bijlagen>
</stemming>
```

Dit voorbeeld toont hoe XML gegevens hiërarchisch structureert en meteen goed leesbaar is voor de mens: een stemming bevat een uitslag, die weer stemmen bevat, en bijlagen met hun eigen metadata.

### Wanneer publiceer je in XML?

XML is relevant wanneer je organisatie gegevens uitwisselt tussen systemen of een API aanbiedt, bijvoorbeeld voor:

- Open raadsinformatie (zoals bovenstaand voorbeeld)
- Vergunningenregisters
- Bekendmakingen en besluiten
- Datasets op data.overheid.nl

### Voordelen

- **Machineleesbaar**: geschikt voor verwerking door machines
- **Begrijpelijk voor mensen**: een XML is goed te interpreteren voor de mens door de hiërarchische opbouw van een XML en door het gebruik van tags
- **Handmatig aanpasbaar**: omdat een XML een gewoon tekstdocument is, kun je een XML-document eenvoudig bewerken via een editor
- **Breder toepasbaar**: XML is breder toepasbaar zoals voor het opslaan van gegevens. Zo is XML het onderliggende formaat van de documentstandaard ODF.

### Technische tips

- Gebruik UTF-8 als tekencodering (voor correcte weergave van speciale tekens)
- Structureer de gegevens als tekst via elementen in tags die beginnen met '\<' en per se eindigen met '/\>', bv. \<titel\>Jip en Janneke\</titel\>.
- Zorg voor de juiste manier van 'nesten' van je tags: dus wel \<a\>\<b\>\</b\>\</a\> maar niet \<a\>\<b\>\</a\>\</b\>.
- Gebruik aanvullende standaarden voor je XML-document bij applicaties die vragen om striktere afspraken over de gegevens dan die in een XML-document mogen voorkomen.

### Wanneer kiezen voor XML en wanneer voor JSON?

Je komt [JSON](/formaten/json) vrijwel uitsluitend tegen in API's (Application Programming Interfaces), de technische koppelingen waarmee software met elkaar communiceert en gegevens uitwisselt. XML is een ouder formaat dat breder wordt ingezet: naast API's wordt het veel gebruikt in documentstandaarden (zoals EPUB en HTML) en in gestructureerde berichtenuitwisseling tussen overheidssystemen.

### Juridische context

De [Wet hergebruik overheidsinformatie (Who)](/kaders/wet-hergebruik-overheidsinformatie) verplicht overheidsorganen om data in een open en machineleesbaar formaat beschikbaar te stellen wanneer daar om wordt gevraagd. XML voldoet aan deze eis. XML is een aanbevolen standaard van het [Forum Standaardisatie](/kaders/forum-standaardisatie).

### Meer informatie

- [XML-standaard](https://www.forumstandaardisatie.nl/open-standaarden/xml) (Forum Standaardisatie)
- [ODF-standaard](https://www.forumstandaardisatie.nl/open-standaarden/odf) (Forum Standaardisatie)
- [data.overheid.nl](https://data.overheid.nl)
