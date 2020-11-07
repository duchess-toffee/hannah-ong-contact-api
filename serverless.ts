import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
	service: {
		name: 'severless2',
	},
	frameworkVersion: '2',
	custom: {
		webpack: {
			webpackConfig: './webpack.config.js',
			includeModules: true,
		},
	},
	// Add the serverless-webpack plugin
	plugins: ['serverless-webpack', 'serverless-dotenv-plugin'],
	provider: {
		name: 'aws',
		runtime: 'nodejs12.x',
		profile: 'serverless-test',
		apiGateway: {
			minimumCompressionSize: 1024,
		},
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
		},
	},
	functions: {
		hello: {
			handler: 'handler.contact',
			events: [
				{
					http: {
						method: 'post',
						path: 'contact',
					},
				},
			],
		},
	},
};

module.exports = serverlessConfiguration;
