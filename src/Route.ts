import { HTTPMethod } from './http/HTTPMethod';
import { Controller } from './Controller';
import { IObject    } from './util/IObject';

export class Route
{
	public path        : string;
	public method      : string | HTTPMethod;
	public template?   : string | null;
	public controller? : Controller | null;
	
	private constructor(
		path        : string,
		method      : HTTPMethod = HTTPMethod.GET,
		template?   : string,
		controller? : Controller
	)
	{
		this.path       = path;
		this.method     = method;
		this.template   = null;
		this.controller = null;
		
		if (template !== undefined) {
			this.template = template;
		}
		
		if (controller !== undefined) {
			this.controller = controller;
		}
		else {
			this.controller = new Controller();
		}
	}
	
	public static create(obj : IObject) : Route
	{
		return new Route(obj.path, obj.method, obj.template, obj.controller);
	}
	
	
}