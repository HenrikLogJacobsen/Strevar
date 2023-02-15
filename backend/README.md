##NB: Disse stegene er i backend mappe

package.json er for å holde styr på dependencies i tillegg til å registrere egne scripst

`npm install express`
`npm install -g nodemon`

dersom du moter feil i nodemon: `sudo chown -R $USER /usr/local/lib/node_modules`


starte server: `npm run dev`
avslutte server/en prosess: `ctrl + C`

.env filen lagrer alle environment variabler, eksempelvis portnummer til server
#TODO: legge til .env i gitignore filen, denne er privat
Disse variablene aksesseres ved en npm pakke

run `npm install dotenv` for at denne filen kan gjore jobben sin

## Foreslåtte API endepunkter

Henter alle treningsøkter:

`GET /treningsokter`

Henter en treningsøkt

`GET /treningsokter/:id`

Lager en ny treningsokt

`POST /treningsokter`
{
  "tittel": "Benk",
  "sett": 2,
  "repetisjoner": 2,
  "vekt": 300
}

response: 
{
  "tittel": "Benk",
  "sett": 2,
  "repetisjoner": 2,
  "vekt": 300,
  "_id": "63de85f61be0fe13117db866",
  "createdAt": "2023-02-04T16:21:10.018Z",
  "updatedAt": "2023-02-04T16:21:10.018Z",
  "__v": 0
}

Sletter en treningsokt

`DELTETE  /treningsokter/:id`

Oppdaterer en treningsøkt

`PATCH  /treningsokter/:id`


mongoose legger til et ekstra lag med struktur til databasen som mongoDB ikke lar ogss gjore






