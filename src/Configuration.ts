import { ENV } from './util/ENV';
import { IObject } from './util/IObject';
import { Util } from './util/Util';

export class Configuration
{
	private static DEFAULT_ENVIRONMENT : ENV = ENV.LOCAL;
	private static DEFAULT_PORT : string = "8080";
	
	private static s_instance : Configuration;
	private config : IObject;
	
	private constructor()
	{
		this.config = {};
		// Insert Default Values
		this.config.PORT        = Configuration.DEFAULT_PORT;
		this.config.ENVIRONMENT = Configuration.DEFAULT_ENVIRONMENT;
	}
	
	private static instance() : Configuration
	{
		if (!Configuration.s_instance) {
			Configuration.s_instance = new Configuration();
		}
		return Configuration.s_instance;
	}
	
	public static write<K extends string, V>(key : K, value : V) : void
	{
		Configuration.instance().config = Util.objectDeepMerge(Configuration.instance().config, {key : value});
	}
	
	public static getConfig<K extends string, V>(var_path : K, defaux? : V) : any
	{
		
	}

	public static test()
	{
		console.log(Configuration.instance().config);
	}
	
}