# movie-api

NodeJS ile oluşturulmuş basit bir API projesi
<hr>

# Movies
<table>
    <thead>
        <tr>
            <th>Route</th>
            <th>HTTP Verb</th>
            <th>POST Body</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/api/movies/</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Tüm filmleri listeler</td>
        </tr>
        <tr>
            <td>/api/movies/</td>
            <td>POST</td>
            <td>{'title': 'foo', 'category': 'bar', 'country': 'Atlantis', 'year': 9999, 'director': 'John Doe', 'imdb_score': 9.9}</td>
            <td>Bir film ekler</td>
        </tr>
        <tr>
            <td>/api/movies/:movie_id</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Bir film bilgisini getirir</td>
        </tr>
        <tr>
            <td>/api/movies/:movie_id</td>
            <td>PUT</td>
            <td>{title: 'bar', category: 'foo', year: 9888}</td>
            <td>Bir filmi günceller</td>
        </tr>
        <tr>
            <td>/api/movies/:movie_id</td>
            <td>DELETE</td>
            <td>Empty</td>
            <td>Bir filmi siler</td>
        </tr>
        <tr>
            <td>/api/movies/top/:number</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Verilen sayısal değere göre imdb_score büyükten küçüğe olmak kaydıyla filmleri listeler</td>
        </tr>
        <tr>
            <td>/api/movies/between/:start_year/:end_year</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Verilen yıllara göre, aralığa denk gelen filmleri listeler</td>
        </tr>
    </tbody>
</table>

<hr>

# Directors
<table>
    <thead>
        <tr>
            <th>Route</th>
            <th>HTTP Verb</th>
            <th>POST Body</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/api/directors/</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Tüm yönetmenleri listeler</td>
        </tr>
        <tr>
            <td>/api/directors/</td>
            <td>POST</td>
            <td>{'name': 'John', 'surname': 'Doe'}</td>
            <td>Bir yönetmen ekler</td>
        </tr>
        <tr>
            <td>/api/directors/:director_id</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Bir yönetmen bilgisini getirir</td>
        </tr>
        <tr>
            <td>/api/directors/:director_id</td>
            <td>PUT</td>
            <td>{name: 'Jonnie', surname: 'Doe'}</td>
            <td>Bir yönetmeni günceller</td>
        </tr>
        <tr>
            <td>/api/directors/:director_id</td>
            <td>DELETE</td>
            <td>Empty</td>
            <td>Bir yönetmeni siler</td>
        </tr>
        <tr>
            <td>/api/directors/best/:number</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Verilen sayısal değere göre imdb_score büyükten küçüğe olmak kaydıyla filmleri listeler</td>
        </tr>
    </tbody>
</table>
