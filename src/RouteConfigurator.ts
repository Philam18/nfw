import { Route } from './Route';
import { HTTPMethod } from '.';
import { IObject } from './util/IObject';
import { Controller } from './Controller';

export class RouteConfigurator
{
	private static s_instance : RouteConfigurator;
	private registry : Route[];
	
	private constructor()
	{
		this.registry = [];
	}
	
	private static instance() : RouteConfigurator
	{
		if (!RouteConfigurator.s_instance) {
			RouteConfigurator.s_instance = new RouteConfigurator();
		}
		return RouteConfigurator.s_instance;
	}
	
	/**
	 * Parses a Route's array, and returns an array of 
	 * @param routes_json IObject 
	 */
	public static register(routes_json : IObject[]) : void
	{
		RouteConfigurator.instance().registry = (function parseRoutes(routes : IObject[], properties : IObject = {}) : Route[]
		{
			let routes_pre : IObject[] = [];

			for (let route of routes)
			{
				let new_obj : IObject = route;
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
					routes_pre.push(...parseRoutes(new_obj.children, property_list));
				}
				else {
					routes_pre.push(new_obj);
				}
			}
			
			return routes_pre.map((obj)=>{
				
				return Route.create(obj);
			});
		})(routes_json);
	}
	
	public static load() : Route[]
	{
		return RouteConfigurator.instance().registry;
	}
	
}


