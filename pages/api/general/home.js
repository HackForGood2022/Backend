
export default async (req, res) => {
	let ofertas = [
		// top 4 friends with the higest score
		{ offer: "Ganadero/a", village: "Villanueva de Sigena", name: "Ayelen Nuño", username: "@ayelen", picture: "https://www.publico.es/uploads/2017/11/16/5a0d6cbbd22d5.jpg" },
		{ offer: "Panadero/a", village: "La Puebla de Hijar", name: "Ismael Tienda", username: "@Ismati5", picture: "https://www.turismodearagon.com/wp-content/uploads/2014/04/la_puebla_de_hijar_-_bajo_martin.jpg" },
		{ offer: "Librero/a", village: "Hoz de Barbastro", name: "Jaime Roncal", username: "@jaimeoncal_", picture: "https://www.turismodearagon.com/wp-content/uploads/2014/04/hoz_de_barbastro_-_somontano_de_barbastro_-_foto_jose_ma_puig_1.jpg" },
		{ offer: "Administrativo", village: "Canfranc", name: "Raúl", username: "@raulIS", picture: "https://www.publico.es/uploads/2017/11/16/5a0d6cbbd22d5.jpg" },
		{ offer: "Carnicero/a", village: "ALcolea", name: "Jaime Roncal", username: "@jaimeroncal_", picture: "https://www.publico.es/uploads/2017/11/16/5a0d6cbbd22d5.jpg" },
		{ offer: "Paisajista", village: "Villanueva de Sigena", name: "Ayelen Nuño", username: "@ayelen2", picture: "https://www.publico.es/uploads/2017/11/16/5a0d6cbbd22d5.jpg" },
		{ offer: "Temporeros", village: "Canfranc", name: "Jorge Aranda", username: "@j_jorge", picture: "https://blog.infoempleo.com/media/2017/07/ThinkstockPhotos-dv175003.jpg" },
		{ offer: "Ingeniero/a forestal", village: "Fago", name: "Celia", username: "@celiaHw", picture: "https://media.istockphoto.com/photos/man-holding-paper-project-in-the-park-picture-id1167514305?k=20&m=1167514305&s=612x612&w=0&h=WmOsmlujf_Q9CBHUANokTc4FTRP_LtjE7H1W1pwDWZE=" },
		{ offer: "Auxiliar de veterinaria", village: "La Puebla de Hijar", name: "Ruth López", username: "@ruth", picture: "https://elguadarramista.files.wordpress.com/2015/11/sin-tc3adtulo2.png" },
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
