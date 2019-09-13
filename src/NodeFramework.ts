import { RouteConfigurator } from "./RouteConfigurator";
import { Configuration } from ".";

export class NodeFramework
{
	private route_configurator : RouteConfigurator;
	private configuration : Configuration;
	
	public constructor(route_configurator : RouteConfigurator, configuration : Configuration)
	{
		this.route_configurator = route_configurator;
		this.configuration = configuration;
		
	}
	
	public static serve()
	{
		// Error catch
		process.on('uncaughtException', (err) => {
			console.error('Fatal Error Caught : ' + err);
			process.exit(1);
		});
		
		try
		{
			
			
			console.log("Youve served your purpose");
		}
		catch (error)
		{
			console.log(error);
			process.exit(0);
		}
		
	}

}