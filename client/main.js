new Vue({
    el: '#app',
   data : {
    x :0,
    y :0,
    ktp : {
        nama : '',
        nik : '',
        ttl : '',
        ttl : '',
        jk : '',
        goldar : '',
        alamat : '',
        rt : '',
        kel : '',
        kec : '',
        agama : '',
        kawin : '',
        pekerjaan : '',
        kwn : '',
        berlaku : 'SEUMUR HIDUP'

    },
    cwidth: "" , 
    cheight: "" 

   },
   created() {
    this.cwidth = $('img').width()
    this.cheight = $('img').height();
   },
    methods: {
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
            
        }
        
    },
    directives : {
        insertData : function (canvasElement, ktp, posX, posY) {
            console.log(ktp.value);
            
            var ctx = canvasElement.getContext("2d");
            ctx.save()
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage($('img').get(0), 0, 0);
            ctx.fillText(ktp.value.nik, 115, 75);
            ctx.fillText(ktp.value.nama, 125, 100);
            ctx.fillText(ktp.value.ttl, 125, 115);
            ctx.fillText(ktp.value.jk, 125, 130);
            ctx.fillText(ktp.value.goldar, 325, 129);
            ctx.fillText(ktp.value.alamat, 125, 145);
            ctx.fillText(ktp.value.rt, 125, 160);
            ctx.fillText(ktp.value.kel, 125, 175);
            ctx.fillText(ktp.value.kec, 125, 190);
            ctx.fillText(ktp.value.agama, 125, 205);
            ctx.fillText(ktp.value.kawin, 125, 220);
            ctx.fillText(ktp.value.pekerjaan, 125, 235);
            ctx.fillText(ktp.value.kwn, 125, 250);
            ctx.fillText(ktp.value.berlaku, 125, 265);


            ctx.restore()
        }
        
    }
})