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












