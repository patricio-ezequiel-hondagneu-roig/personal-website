/**
 * An object that exposes information that depends on the environment where the application is running.
 */
export interface Environment {
	/**
	 * Label that identifies the environment where the application is running.
	 */
	environmentName: string;

	/**
	 * Flag that equals _true_ if the environment is the Production environment and _false_ otherwise.
	 */
	isProduction: boolean;
}