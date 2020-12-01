
# Table of Contents

1.  [Books](#org3253836)
2.  [Users](#org3c27f31)
3.  [Authors](#orgb04866c)
4.  [Genres](#org7663ec9)
5.  [UserBooks](#org120d42c)
6.  [AuthorGenres](#orgb8c3658)
7.  [BookGenres](#org9a1ac76)
8.  [BookAuthors](#org48a5ca7)
9.  [Publishers](#org70d76eb)
10. [Friends](#org8e2cafe)



<a id="org3253836"></a>

# Books

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`name`</td>
<td class="org-left">string(250)</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`description`</td>
<td class="org-left">text</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">`releaseDate`</td>
<td class="org-left">date</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`pageCount`</td>
<td class="org-left">integer</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`publisherId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   `publisherId` references `Publishers` table.
-   Sequelize `belongsTo` `Publishers` association.
-   Sequelize  `hasMany` `BookAuthors` association.
-   Sequelize `hasMany` `BookGenres` association.


<a id="org3c27f31"></a>

# Users

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`name`</td>
<td class="org-left">string(100)</td>
<td class="org-left">not null, unique</td>
</tr>


<tr>
<td class="org-left">`email`</td>
<td class="org-left">string(100)</td>
<td class="org-left">not null, unique</td>
</tr>


<tr>
<td class="org-left">`password`</td>
<td class="org-left">bytea</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   Unique index on `[name, email]`.
-   Sequelize `hasMany` `UserBooks` association.
-   Sequelize `hasMany` `Friends` association.


<a id="orgb04866c"></a>

# Authors

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`name`</td>
<td class="org-left">string(100)</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   Sequelize `hasMany` `BookAuthors` association.
-   Sequelize `hasMany` `AuthorGenres` association.


<a id="org7663ec9"></a>

# Genres

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null,PK</td>
</tr>


<tr>
<td class="org-left">`name`</td>
<td class="org-left">string(100)</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   Sequelize `hasMany` `AuthorGenres` association.
-   Sequelize `hasMany` `BookGenres` association.


<a id="org120d42c"></a>

# UserBooks

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`review`</td>
<td class="org-left">text</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">`rating`</td>
<td class="org-left">integer</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">`status`</td>
<td class="org-left">string(10)</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`userId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`bookId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   `userId` references `Users` table.
-   `bookId` references `Books` table.
-   Sequelize `belongsTo` `Users` association.
-   Sequelize `belongsTo` `Books` association.
-   Sequelize `status` `isIn[haveRead, reading, wantToRead]` validation.


<a id="orgb8c3658"></a>

# AuthorGenres

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`authorId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`genreId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   `authorId` references `Authors` table.
-   `genreId` references `Genres` table.
-   Sequelize `belongsTo` `Authors` association.
-   Sequelize `belongsTo` `Genres` association.


<a id="org9a1ac76"></a>

# BookGenres

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`bookId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`genreId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   `bookId` references `Books` table.
-   `genreId` references `Genres` table.
-   Sequelize `belongsTo` `Books` association.
-   Sequelize `belongsTo` `Genres` association.


<a id="org48a5ca7"></a>

# BookAuthors

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`bookId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`authorId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   `bookId` references `Books` table.
-   `authorId` references `Authors` table.
-   Sequelize `belongsTo` `Books` association.
-   Sequelize `belongsTo` `Authors` association.


<a id="org70d76eb"></a>

# Publishers

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`name`</td>
<td class="org-left">string(100)</td>
<td class="org-left">not null, unique</td>
</tr>


<tr>
<td class="org-left">`location`</td>
<td class="org-left">string(100)</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   Unique index on `name`.
-   Sequelize `hasMany` `Books` association.


<a id="org8e2cafe"></a>

# Friends

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left"><b><b>Name</b></b></th>
<th scope="col" class="org-left"><b><b>DataType</b></b></th>
<th scope="col" class="org-left"><b><b>Details</b></b></th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">`id`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, PK</td>
</tr>


<tr>
<td class="org-left">`userId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`friendId`</td>
<td class="org-left">integer</td>
<td class="org-left">not null, FK</td>
</tr>


<tr>
<td class="org-left">`createdAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>


<tr>
<td class="org-left">`updatedAt`</td>
<td class="org-left">datetime</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

-   `userId` references `Users` table.
-   `friendId` references `Users` table.
-   Sequelize `hasMany` `Users` association.

