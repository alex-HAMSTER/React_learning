var slider = {
    btnPrev: document.getElementById('btnPrev'),
    btnNext: document.getElementById('btnNext'),

    sliderImg: document.getElementById('slider_img'),
    imgSrc: ['img/slider_1.png','img/slider_2.png','img/slider_3.png','img/slider_4.png'],
    counter: 0,

    arrow: function () {
        var that = this;
        this.btnNext.addEventListener('click', function (){
            that.counter++
            if(that.counter < that.imgSrc.length){
                that.sliderImg.src = that.imgSrc[that.counter]
            }else{
                that.counter = 0;
                that.sliderImg.src = that.imgSrc[that.counter]
            }
            
            console.log(that.counter);
        })

        this.btnPrev.addEventListener('click',()=>{
            this.counter--;
        
            if(this.counter > -1){
                this.sliderImg.src = this.imgSrc[that.counter]
            }else{
                this.counter = this.imgSrc.length;
                this.counter--;
                this.sliderImg.src = this.imgSrc[that.counter]
            }
            
            console.log(that.counter);
        })
    },

    btnDot: document.getElementsByClassName('btn_dot'),

    btnDotList: function() {
        var that = this;
    
        var btnClick = function(j) {
            var clickedEl = j.currentTarget;
            that.counter = clickedEl.innerHTML;
            that.counter--;
            that.sliderImg.src = that.imgSrc[that.counter];
            console.log(that.counter);
        };
    
        for (var i = 0; i < that.btnDot.length; i++) {
            var button = that.btnDot[i];
            button.addEventListener('click', btnClick);
        }
    }
    
}