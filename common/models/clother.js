'use strict';

module.exports = function(Clother) {

     Clother.observe('after save', function addClothys(ctx,next){
            let Seat = Clother.app.models.Seat;
            Seat.create({amount:5000,clotherId:ctx.instance.id},(err,seatInstance)=>{
                if(err) next(err,null);
                next();
            });

     });

     Clother.observe('after save', function addClothys(ctx,next){
        let Seat = Clother.app.models.Seat;
        Seat.create({amount:5000,clotherId:ctx.instance.id},(err,seatInstance)=>{
            if(err) next(err,null);
            next();
        });

    });
};
