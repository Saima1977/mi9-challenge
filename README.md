Mi9-challenge
=============

Installation

Clone git repository:

    git clone https://github.com/Saima1977/mi9-challenge.git
    cd mi9-challenge
    npm install

Application start:

    node index.js

About

Application has server module (filter and validation) which responds to the JSON data sent to it on port 3000

Application listens to POST requests. If any other request method is invoked, "error": "Could not decode request: JSON parsing failed" will be sent back.
