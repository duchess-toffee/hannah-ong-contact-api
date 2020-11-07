require('dotenv');

import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';

const querystring = require('querystring');
const nodemailer = require('nodemailer');

export const contact: APIGatewayProxyHandler = (event) => {
	const data = querystring.parse(event.body);
	const { name, email, message } = data;

	if (!name || !email || !message) {
		console.log('no name, email, or message');
		return;
	}

	let transport = nodemailer.createTransport({
		host: process.env.AWS_SMTP_SES_SERVER_NAME,
		port: process.env.AWS_SMTP_SES_PORT,
		auth: {
			user: process.env.AWS_SMTP_SES_USERNAME,
			pass: process.env.AWS_SMTP_SES_PASSWORD,
		},
	});

	const emailMessage = {
		from: process.env.INTERNAL_EMAIL,
		to: process.env.INTERNAL_EMAIL,
		subject: `New Message from ${name}`,
		text: `You received a new message from your personal site. Name: ${name}, Email: ${email}, Message: ${message}`,
		html: `<h1>You received a new message from your personal site.</h1><br/><hr/>
    <h3>Name: ${name}</h3><br/> 
    <h3>Email: ${email}</h3><br/>
    <h3>Message: ${message}</h3>`,
	};

	return new Promise((resolve) => {
		transport.sendMail(emailMessage, function (err, info) {
			if (err) {
				console.log(err);
			} else {
				console.log(info);
			}
			const response: APIGatewayProxyResult = {
				statusCode: 301,
				headers: {
					Location: process.env.REDIRECT_URL,
				},
				body: '',
			};
			resolve(response);
		});
	});
};
