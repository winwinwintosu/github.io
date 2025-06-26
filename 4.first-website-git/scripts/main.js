const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

//変数（let）
let myVariable;
myVariable = "Bob";
myVariable = "Steve";
console.log(myVariable);

/*
//条件文
let iceCream = "チョコレート";
if (iceCream === "チョコレート") {
    alert("やった！チョコレートアイス大好き！");
} else {
    alert("あれれ、でもチョコレートが好きなのに......");
}
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/sagantosu.png") {
        myImage.setAttribute("src", "images/wintosu.png");
    } else {
        myImage.setAttribute("src", "images/sagantosu.png");
    }
};

/*
//イベント
document.querySelector("html").addEventListener("click", function () {
    alert("痛っ! つつかないで!");
});
*/

/*
コメントアウト
*/