function inputdateboke(ipt,iptt,ipttt,iptttt,ipttttt){
    let datebook = [['Id','Book title',' Author', 'Price','quantity']];
    datebook.push(ipt,iptt,ipttt,iptttt,ipttttt);
    return datebook;
}
let resalt=   inputdateboke([1, 'Start with why',     'Simon Sinek',         80,     13],
                            [2, 'But how do it know', 'J.Clark Scott',       59.9,   22],
                            [3, 'Clean code',         'Robert Cecil Martin', 50,     5 ],
                            [4, 'Zero to one',        'Peter Thiel',         45,     12],
                            [5, "You don't know JS",  'Kyle Simpson',        39.9,   9 ]);

function sarchaboutbook(){
    let test;
    let qua = 4;
    let money = 1000;
    for(let info of resalt){
        test =info.includes(1);
        if (test == true){
            console.log('this book available');
            if (qua <= info[4]){
                console.log("quantity is available");
                let me = qua * info[3];
                if (money>= me){
                    console.log("you have a sum demanded");
                    let characters="1234567890qwertyuiopasdfghjklzxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ";
                    let charscount=20;
                    let serialnumber="";
                    for(let i = 0; i < charscount; i++){
                        serialnumber += characters[Math.floor(Math.random() * characters.length)];
                    }
                    let mo = money - me;
                    info[4] - qua;
                    console.log("your money ---> "+mo)
                let receipt=`                                   receipt
                    client: user
                    book id: ${info[0]}
                    book name: ${info[1]}
                    author name: ${info[2]}
                    price: ${info[3]}
                    quantity: ${qua}
                    total price: ${me}
                                serialnumber
                            ${serialnumber}
                    Thank you for your shopping in
                                our store.`;
                    console.log(receipt)
                }
                else{
                    console.log("you haven't a sum demanded");
                }
            }
            else{
                console.log("quantity isn't available")
            }
            break;
        }
    }
    if(test == false){
        console.log('this book not available');
    }
}
sarchaboutbook();