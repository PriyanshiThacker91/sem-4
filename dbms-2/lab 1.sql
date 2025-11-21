
--Part – A

--1. Retrieve a unique genre of songs.
SELECT DISTINCT GENRE FROM SONGS

--2. Find top 2 albums released before 2010. 
SELECT TOP 2 ALBUM_TITLE FROM Albums

--3. Insert Data into the Songs Table. (1245, ‘Zaroor’, 2.55, ‘Feel good’, 1005)
INSERT INTO SONGS VALUES(1245, 'Zaroor', 2.55, 'Feel good', 1005)

--4. Change the Genre of the song ‘Zaroor’ to ‘Happy’ 
UPDATE SONGS SET GENRE = 'HAPPY'
WHERE SONG_TITLE = 'ZAROOR'
SELECT * FROM SONGS

--5. Delete an Artist ‘Ed Sheeran’
DELETE FROM Artists
WHERE ARTIST_NAME = 'ED SHEERAN'

--6. Add a New Column for Rating in Songs Table. [Ratings decimal(3,2)]
ALTER TABLE SONGS 
ADD COLUMN RATINGS DECIMAL(3,2);

--7. Retrieve songs whose title starts with 'S'.
SELECT SONG_TITLE FROM SONGS
WHERE SONG_TITLE LIKE 'S%'

--8. Retrieve all songs whose title contains 'Everybody'. 
SELECT SONG_TITLE FROM SONGS
WHERE SONG_TITLE LIKE '%eVERYBODY%'

--9. Display Artist Name in Uppercase.
SELECT UPPER(ARTIST_NAME) FROM Artists

--10. Find the Square Root of the Duration of a Song ‘Good Luck’ 
SELECT SQRT(DURATION) FROM SONGS
WHERE SONG_TITLE = 'GOOD LUCK'

--11. Find Current Date. 
SELECT GETDATE()

--12. Find the number of albums for each artist. 
SELECT A.ARTIST_NAME, COUNT(AL.ALBUM_ID) FROM ARTISTS A
JOIN ALBUMS AL
ON AL.ARTIST_ID = A.ARTIST_ID
GROUP BY ARTIST_NAME

--13. Retrieve the Album_id which has more than 5 songs in it. 
SELECT ALBUM_ID FROM SONGS
GROUP BY ALBUM_ID
HAVING COUNT(SONG_ID) > 5

--14. Retrieve all songs from the album 'Album1'. (using Subquery) 
SELECT SONG_TITLE FROM SONGS
WHERE ALBUM_ID = (
	SELECT ALBUM_ID FROM Albums
	where Album_title = 'album1'
)

--15. Retrieve all albums name from the artist ‘Aparshakti Khurana’ (using Subquery)
select album_title from Albums
where Artist_id = (
	select Artist_id from Artists
	where Artist_name = 'Aparshakti Khurana'  
)

--16. Retrieve all the song titles with its album title.
select s.song_title, a.album_title from songs s
join Albums a
on a.Album_id = s.album_id

--17. Find all the songs which are released in 2020. 
select song_title from songs
where album_id in (					--because sub query returns more than one value
	select album_id from Albums
	where Release_year = 2020
)

--18. Create a view called ‘Fav_Songs’ from the songs table having songs with song_id 101-105.  
create view vw_Fav_songs 
as 
select * from songs
where song_id between 101 and 105

select * from vw_Fav_songs

--19. Update a song name to ‘Jannat’ of song having song_id 101 in Fav_Songs view. 
update vw_Fav_songs set song_title = 'Jannat'
where song_id = 101

--20. Find all artists who have released an album in 2020.
select Artist_name from Artists
where artist_id in (
	select Artist_id from Albums
	where Release_year = 2020
)

--21. Retrieve all songs by Shreya Ghoshal and order them by duration. 
select s.song_title from songs s
join Albums al
on s.album_id = al.Album_id
join Artists a
on a.artist_id = al.Artist_id
where a.artist_name = 'Shreya Ghoshal'
order by s.duration

--Part – B

--22. Retrieve all song titles by artists who have more than one album.  
select s.song_title, a.artist_name from songs s
join Albums al
on s.album_id = al.Album_id
join Artists a
on a.artist_id = al.Artist_id
group by a.Artist_name,  s.song_title
having count(s.Album_id) >1

--23. Retrieve all albums along with the total number of songs.  
select a.album_title, count(s.song_id) from songs s
join albums a
on s.album_id = a.Album_id
group by a.album_title

--24. Retrieve all songs and release year and sort them by release year.  
select s.song_title, al.release_year from songs s
join Albums al
on s.album_id = al.Album_id
group by s.song_title, al.Release_year
order by al.Release_year 

--25. Retrieve the total number of songs for each genre, showing genres that have more than 2 songs. 
select genre, count(song_id) from songs
group by genre
having count(song_id)>2

--26. List all artists who have albums that contain more than 3 songs.
select a.artist_name from Artists a
join Albums al
on a.artist_id = al.Artist_id
join songs s
on s.album_id = al.Album_id
group by a.Artist_name
having count(s.song_id) > 3

--Part – C

--27. Retrieve albums that have been released in the same year as 'Album4' 
select al.album_title, al.Release_year from Albums al
join songs s
on s.album_id = al.Album_id
group by  al.album_title
having al.Release_year = (
	select al.Release_year from Albums al
	where al.Album_title = 'album4'
)

SELECT al.album_title
FROM Albums al
JOIN songs s
    ON s.album_id = al.album_id
GROUP BY al.album_title
HAVING al.Release_year = (
    SELECT al.Release_year
    FROM Albums al
    WHERE al.album_title = 'album4'
);

--28. Find the longest song in each genre 

--29. Retrieve the titles of songs released in albums that contain the word 'Album' in the title. 

--30. Retrieve the total duration of songs by each artist where total duration exceeds 15 minutes. 
 