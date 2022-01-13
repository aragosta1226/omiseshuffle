// const locations = [
//     {
//         place: "海"
//     },
//     {
//         place: "山"
//     },
//     {
//         place: "川"
//     },
//     {
//         place: "プール"
//     },
//     {
//         place: "買い物"
//     }
//

// let hoge = 123

// hoge = 234

// const huga = huga[
//     {plase:"aaa"},
//     {plase:"hoge"}
// ]
// huga =234
// huga[]


// const beforeProcessing = document.getElementById("beforeProcessing")
// const li = document.createElement('li')
// li.textContent = `${location.place}`
// beforeProcessing.appendChild(li)

function convertTimestampToDatetime(timestamp) {
    const _d = timestamp ? new Date(timestamp * 1000) : new Date();
    const Y = _d.getFullYear();
    const m = (_d.getMonth() + 1).toString().padStart(2, "0");
    const d = _d.getDate().toString().padStart(2, "0");
    const H = _d.getHours().toString().padStart(2, "0");
    const i = _d.getMinutes().toString().padStart(2, "0");
    // const s = _d.getSeconds().toString().padStart(2, "0");
    return `${Y}年 ${m}月 ${d}日 ${H}時${i}分`;
}

function omiseList() {
    const omise = document.getElementById("list").value;
    // console.log(omise);
    const li = document.createElement('li');
    // console.log(li);
    li.className = "omiselist"
    // console.log(li.className);
    li.textContent = `${omise}`
    // console.log(li.textContent);
    const omisekouho = document.getElementById("omise");
    // console.log(omisekouho);
    omisekouho.appendChild(li);
    // console.log(omisekouho.appendChild);

    // console.log(arr);
}

function shuffle(arr) {
    // const array = arrays.slice()
    // for(let i = 1; i >= 0; i--) {
    return  Math.floor(Math.random() * (arr.length + 1));
        // [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    // console.log(shuffle)
}

function omiseShuffle(){
    let objs = document.getElementsByClassName("omiselist");
    // console.log(objs)
    let arr = Array.from(objs);
    // console.log(arr)
    let shuffledOmiseList = shuffle(arr)
    // console.log(arr.length)
    // console.log(shuffledOmiseList)
    let trap = arr.length
    // console.log(shuffledOmiseList == trap)
    // let test1 = Number(shuffledOmiseList)
    // let test2 = Number(trap)
    // console.log(test1==test2)
    if(shuffledOmiseList == trap) {
    // console.log("naka")
    document.getElementById("letsgo").innerHTML="元祖長浜"
    }else if(shuffledOmiseList !== trap){
    // console.log(shuffledOmiseList)
    // let afterProcessing = document.getElementById("afterProcessing")
    // console.log(afterProcessing)
    // const li = document.createElement('li')
    textContent = `${arr[shuffledOmiseList].innerHTML}`
    // console.log(textContent)
    // console.log(li)
    document.getElementById("letsgo").innerHTML=textContent
}
}