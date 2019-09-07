import { Request } from "./Request";
import { IRoute } from "./IRoute";

export class Controller
{
    ////////////////////////////////////////////////////////////
    // 
    ////////////////////////////////////////////////////////////
    private request : any;
    private readonly config : IRoute;
    
    ////////////////////////////////////////////////////////////
    // 
    ////////////////////////////////////////////////////////////
    public constructor(config : IRoute, request : any)
    {
        this.config  = config;
        this.request = request;
    }

    public dispatch()
    {
        
    }

}