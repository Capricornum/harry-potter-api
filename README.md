# 🧙‍♂️ Harry Potter Projekt  

Willkommen zu meinem **Harry Potter Projekt**, bei dem du dich in die Welt von Hogwarts zaubern kannst. 🎩✨  
Lerne neue Zaubersprüche, braue magische Tränke und lass dich vom "Sprechenden Hut" in ein Haus einteilen.  

---

## 🚀 **Voraussetzungen**

Bevor du das Projekt starten kannst, stelle sicher, dass folgende Voraussetzungen erfüllt sind:  

- [Node.js](https://nodejs.org/) (Version 14+ empfohlen)  
- Ein Paketmanager wie **npm**  
- **nodemon** als Entwicklungswerkzeug (optional, aber empfohlen)  

---

## 📦 **Installation**

1. **Projekt klonen oder herunterladen**  

Lade das Projekt herunter oder klone es mit:  
```bash
git clone <REPOSITORY_URL>
cd <PROJEKT_VERZEICHNIS>
```

2. **Abhängigkeiten installieren**
Starte die Installation der benötigten Pakete:
```bash
npm install
```

---

## 🌐 **Server starten**

Um den Server zu starten, verwende nodemon für die Entwicklung (falls installiert):
	```bash
  nodemon app.js
	```

Falls nodemon nicht installiert ist, kannst du es global hinzufügen:

```bash
npm install -g nodemon
```

Alternativ kannst du den Server ohne nodemon starten:

```bash
node app.js
```

---

## 🖥️ **Projekt öffnen**

Nachdem der Server läuft, öffne deinen Browser und gehe zu:

http://localhost:8080
Stelle sicher, dass der Port 8080 nicht von einem anderen Dienst verwendet wird.

---

## 🔍 **Projektstruktur**

```md
Project/
|--public/									# Static files served under express.static()
|	|--styles/								# CSS files
|	|--images/								# images
|	`--js/										# client-side javascript
|--views/										# EJS-Template for HTML
|--app.js										# Main server file
|--package.json							# Project dependencies and scripts
|--.gitignore								# git ignore commands
`--README.md								# Project description (this file)
```

## 🧪 **Features**

- 🎩 Sprechender Hut: Werde in ein Hogwarts-Haus eingeteilt.
- 📜 Zaubersprüche: Lerne neue Zauber und erweitere dein magisches Repertoire.
- 🧪 Tränke: Braue magische Tränke.
- 📱 Responsives Design: Optimiert für Desktop und Mobile.

## 📄 **Lizenz**

Dieses Projekt steht unter der MIT-Lizenz. Siehe die LICENSE-Datei für weitere Informationen.

## 💡 **Screenshots**

Hauptseite: