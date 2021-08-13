var log = {
    information: function(info){                                    // example information func
        console.log("Information : " + info);            
    },
    fault:function(fault){                                          // example fault func
        console.log("Fault : " + fault);
    
    }                                                              // information scc
};

module.exports = log                                               // export this module with name log