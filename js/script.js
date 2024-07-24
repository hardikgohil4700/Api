let doglist = document.getElementById("dog-list");
let dogimg = document.getElementById("dog-img");


    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(itemlist => {

            let listKey =itemlist.message;

            for (const key in listKey) {
                if (listKey[key].length === 0) {

                     doglist.innerHTML += `<li class="item-list" onclick="return dogimglist('${key}')">
                                    <a href="#" class="act">
                                        <span>${key}</span>
                                    </a>
                            </li>`;
                } else {
                    let subList = `<ul>`;
                    listKey[key].forEach(sub => {
                        subList += `<li>
                                    <a href="javascript:void(0)">
                                        <span>${sub}</span>
                                    </a>
                                </li>`
                    });
                    subList += `</ul>`;
                     doglist.innerHTML += `<li class="item-list" onclick="return dogimglist('${key}')"><a href="javascript:void(0)">${key}</a> ${subList}</li>`
                }
            }

        })
        .catch((err) => {
            console.log("Error", err);
        });


const dogimglist = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res.json())
        .then((images) => {
            const imgList = images.message;
            dogimg.innerHTML = ""; 

            imgList.forEach((Dogimg) => {
                dogimg.innerHTML += `<div class="w-4 " >
                            <div class= "d-flex img-w">
                                <img src="${Dogimg}" alt="${breed}">
                            </div>
                        </div>`;
            });
        })
        .catch((err) => {
            console.log("Error", err);
        });
};

