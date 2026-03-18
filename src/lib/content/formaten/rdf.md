---
title: RDF
description: Een standaard voor het beschrijven van gegevens zodat machines relaties kunnen begrijpen. Vormt de basis voor 'Linked Data' — onderling verbonden datasets.
sorting_score: 40
category: Data
---

RDF (Resource Description Framework) is een standaard voor het beschrijven van gegevens op een manier die computers kunnen begrijpen en koppelen. Het vormt de basis voor 'Linked Data' — onderling verbonden datasets op basis van betekenis.

### Wanneer gebruik je RDF?

RDF is relevant voor gevorderde dataspecialisten en situaties waarin:

- Data gekoppeld moet worden aan andere bronnen
- Gegevens onderdeel worden van een kennisgraaf
- Semantische betekenis belangrijk is

### Voorbeeld: stemuitslag gemeenteraad

Zo ziet RDF eruit — in dit geval de uitslag van een raadsstemming, beschreven in de [Turtle-serialisatie](<https://nl.wikipedia.org/wiki/Turtle_(syntaxis)>) van RDF:

```turtle
@prefix dct:    <http://purl.org/dc/terms/> .
@prefix schema: <http://schema.org/> .
@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .

<https://gemeente.nl/stemmingen/2024-GR-0142>
  a schema:VoteAction ;
  dct:subject "Motie duurzame mobiliteit binnenstad" ;
  dct:date "2024-11-14"^^xsd:date ;
  schema:result "aangenomen" .

<https://gemeente.nl/stemmingen/2024-GR-0142/groenlinks>
  a schema:VoteAction ;
  schema:object <https://gemeente.nl/stemmingen/2024-GR-0142> ;
  schema:agent <https://gemeente.nl/fracties/groenlinks> ;
  schema:result "voor" ;
  schema:voteCount 8 .

<https://gemeente.nl/fracties/groenlinks>
  a schema:Organization ;
  schema:name "GroenLinks" .
```

Dit voorbeeld toont hoe RDF gegevens beschrijft als relaties. Turtle is een van de manieren om RDF op te schrijven. Andere veelgebruikte serialisaties zijn RDF/XML, JSON-LD en N-Triples.

### Voordelen

- Verbonden: Data wordt onderdeel van een groter geheel
- Betekenisvol: Relaties tussen gegevens zijn expliciet
- Interoperabel: Werkt samen met internationale standaarden
- Toekomstbestendig: Basis van het semantisch web

### Juridische context

De [Wet hergebruik overheidsinformatie (Who)](/kaders/wet-hergebruik-overheidsinformatie) en de Europese Open Data Richtlijn moedigen het publiceren van 'high value datasets' in linked data-formaat aan. RDF vertegenwoordigt het hoogste niveau (5 sterren) in het open data-model.

### Is RDF iets voor jou?

RDF is bedoeld voor data-experts en ontwikkelaars. Het gebruik van RDF vraagt ook om een onderliggend kennismodel. Voor reguliere publicatie volstaat CSV of JSON. Raadpleeg bij twijfel de data-specialist van je organisatie.

### Meer informatie

- [RDF-standaard](https://www.forumstandaardisatie.nl/open-standaarden/rdf) (Forum Standaardisatie)
- [data.overheid.nl](https://data.overheid.nl)
- [Vijfsterrenmodel Open Data](https://5stardata.info/en/)
