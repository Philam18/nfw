import { ENV } from './util/ENV';

export class Configuration
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