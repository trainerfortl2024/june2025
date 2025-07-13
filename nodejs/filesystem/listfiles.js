const fs = require('fs').promises
async function listFiles() {
    try{
        const files = await fs.readdir('.')
        for(const file of files){
            const stats = await fs.stat(file);
            if(stats.isFile()){
                console.log(`${file} is a file `)
            }
            else{
                console.log(`${file} is a directory `)
            }
        }
    }
    catch(err){
        console.log('err ',err)
    }
}
listFiles();