//console.log("Helloe word guyss")
//document.getElementById('heading').innerHTML="helllow ,word"
//var nama="dyo";
//console.log(nama);
//var lastname="abdul";
//console.log(lastname);
//var age=26;
//console.log(age);
//var fullname=nama+' '+lastname;
//console.log(fullname);
//var fullname=true;
//console.log(fullname);
//var job="trainer";
//console.log(job);
//var bio=" nama saya"+" "+nama+" "+lastname+" " +"pekerjaan saya" +" " + job;
//console.log(bio);

//operator

/*var x=5;
var y=7;
var z=x+y;
console.log(z);
var x=5;
var y=2;
var z=x*y;
console.log(z);*/
// macam-macam operator
   // +
   // -   
    //* 
    //%
    ///
    //++ //increment
    //--//decrement
  //asigment operator

// operator contoh kasus    sama seperti
//=                 x=y        x=y
//+=                x+=y       x=x+y
//-=                x-=y       x=x-y
//*=                x*=y       x=x*y
//=                x/=y       x=x/y
//%=                x%=y       x=x%y

        // var x=10;
        //x+=6;
        //console.log(x);
        //test1="Abdul"
        //test2="Hamzan"
        //test3=test1+" "+test2;
        //console.log(test3);
        //x=5+5;
        //y="5"+5;
        //z="hellow"+" "+ 5;
        //console.log(x);
        //console.log(y);
        //console.log(z);

//
//        /*== equal to
//        === equal value and type 
//        != not equal
//        !== not eaual type
//        > grather than
//        < less than
//        >= grather than atau equal to 
//        <  = less than atau equal
//        ?     ternary operator*/
// 
//    // logical operator
//  /* && logical and 
//    || logical or 
//    ! logical not */


/* if else Statement */
//var nama="brandon";
//var age=16;
//var isyoung="yes";
//if (isyoung == "yes" ){
//    console.log(nama+" "+"is young man")
//   }
//else{
//    console.log(" I hope he mature soon ")
//}

//var nama="brandon";
//var age=16;
//var isyoung="No";
//if (isyoung == "No" ){
//    console.log(nama+" "+"is young man")
//   }
//else{
//    console.log(" I hope he mature soon ")
//}
//hour=18;
//if(hour < 18){
//    console.log("saya, yess")
//}else{
//    console.log("saya, nop")
//}
//time=20;
//if (time<10){
//    console.log("say no waay !!")
//}else if(time < 20 ){
//    console.log("say, maybe Yess !!")
//}else{
//    console.log("Good On you ")
//}

/*-----------------------------------------------------------------------------------------*/
//        tipe data Primitif 
//        tipe data yang buka object
//        number=float,decimal,integer
//        string=character,text 
//        Boolean= logical 2 nilai saya true and false 
//        undefine=variabel yang belum memiliki nilai
//        null= memiliki nilai yakni nul
        // Boolean 
        // yes or No
        // on or off 
        // true and false 
        //



//        Boolean(10> 8)
//        console.log(Boolean(10 > 9))
//        console.log(Boolean(10<9))
//
//        comparison and condition

//        console.log(Boolean(100))
//        console.log(Boolean(3.14))
//        console.log(Boolean(-17))
//        console.log(Boolean("hellow word"))
//        console.log(Boolean("false"))
//        console.log(Boolean(false))
//        console.log(Boolean(true))
//
//var x=0;
//console.log(Boolean(x))
//
//var y=" ";
//console.log(Boolean(y))
//
////var z="NaN"
////alert(Boolean(z));
//
//// Tool debugging JS
//
////        console.log()
////        alert()
////        prompt()
////prompt("what is your name ")
//var nama= prompt("what is your name ");
//console.log(nama)
//
//var job='driver';
//job=prompt("apa profesi si dyo ")
//switch(job){
//    case 'trainer':
//        console.log("dyo bertul adalah seorang trainer");
//        break;
//        case'driver':
//        console.log("Dyo mengendarai mobil mewahnya")
//        break;
//        case'polisi':
//        console.log('polisi sedang mengejar penjahat');
//        break;
//    default:
//        console.log("dyo buka seorang driver dan polisi ")
//        break;
//       }
//  

//----------------------------------------------------------------------------------------------------------------------
    
    
    
    
/*java script */

//        function adalah asfek yang sangat penting pada javascript
//        function itu akan berfungsi  apabila di panggil
//        fungsi berfungsi juga untuk mengurangi penulisan secara berulang-ulang


//function xxx (x,y){
//    
//}
//xx() 
//


//function yo(){
//    console.log("yoo,, what's up guysss !! ");
//}
//
//yo();

//function dyo(name){
//    console.log(name);
//}
//dyo("hallow abdul, apa kabar");
//
//var name="abdul ganteng";
//function yo(name){
//    console.log(name);
//}
//
//yo(name);

//function yo(name,age){
//    console.log(name+" "+age)
//}
//
//yo('abdul',21);
//

//function yo(name,age){
//    console.log(name+" "+age);
//}
//yo('ayus',35);
//yo('arif',42);
//yo('aton',21);
//function tambah(satu,dua){
//    return satu + dua;
//}
//console.log(tambah(10,5));
        //        function yo(name,age){
        //            if(age>35){
        //                return name + ',not that old';
        //            }else{
        //                return name + ', is still young';
        //            }
        //        }
        //
        //        var nama= yo('dyo',37);
        //        console.log(nama);
//    function coba(a,b){
//        return a + b;
//    }
//
//    var cobi=coba("abdul"," is Cool")
//    console.log(cobi);
//    document.getElementById("element1").innerHTML=cobi; // proses penampilannya ke HTML
//    alert(cobi);

//    statement dan expresien di Array
//    /*statement*/
//    function myfunc(){
//        //code
//    }
//    /*statement*/
//
//    if(x==5){
//        // do something here
//    }
//
//    /*expresion */
//    3+4;
//    var x;
//java script Array
//Array=kumpulan beberapa element variabel yang memiliki lebih dari satu Data
//    var name="Joni";
//    var lastname="abdul";
//
//    var nama=["joni",1999,23,"tahun"]
//    console.log(nama);

/*cara akses sebuah Array */
//    console.log(nama[0]);
//    console.log(nama[1]);
//    console.log(nama[3]);

/*mutation*/
    //nama[0]="doel";
    //console.log(nama[0]);
/*push*/
        //nama.push('Merah'); // menambahkan element baru pada Array tapi di Akhir
        //console.log(nama[4]);
        //nama.unshift('doerr'); // menambahkan elment baru pada Array tapi di awal 
        //console.log(nama[0]);
        ///*pop */ 
        //nama.pop();



/* Belajar  Javascript  object */
//membuat Object
    //var car={
    //    color:'blue',
    //    speed:125,
    //    merek:"toyota",
    //    tahun:2020,
    //    drive:function(){return 'drive'}
    //
    //    
    //};
//var shoplist=[
//    'apple',
//    'orange',
//    'pear'
//]


        //var buah=[
        //
        //    'mangga',
        //    'manggis',
        //    'jeruk',
        //    'pisang',
        //    'nanas'
        //]

var car={
    made:"indonesia",
    speed:160,
    engine:{
        size:2.5,
        made:"honda",
        fuel:"pertamax",
        piston:[
            '2020',
            {make:"cina"},
            {make:"Japan"}
        ],
        
    },
    drive:function(){ retur:'drive'}
}

var array=[
    'string',
    1000,
    [true,100],
    {name:"jhone"},
    function(){return 'drive'}
];




























































    