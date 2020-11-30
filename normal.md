CREATE USER reader WITH PASSWORD 'password' CREATEDB;
CREATE DATABASE badreads WITH OWNER reader;
\q

npm install;
npx sequelize-cli init;

npx sequelize-cli model:generate --name Author --attributes name:string
npx sequelize-cli model:generate --name Genre --attributes name:string
npx sequelize-cli model:generate --name Publisher --attributes name:string,location:string
npx sequelize-cli model:generate --name Book --attributes name:string,description:text,releaseDate:date,pageCount:integer,publisherId:integer
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name BookAuthor --attributes bookId:integer,authorId:integer
npx sequelize-cli model:generate --name AuthorGenre --attributes authorId:integer,genreId:integer
npx sequelize-cli model:generate --name BookGenre --attributes bookId:integer,genreId:integer
npx sequelize-cli model:generate --name UserBook --attributes userId:integer,bookId:integer,review:text,rating:integer,status:boolean
npx sequelize-cli model:generate --name Friend --attributes userId:integer,friendId:integer
