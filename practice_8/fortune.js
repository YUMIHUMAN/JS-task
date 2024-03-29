`use strict`;
//テキストボックス要素を取得
const itemName = document.getElementById(`addName`);
//テキストボックス要素を取得
const itemText = document.getElementById(`addText`);
//追加場所となる要素を取得
const list = document.getElementById(`list`);

let NameForm = document.getElementById("addName");


let TextForm = document.getElementById("addText");
  

function prepend(){
    //li要素を生成
    const createElement = document.createElement(`li`);

    const createText = document.createElement(`p`);

    

    const now = new Date();
    let Post = `${now.toLocaleString()}`
    //生成したli要素に、テキスト部分を設定
    createElement.textContent = `ニックネーム　:　` + itemName.value;

    createText.textContent = itemText.value;
    //取得した要素の子要素（先頭）に追加

    list.prepend(createText);

    list.prepend(createElement);

    list.prepend(Post);

    NameForm.value = '';

    textForm.value = '';
}