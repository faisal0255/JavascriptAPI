let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
// let country = "india";

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colList = await getColleges(country);
    show(colList);
});

function show(colList) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colList) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}



async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
       return res.data;
    } catch (e) {
        console.log("Error",e);
        return [];
    }
}