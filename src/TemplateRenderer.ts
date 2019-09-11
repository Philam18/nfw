import * as EJS from 'ejs';


export class TemplateRenderer
{
	public static render(template : string, view_model : Object) : string
	{
		return EJS.render(template, view_model);
	}
}
