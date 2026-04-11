let url="https://www.themealdb.com/api/json/v1/1/categories.php"
fetch(url)
.then(response=>response.json())
.then(data=>console.log(data)
)
.catch(error=>{console.log("error",error)})