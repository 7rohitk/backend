// lecture 6

user model structure => https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj

node-v

npm init 



// initial pushing the code

echo "# backend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/7rohitk/backend.git
git push -u origin main



// commit the changes 
git add .
git commit -m "Your commit message"
git push -u origin main


// git ignore generator 
=> https://mrkandreev.name/snippets/gitignore-generator/



PS C:\Users\91830\Desktop\backend> cd src
PS C:\Users\91830\Desktop\backend\src> ls
PS C:\Users\91830\Desktop\backend\src> touch app.js index.js constants.js
PS C:\Users\91830\Desktop\backend\src> 



// two type se importing hoti hai 
-> common 
-> module (package.json=> "type" : "module") 



// installing nodemon for saving the change without restarting
=>   npm i -D nodemon




//  changes in package.json
 
 "scripts": {
    "dev": "nodemon src/index.js"
  },




// to come out of file => cd .. 
// to come in folder => cd foldername    
   to view all folders => ls


// to create folder => mkdir foldername
// to remove folder => rmdir foldername


// install prettier  https://www.npmjs.com/package/prettier
=> npm i -D prettier
go to prettier documentation => https://prettier.io/docs/en/install.html#npm









// lecture 7



// setting up mongodb

 go to mongodb => https://www.mongodb.com/
 go to atlas => https://www.mongodb.com/cloud/atlas

make project->cluster->free->aws->region->mumbai->name =cluster0->create deployment

->username -> password ->create database user

->driver -> setup 


// create again 
network access -> create ip address ( allow access from anywhere ) -> save ip address
database access -> create user -> built in role -> read and write to any database 

database->cluster -> connect -> compass -> copy connection string



// env
paste the string - remove ending \


// npm packages install

-> express 
-> mongoose
-> dotenv 


// database is always in another continent , connection me time lagta hai 
try catch lagao 
async await lagao



// package.json  - for env file 

"scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  },



//  documentation of cookie parser ,cors , express
npm i express
npm i cookie-parser 
npm i cors



// api errors
https://nodejs.org/api/errors.html

// npm install mongoose-aggregate-paginate-v2

// mongoose middleware

// json web token - 3rd party library to send token to user => npm i jsonwebtoken
// npm i bcrypt


// token generator 
=> https://it-tools.tech/token-generator

// cloudinary 
npm i cloudinary


// multer  
=> https://www.npmjs.com/package/multer
=>npm i multer

// express file upload  


// node js fs 


// download postman 
enter url on post option 











