```mermaid

sequenceDiagram
    participant browser
    participant server

    activate browser
    browser->>server: HTTP Request POST
    note right of browser: New Note Is Submitted
    deactivate browser

    activate server
    server-->>browser: HTTP GET 302 Redirect
    note right of browser: Server redirects browser, calls for new GET request
    deactivate server

    activate browser
    browser->>server: HTTP Request GET
    note right of browser: GET request is to location defined in the header (notes.html)
    deactivate browser

    activate server
    server-->>browser: Notes.html
    note right of browser: The HTML document has a callback to reload page
    deactivate server

    activate browser
    browser->>server: Reload Notes Page
    deactivate browser

    activate server
    server-->>browser: Notes.html
    deactivate server

    activate browser
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/main.css
    deactivate browser

    activate server
    server-->>browser: The CSS file
    deactivate server

    activate browser
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/main.js
    deactivate browser

    activate server
    server-->>browser: The JavaScript file
    deactivate server

    activate browser
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/data.json
    deactivate browser

    activate server
    server-->>browser: {"Content": new note, date: "2023-11-06T00:19:10.790Z}
    deactivate server

    note right of browser: Callback function executes and renders notes