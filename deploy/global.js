const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const getConfig = require("../util/getConfig");
const LoadCommands = require("../util/loadCommands");

(async () => {
	const config = await getConfig();
	const rest = new REST({ version: "9" }).setToken('MTE0OTY4MDU3NDYyNjI4MzUyMA.GxYwcU.lU9oY8cnChg6Bi-5rmlhmVsqQejyxT4hADSJ_U');
	const commands = await LoadCommands().then((cmds) => {
		return [].concat(cmds.slash).concat(cmds.context);
	});
	
	console.log("Deploying commands to global...");
	await rest
		.put(Routes.applicationCommands('1149680574626283520'), {
			body: commands,
		})
		.catch(console.log);
	console.log("Successfully deployed commands!");
})();
