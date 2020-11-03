var cesar = cesar || (function(){
    var doStaff = function(txt, desp, action){
        var replace = (function(){
            var abc = ['a','b','c','d','f','g','h','i','j','k','l',
            'm','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
            var l = abc.length;

            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                if(i != -1){
                    var pos = i;
                    if(action){
                        pos+=desp;
                        pos -= (pos >= 1)?0:1;
                    }else{
                        pos -= desp;
                        pos += (pos < 0)?1:0;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        var re = (/([a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });        
    };
    return{
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };
})();

function codificar(){
    document.getElementById("resultado").innerHTML = cesar.encode(
        document.getElementById("cadena").value, 3);
}
function decodificar(){
    document.getElementById("resultado").innerHTML = cesar.decode(
        document.getElementById("cadena").value, 3);
}
