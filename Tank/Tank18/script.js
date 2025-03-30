function table(){
    let content = "";
    for(let i = 1; i<=10; i++){
        for(let j = 1; j<=10; j++){
            content += `Bảng cửu chương : ${i} x ${j} = ${i*j}<br>`;
        }
        content += "<br>";
    }
     document.body.innerHTML = content; 
   
}
table()