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
			
			
			console.log("Youve served your purpose");
		}
		catch (error)
		{
			console.log(error);
			process.exit(0);
		}
		
	}

}