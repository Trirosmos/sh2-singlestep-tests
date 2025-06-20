const fs = require("fs"); 

function removeUnecessary(data) {
	for(c in data) {
		var test_case = data[c];

		delete test_case["initial"]["FP0"];
		delete test_case["initial"]["FP1"];
		delete test_case["initial"]["FPUL"];
		delete test_case["initial"]["R_"];
		delete test_case["initial"]["FPSCR"];
		delete test_case["initial"]["SSR"];
		delete test_case["initial"]["SGR"];
		delete test_case["initial"]["SPC"];
		delete test_case["initial"]["DBR"];

		delete test_case["final"]["FP0"];
		delete test_case["final"]["FP1"];
		delete test_case["final"]["FPUL"];
		delete test_case["final"]["R_"];
		delete test_case["final"]["FPSCR"];
		delete test_case["final"]["SSR"];
		delete test_case["final"]["SGR"];
		delete test_case["final"]["SPC"];
		delete test_case["final"]["DBR"];

		test_case.final.SR &= 0x3F3;
		test_case.initial.SR &= 0x3F3;
	}

	return data;
}

function fixSwappedRegisterBanks(data) {
	for(c in data) {
		var test_case = data[c];

		test_case.final.R = test_case.initial.R;
	}

	return data;
}


const dir = fs.opendirSync('.')
let dirent;

while ((dirent = dir.readSync()) !== null) {
	if(dirent.name.slice(-4) == "json") {
		console.log("Fixing " + dirent.name);
		const raw_data = fs.readFileSync(dirent.name);
		const data = JSON.parse(raw_data);

		if(dirent.name == "0100mmmm00000111.json") {
			fixSwappedRegisterBanks(data);
		}


		const fixed = JSON.stringify(removeUnecessary(data));
		//fs.writeFileSync(dirent.name.replace("_sz0_pr0", ""), fixed);
		//fs.unlinkSync(dirent.name);
	}
}
dir.closeSync()