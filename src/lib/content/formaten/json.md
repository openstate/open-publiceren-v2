---
title: JSON
description: Een formaat voor gestructureerde gegevens in API's. Voor ontwikkelaars die data ophalen en systemen integreren, niet voor publicatie aan gewone lezers.
sorting_score: 65
---

JSON (JavaScript Object Notation) is een formaat voor gestructureerde gegevens dat vooral wordt gebruikt voor geautomatiseerde gegevensuitwisseling tussen systemen. Je komt JSON vrijwel uitsluitend tegen in API's (Application Programming Interfaces) — de technische koppelingen waarmee software met elkaar communiceert en gegevens uitwisselen.

### Voor welke doeleinden wordt JSON gebruikt?
JSON is bedoeld voor softwareontwikkelaars en data-specialisten die:

* Applicaties bouwen die overheidsdata gebruiken
* Geautomatiseerde koppelingen maken met overheidssystemen
* Data ophalen via API's voor analyse of visualisatie

Als je informatie publiceert voor "gewone" lezers, is JSON niet het juiste formaat. Kies dan voor een webpagina (HTML) of een downloadbaar bestand (PDF, CSV).

### Voorbeeld: stemuitslag gemeenteraad
Zo ziet JSON eruit — in dit geval de uitslag van een raadsstemming:

```json
{
  "stemming": {
    "id": "2024-GR-0142",
    "datum": "2024-11-14",
    "onderwerp": "Motie duurzame mobiliteit binnenstad",
    "type": "motie",
    "uitslag": {
      "aangenomen": true,
      "stemmen_voor": 23,
      "stemmen_tegen": 12,
      "onthoudingen": 2
    },
    "fracties": [
      {
        "naam": "GroenLinks",
        "stemmen": 8,
        "standpunt": "voor"
      },
      {
        "naam": "VVD",
        "stemmen": 6,
        "standpunt": "tegen"
      }
    ],
    "bijlagen": [
      {
        "type": "motie",
        "titel": "Motie duurzame mobiliteit binnenstad",
        "bestandsformaat": "application/pdf",
        "url": "https://gemeente.nl/documenten/moties/2024-GR-0142.pdf",
        "grootte_kb": 245
      }
    ]
  }
}
```

Dit voorbeeld toont hoe JSON gegevens hiërarchisch structureert: een stemming bevat een uitslag, die weer stemmen bevat, en bijlagen met hun eigen metadata.

### Wanneer publiceer je in JSON?
JSON is relevant wanneer je organisatie een API aanbiedt, bijvoorbeeld voor:

- Open raadsinformatie (zoals bovenstaand voorbeeld)
- Vergunningenregisters
- Bekendmakingen en besluiten
- Datasets op data.overheid.nl

### Juridische context
De [Wet hergebruik overheidsinformatie (Who)](/kaders/who) verplicht overheidsorganen om data in een open en machineleesbaar formaat beschikbaar te stellen wanneer daar om wordt gevraagd. JSON voldoet aan deze eis. Voor API's zijn de REST API Design Rules verplicht voor de overheid via de 'Pas toe of leg uit'-lijst van het [Forum Standaardisatie](/kaders/forum-standaardisatie).

### Meer informatie

- [JSON-standaard](https://www.forumstandaardisatie.nl/open-standaarden/json) (Forum Standaardisatie)
- [Kennisbank JSON](https://developer.overheid.nl/kennisbank/data/json-yaml#json) (developer.overheid.nl)
- [Kennisbank API's](https://developer.overheid.nl/kennisbank/apis/) (developer.overheid.nl)
- [REST API Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules) (Forum Standaardisatie)
- [data.overheid.nl](https://data.overheid.nl)