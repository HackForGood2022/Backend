
export default async (req, res) => {
	let ofertas = [
		// top 4 friends with the higest score
		{ offer: "Ganadero/a", village: "Villanueva de Sigena", name: "Ayelen Nuño", username: "@ayelen", picture: 2},
		{ offer: "Panadero/a", village: "La Puebla de Hijar", name: "Ismael Tienda", username: "@Ismati5", picture: 1},
		{ offer: "Temporeros", village: "Canfranc", name: "Jorge Aranda", username: "@j_jorge", picture: 3},
		{ offer: "Ingeniero/a forestal", village: "Fago", name: "Celia", username: "@celiaHw", picture: 4},
		{ offer: "Librero/a", village: "Hoz de Barbastro", name: "Jaime Roncal", username: "@jaimeoncal_", picture: 2},
		{ offer: "Administrativo", village: "Canfranc", name: "Raúl", username: "@raulIS", picture: 1},
		{ offer: "Auxiliar de veterinaria", village: "La Puebla de Hijar", name: "Ruth López", username: "@ruth", picture: 5},
		{ offer: "Carnicero/a", village: "ALcolea", name: "Jaime Roncal", username: "@jaimeroncal_", picture: 2},
		{ offer: "Paisajista", village: "Villanueva de Sigena", name: "Ayelen Nuño", username: "@ayelen2", picture: 1},
	];
	res.status(200).json({
		result: "success",
		ofertas,
		reason: "",
	});
	/*
	const message = req.body;
	
	const fields = ['username','password'];

	const rest = checkFields(message,fields)
	if (rest.length != 0){
		const msg = "invalid credentials, expected: " + rest
		res.status(200).json({ result: "error", reason: msg });
		return;
	}

	const user = await selectPlayerDB(message.username);

	// checks the autenticity
	if (user != undefined) {
		if (user.password_hash == message.password) {
			//cambiar por password + anadir mecanismo hash

			// looks for the top N players within the friends set
			const N = 4;	//number of players in the ranking
			let bestFour = await bestN(user,N);

							//[
				// top 4 friends with the higest score
				//{ username: ranking[0].username, stars: ranking[0].stars },
				//{ username: ranking[1].username, stars: ranking[1].stars },
				//{ username: ranking[2].username, stars: ranking[2].stars },
				//{ username: ranking[3].username, stars: ranking[3].stars },
			//];

			const notifications = (await selectPetitionsDB(message.username)).length; // amount of notifications

			res.status(200).json({
				result: "success",
				picture: user.image_ID,
				stars: user.stars,
				coins: user.mooncoins,
				bestFour,
				notifications,
				reason: "",
			});
		} else {
			res.status(200).json({ result: "error", reason: "wrong_password" });
		}
	} else {
		res.status(200).json({ result: "error", reason: "user_not_found" });
	}*/
};
