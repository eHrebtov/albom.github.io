const testFolder = './src/assets/photos';
const fs = require('fs');

const images = []

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        images.push(file)
        console.log(file);
    });

    let data = `export default ${JSON.stringify(images)}`;
    fs.writeFileSync('./src/utils/images.ts', data);
});

