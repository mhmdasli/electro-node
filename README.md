# electro-node 
electro-node is a Desktop App And Server
frontend and backend connected with the x-handler on the client and server

## file structure
```
root-folder/
    └── app/                        -- express app
    ├─────└── publiic/                -- main html and js/css libraries
    ├─────└── routes/                 -- routers folder
    ├─────└── x-handler/              -- x-handler server side functions and views
    ├─────└── express.js              -- app entery point
    └── config /                    -- includes squirrel installition config
    └── menu                        -- main menue settings
    └── main.js                     -- entery point 
```
## x-handler client
use this data attributes inside any of the following tags:
form,button,a, and any form input tag
 ```
data-request-url="/"                                 --url (default is current)
data-request="onUserType"                            --the function to invoke inside server x-handler
data-request-data="id: 7"                            --additional data
data-request-confirm="confirm?"                      --before send event
data-request-redirect=""                             --redirect after success
data-request-error=""                                --handle error
data-request-complete=""                             --after complete(success or not)
data-request-loading="loading"                       --loading style
data-request-update="'mypartial': '#response'"       --update specific element after success(response must have the partial name and data)
data-request-before-update="beforeUpdate(data)"      --before update function
data-request-success="onSuccess(data)"               --if success then..
data-track-input                                     --keep track changes (works on input text,number,password), if change new request will be made
 ```
 ## x-handler server
 this module includes the x-handler server methods and socket.io data object
 also contains an app folder for rendering partials, by default its used twig templating and could be changed.


## run the app
install dependencies
```
npm run prebuild
```
start dev app
```
 npm start
```
create x64 package
```
 npm run exe64
```
create x32 package
```
 npm run exe32
```
create x64 installer
```
 npm run set64
```
create x32 installer
```
 npm run set32
```
create all windows installer
```
 npm run setup
```