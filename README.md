# NFW
Again, experimenting making a Nodejs web-server framework.

Work work work


TODO:  
- Flesh out

  - NFWDispatcher
    - Main orchestrator for handling HTTP requests. 
    - Uses NFWHTTPServer, NFWRouteConfigurator, and NFWController to dispatch appropriate controllers upon receiving an HTTP request
    
  - NFWRouteConfigurator
    - Registers routes, and provides them to the Dispatcher to handle incoming requests
    
  - NFWController
    - When an HTTP request is received by the Dispatcher, a lookup is performed through the RouteConfigurator, and the appropriate NFWController is instantiated (using the default controller if none is given)
  
  - NFWModel
    - noinfo
  
  - NFWHTTPServer
    - Should receive an HTTP request, create a new NFWRequest, and hand it off to the dispatcher
        - Try to, for now, include basic information: 
            - Request Header & Body
                - Content-Type
                - User-Agent
            - Request method
            - Request params

  - NFWRequest
    - Is only a data model representing a request
    - shouldn't be performing any low level logic










