```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP Request POST
    note right of browser: New Note Is Submitted
    activate server
    server-->>browser: HTTP GET 302 Redirect
    deactivate server
    note right of browser: Server redirects browser, calls for new GET request
    
    browser->>server: HTTP Request GET
    note right of browser: GET request is to location defined in the header (notes.html)

    activate server
    server-->>browser: Notes.html
    deactivate server
    note right of browser: The HTML document has a callback to reload page
    
    browser->>server: Reload Notes Page
    activate server
    server-->>browser: Notes.html
    deactivate server

    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The CSS file
    deactivate server

    
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: The JavaScript file
    deactivate server

    
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: {"Content": new note, date: "2023-11-06T00:19:10.790Z}
    deactivate server

    note right of browser: Callback function executes and renders notes
