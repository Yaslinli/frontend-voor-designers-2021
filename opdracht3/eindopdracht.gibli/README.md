# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Ik heb met het gebruik van de studio Gibli Api een lijst van 10 films gemaakt waar de gebruiker doorheen kan scrollen. 

En voeg een link naar je demo toe.

## interface
04.Keep users in control:
Humans are most comfortable when they feel in control of themselves and their environment. Thoughtless software takes away that comfort by forcing people into unplanned interactions, confusing pathways, and surprising outcomes. Keep users in control by regularly surfacing system status, by describing causation (if you do this that will happen) and by giving insight into what to expect at every turn. Don't worry about stating the obvious…the obvious almost never is.

De interface voor de gibli lijst is vrij eenvoudig. je kan alleen naar boven of naar onder scrollen. 
de grbuiker kan dit op verschillende manieren doen zoals: up en down key, up en down buttons en scrollen. 
De gebruiker heeft hiermee geheel de interface in control.

08.Provide a natural next step:
Very few interactions are meant to be the last, so thoughtfully design a next step for each interaction a person has with your interface. Anticipate what the next interaction should be and design to support it. Just as we like in human conversation, provide an opening for further interaction. Don't leave a person hanging because they've done what you want them to do…give them a natural next step that helps them further achieve their goals.

De arrows aan de rechterkant geeft de gebruiker aan dar hij naar onder of naar boven moet klikken. de nextstep is daardoor ook duidelijk.

09.Appearance follows behavior:
Humans are most comfortable with things that behave the way we expect. Other people, animals, objects, software. When someone or something behaves consistently with our expectations we feel like we have a good relationship with it. To that end designed elements should look like how they behave. Form follows function. 

De interface is consistent in gebruik doordat het een one pager is waar je aleen kan scrollen.
door de scroll snap functie is er elke keer maar 1 card te zien waardoor. het gemakkelijk te zien is dat wat de film is.

11.Strong visual hierarchies work best
A strong visual hierarchy is achieved when there is a clear viewing order to the visual elements on a screen. That is, when users view the same items in the same order every time.

De hierarchie is in  de list werkerkt door de titel een grote font te geven. Ook is de volgorde van de card informatie bij elke card hetzlefde gestyled. Omdat je maar 1 card tegelijk kan zien is zorgt dit ervoor dat de gebruiker op 1 card kan foccussen.


UI events: 
Ik heb in de gibli list een scoll event en een keyboard event gebruikt.
Door naar de verschillende cards te scrollen zullen die met een fade op het scherm komen. 
deze is ook te gebruiken met de up en down keys en de up en down buttons op het scherm.




## code
Leg de code uit.
