import * as EJS from 'ejs';

export interface IObject
{
	[key : string] : any;
}

export interface IRoute extends IObject
{
	readonly path       : string;
	readonly method?    : HTTPMethod;
	readonly template?  : string;
	readonly controller?: string;
}

export enum HTTPMethod
{
	GET  = "GET",
	POST = "POST"
}

export class HTTPStatusCode
{
	
}

export enum ENV
{
	DEV   = "dev",
	LOCAL = "local",
	QA    = "qa",
	PROD  = "prod",
}

export class Environment
{
	private static readonly DEFAULT_ENVIRONMENT : ENV = ENV.LOCAL;
	private static readonly DEFAULT_PORT : string             = "8080";
	
	private static readonly DEFAULT_DIRECTORY_SEPERATOR = '/';


	public static getEnvironment() : ENV
	{
		if (process.env.FRAMEWORK_ENVIRONMENT !== undefined)
		{
			switch(process.env.FRAMEWORK_ENVIRONMENT)
			{
				case ENV.DEV: 
					return ENV.DEV;
				case ENV.QA:
					return ENV.QA;
				case ENV.PROD:
					return ENV.PROD;
			}
		}
		return this.DEFAULT_ENVIRONMENT;
	}

	public static getPort() : string
	{
		if (process.env.PORT !== undefined) {
			return process.env.PORT.toString();
		}
		return this.DEFAULT_PORT;
	}

	public static getDirectorySeperator() : string
	{
		if (process.env.DIRECTORY_SEPERATOR !== undefined) {
			return process.env.DIRECTORY_SEPERATOR;
		}
		return this.DEFAULT_DIRECTORY_SEPERATOR;
	}

	public static getRootDirectory() : string
	{
		return this.replacePathDirectorySeperator(require("path").resolve("."));
	}

	public static getRootDirectoryWithTrailingSlash() : string
	{
		return this.getRootDirectory() + this.getDirectorySeperator();
	}

	public static getSourceDirectory() : string
	{
		return this.getRootDirectory() + this.getDirectorySeperator() + 'src'; 
	}

	public static getSourceDirectoryWithTrailingSlash() : string
	{
		return this.getSourceDirectory() + this.getDirectorySeperator(); 
	}

	public static replacePathDirectorySeperator(input : string) : string
	{
		return input.replace(/\\/g, this.getDirectorySeperator());
	}
}

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

export class Request
{
	private static path : string;
	private static base_url : string;
	private static query_parmas : string;

}

export class TemplateRenderer
{
	public static render(template : string, view_model : Object) : string
	{
		return EJS.render(template, view_model);
	}
}

export class NodeFramework
{
	public loadConfig(config : Object) : void
	{
		
	}
	
	
	
	public serve()
	{
		// Error catch
		process.on('uncaughtException', (err) => {
			console.error('Fatal Error Caught : ' + err);
			process.exit(1);
		});
		
		try
		{
			// let routes : IRoute[] = (function parseRoutes(routes : IRoute[], properties : IObject = {}) : IRoute[]
			// {
			// 	let result : IRoute[] = [];

			// 	for (let route of routes)
			// 	{

			// 		let new_obj : IRoute = route;
			// 		for (let key in properties)
			// 		{
			// 			if (properties.hasOwnProperty(key) && new_obj.hasOwnProperty(key) === false) {
			// 				new_obj[key] = properties[key];
			// 			}
			// 		}

			// 		if (new_obj.hasOwnProperty('children'))
			// 		{
			// 			let property_list : IObject = {};
			// 			for (let prop in new_obj)
			// 			{
			// 				if (new_obj.hasOwnProperty(prop) === true) {
			// 					if (prop === 'children') {
			// 						continue;
			// 					}
			// 					property_list[prop] = new_obj[prop];
			// 				}
			// 			}

			// 			let child_routes : IRoute[] = parseRoutes(new_obj.children, property_list);
			// 			for (let children of child_routes) {
			// 				result.push(children);
			// 			}
			// 		}
			// 		else {
			// 			result.push(new_obj);
			// 		}
			// 	}
			// 	return result;
			// })(Routes);

			// if (routes.length === 0) {
			// 	throw new Error("No routes defined");
			// }
			// else
			// {
			// 	NodeFramework.autoload(routes);
			// }

			// for (let route_config of routes)
			// {
			// 	let controller : Controller);
			// 	if (route_config.controller !== undefined) {
			// 	    controller = route_config.controller;
			// 	}
			// 	let method : HTTPMethod = route_config.method !== undefined ? HTTPMethod[route_config.method] : HTTPMethod.GET;
			// }

			// let port = Config.getPort();
			// app.listen(port, function () {
			//     console.log("====================================");
			//     console.log(`Listening on port ${port} ...`);
			//     console.log("====================================");
			// });
			
			console.log("Youve served your purpose");
			
		}
		catch (error)
		{
			console.log(error);
			process.exit(0);
		}
		
	}

}









