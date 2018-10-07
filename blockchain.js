/*const url='';
const data={
   
} 

$('.btn').click(function(){
   $.post(Url,data, function(data, status){
       console.log('${data} and status is ${status}')
   }); 
})*/

/*const url='https://maas-proxy.cfapps.eu10.hana.ondemand.com/38f0d85c-b4f4-4317-83ac-d4fa8d80b1f2/rpc';
const Data={
    "method": "create", "params": ["stream", "tracking", true]
} 

const othePram={
    headers:{
      "apikey": "3zftX75QY9qZEgwZN4DdGhjZ3YmkPXm6q2nANU86svjD3TQCoccqbQ5PNU8mtKzz" 
    },
    body:Data,
    method:"POST"
    
};

fetch(url,othePram)
.then(data=>{return data.json()})
.then(res=>{console.log(res)})
.catch(error=>console.log(error))*/



$.ajax({
    url: "https://maas-proxy.cfapps.eu10.hana.ondemand.com/38f0d85c-b4f4-4317-83ac-d4fa8d80b1f2/rpc",
    type: "POST",
    data : JSON.stringify( { "method": "liststreamkeyitems", "params": ["coffee_bean", "producer"] } ),
    headers: {
      "apikey": "3zftX75QY9qZEgwZN4DdGhjZ3YmkPXm6q2nANU86svjD3TQCoccqbQ5PNU8mtKzz"
    },
    dataType: 'json',
    success: function (data) {
        //console.info(data.result[0].data);
    
    var hexx=data.result[0].data; // HEX to ASCII conversion
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));         
    }
}); 

