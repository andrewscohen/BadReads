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

npx sequelize-cli seed:generate --name AuthorData
npx sequelize-cli seed:generate --name GenreData
npx sequelize-cli seed:generate --name PublisherData
npx sequelize-cli seed:generate --name BookData
npx sequelize-cli seed:generate --name UserData
npx sequelize-cli seed:generate --name BookAuthorData
npx sequelize-cli seed:generate --name AuthorGenreData
npx sequelize-cli seed:generate --name BookGenreData
npx sequelize-cli seed:generate --name UserBookData
npx sequelize-cli seed:generate --name FriendData

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
