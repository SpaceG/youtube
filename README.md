Hello World !

This is my YouTube Api. Which shows your Playlist and Videos on your Website. 
The App will be Avaible in some Days. !
Have Fun.

Install it!

First be sure you have already installed Node.js, Grunt.js, Bower.js, Npm.js, Homebrew, and MongoDB to Start this small App.


If you want go with a Database : see the (server.js) file. You can also configure it there. 
When you go with MongoDB (you have also install MongoDB dependencies). https://www.mongodb.com/
See Install Video : 



First: 
1. You Have to Install Xcode Command Lines Tools from Apple (Mac OsX) : 
See Install Video :


2. Then you have to go with Homebrew (Install it to your Machine) : http://brew.sh/
See Install Video : 

3. Then Install NPM (npm is the package manager for JavaScript. Find, share, and reuse packages of code from hundreds of thousands of developers — and assemble them in powerful new ways.)  npm.js :  https://www.npmjs.com/


4. Install Grunt.js The Javascript Task Runner : http://gruntjs.com/
See Install Video : 

5. Install Bower.js Go See the Bower.js (A package manager for the web) : https://bower.io/
See Install Video : 

6.  


<h2>Install the YTAPI Pluggin / follow my Installtion Guide. (without MongoDB) </h2>

Open two Terminal Windows: 

1. $ git clone https://github.com/SpaceG/youtube.git

2. $ cd youtube

3. $ npm install

3. $ npm install grunt

3. $ npm install -g bower

 - tasks:

3. $ grunt

4. $ grunt concat

5. $ grunt watch



Open New Terminal Window:

Open the foler (youtube)

1. cd youtube

Start the Server: 

2. node server.js 





<h2>Install the YTAPI Pluggin / follow my Installtion Guide. (WITH MongoDB) </h2>

Open four Terminal Windows: 

- 1. Terminal Window 1 
==========================

1. $ git clone https://github.com/SpaceG/youtube.git

2. $ cd youtube

3. $ npm install

3. $ npm install grunt

3. $ npm install -g bower

3. $ brew doctor

4. $ brew update 

5. brew install mongodb

 - tasks:

3. $ grunt

4. $ grunt concat

5. $ grunt watch


- 2. Termninal Window 2
======================== 

Open New Terminal Window:

Open the foler (youtube)

1. cd youtube

Start the Server: 

2. node server.js 


- 3. Terminal Window 3
========================

go to your root directory (home directory)
then type 

1. $ mongod


- 4. Terminal Window 4
=========================

then Open in your downloaded mongodb folder 
most time (/Users/yourcomputer/downloads/mongodb/bin) the Binarys of MongoDB.
Then Type : 

2. $ mongo





