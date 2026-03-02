---
title: CSV
description: Een eenvoudig en machineleesbaar formaat voor tabelgegevens. Elke regel is een rij in een spreadsheet en scheidingstekens bepalen de kolommen.
sorting_score: 85
category: Data
---

CSV (Comma Separated Values) is een eenvoudig tekstformaat voor tabelgegevens. Elke regel is een rij in een spreadsheet en en scheidingstekens (vaak een komma) bepalen de kolommen. CSV-bestanden kun je openen in spreadsheetprogramma’s of speciale data-software.

### Wanneer gebruik je CSV?

Kies CSV voor het publiceren van gestructureerde, tabelmatige data zoals:

- Statistieken en meetgegevens
- Lijsten en overzichten
- Open data voor hergebruik
- Exportgegevens uit databases

### Voorbeeld: stemuitslag gemeenteraad

Zo ziet een CSV-bestand eruit — in dit geval de uitslag van een raadsstemming:

```csv
fractie,stemmen,standpunt
GroenLinks,8,voor
D66,6,voor
PvdA,5,voor
SP,4,voor
VVD,6,tegen
CDA,4,tegen
FvD,2,tegen
Onafhankelijk,2,onthouding
```

### Voordelen

- **Eenvoudig**: Pure data zonder opmaak
- **Universeel**: Werkt met vrijwel alle datasoftware
- **Compact**: Kleine bestandsgrootte
- **Machineleesbaar**: Ideaal voor data-analyse

### Technische tips

- Gebruik **UTF-8** als tekencodering (voor correcte weergave van speciale tekens)
- Vermijd opmaak in de data (geen kleuren of formules)
- Voeg een koprij toe met duidelijke kolomnamen
- Let op: formules uit Excel worden niet meegenomen bij export

### Juridische context

CSV voldoet aan de eisen van de [Wet hergebruik overheidsinformatie (Who)](/kaders/wet-hergebruik-overheidsinformatie) voor machineleesbare data. CSV is een [aanbevolen standaard](https://www.forumstandaardisatie.nl/open-standaarden/csv) van het [Forum Standaardisatie](/kaders/forum-standaardisatie) voor open data.

### Let op

Een spreadsheetbestand met meerdere werkbladen moet per werkblad worden geëxporteerd naar CSV. Formules en berekeningen gaan verloren bij conversie.

### Meer informatie

- [Open data publiceren](https://data.overheid.nl/ondersteuning-donl) (data.overheid.nl)
- [CSV-standaard](https://www.forumstandaardisatie.nl/open-standaarden/csv) (Forum Standaardisatie)
