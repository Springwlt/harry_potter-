function each(array,item) {
    for(var i = 0 ; i < array.length; i++) {
        item(array[i],i);
    }
}
function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}
_.each = each;
_.prototype = {
    each:function(fn) {
        each(this.collection, fn);
    },
    filter:function(operate){
      var result = [];
      this.each(function(n,i){
        if(operate(n,i)){
          result.push(n);
        };
      });
      this.collection = result;
      return this;
    },
    reduce:function(operate) {
        var result = [];
        this.each(function(n,i){
            if(i === 0) {
                result = n;
            }else{
                result = operate(result,n);
            }
        });
        this.collection = result;
        return this;
    },
    exist:function(element) {
        var result = false;
        this.each(function(n,i){
            if(n === element) {
                result = true;
            }
        });
        this.collection = result;
        return this;
    },
    no_repeat:function () {
        var result = [];

        _.each(this.collection,function(n,i){
            var exist = false;
            _.each(result,function(m,k){
                if(n === m) {
                    exist = true;
                }
            });
            if(!exist) {
            result.push(n);
            }
        });
        this.collection = result;
        return this;
    },
    count:function( ) {
        var result = [];
        this.each(function(n,i){
            result[n] = result[n]||0;
            result[n]++;
        });
        return result;
    },
    value: function() {
       return this.collection;
   }
}
module.exports = _;
