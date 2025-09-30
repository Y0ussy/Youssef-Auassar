const sharp = require("sharp");
const fs = require("fs");

async function createCircularFavicon() {
	try {
		// Read the face image
		const inputBuffer = fs.readFileSync("src/assets/face.png");

		// Create a circular mask
		const mask = Buffer.from(`
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="circle">
            <rect width="32" height="32" fill="black"/>
            <circle cx="16" cy="16" r="16" fill="white"/>
          </mask>
        </defs>
        <rect width="32" height="32" fill="white" mask="url(#circle)"/>
      </svg>
    `);

		// Process the image to make it circular
		await sharp(inputBuffer)
			.resize(32, 32)
			.composite([
				{
					input: mask,
					blend: "dest-in"
				}
			])
			.png()
			.toFile("public/favicon.png");

		console.log("Circular favicon created successfully!");
	} catch (error) {
		console.error("Error creating circular favicon:", error);
	}
}

createCircularFavicon();
