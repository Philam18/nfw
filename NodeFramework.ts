import { IObject } from '../lib/util/IObject';
import { IRoute } from '../lib/IRoute';
import { Config } from '../config/Config';
import { ClassMap } from '../ClassMap';
import { Routes } from '../config/Routes';

import * as TemplateRenderer from './TemplateRenderer';
import { Controller } from './Controller';
import { HTTPMethod } from './http/HTTPMethod';
import { Environment } from './Environment';


export class NodeFramework
{
    ////////////////////////////////////////////////////////////
    // 
    ////////////////////////////////////////////////////////////
    public static serve()
    {
        try
        {
            let routes : IRoute[] = (function parseRoutes(routes : IRoute[], properties : IObject = {}) : IRoute[]
            {
                let result : IRoute[] = [];

                for (let route of routes)
                {

                    let new_obj : IRoute = route;
                    for (let key in properties)
                    {
                        if (properties.hasOwnProperty(key) && new_obj.hasOwnProperty(key) === false) {
                            new_obj[key] = properties[key];
                        }
                    }

                    if (new_obj.hasOwnProperty('children'))
                    {
                        let property_list : IObject = {};
                        for (let prop in new_obj)
                        {
                            if (new_obj.hasOwnProperty(prop) === true) {
                                if (prop === 'children') {
                                    continue;
                                }
                                property_list[prop] = new_obj[prop];
                            }
                        }

                        let child_routes : IRoute[] = parseRoutes(new_obj.children, property_list);
                        for (let children of child_routes) {
                            result.push(children);
                        }
                    }
                    else {
                        result.push(new_obj);
                    }
                }
                return result;
            })(Routes);

            if (routes.length === 0) {
                throw new Error("No routes defined");
            }
            else
            {
                // NodeFramework.autoload(routes);
            }

            for (let route_config of routes)
            {
                // let controller : Controller);
                // if (route_config.controller !== undefined) {
                //     controller = route_config.controller;
                // }
                // let method : HTTPMethod = route_config.method !== undefined ? HTTPMethod[route_config.method] : HTTPMethod.GET;
            }

            // let port = Config.getPort();
            // app.listen(port, function () {
            //     console.log("====================================");
            //     console.log(`Listening on port ${port} ...`);
            //     console.log("====================================");
            // });
            
        }
        catch (error)
        {
            console.log(error);
            process.exit(0);
        }
    }

    // public static async autoload(routes : IRoute[])
    // {
    //     let class_import : [] = [];
    //     for (let route_config of routes)
    //     {
    //         if (route_config.controller !== undefined) {
    //             let class_name = route_config.controller;
    //             let class_path = Environment.getSourceDirectoryWithTrailingSlash() + ClassMap[class_name];
    //             let class_import = await import(class_path);
    //             class_import.push(class_import);
    //         }
    //     }
        
    //     console.log(class_import);
    //     process.exit(0);
    // }



}