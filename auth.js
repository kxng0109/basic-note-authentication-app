import base64 from "base-64";

const decodeCredentials = authHeaders =>{
	const encodedCredentials = authHeaders.trim().replace(/Basic\s+/i, "");
	const decodedCredentials = base64.decode(encodedCredentials);
	return decodedCredentials.split(':')
}

export default (req, res, next) =>{
	const [username, password] = decodeCredentials(
		req.headers.authorization || ''
	)

	if(username === 'admin' && password === 'admin'){
		return next();
	}

	res.set('WWW-Authenticate', 'Basic realm="user_pages"');
	res.status(401).send("Authentication required")
}