var Body = {
    linksSetColor: function(color){
        var links = document.querySelectorAll('a');
        var i = 0;
        while(i<links.length)
            links[i++].style.color = color;
        // $('a').css('color', color);
    },
    setColor: function(color){
        document.querySelector('body').style.cololr = color;
        // $('body').css('color', color);
    },
    setBackgroundColor(color){
        document.querySelector('body').style.backgroundColor = color;
        // $('body').css('backgroundColor', color);
    },
    nightDayHandler: function(self){
        // var target = document.querySelector('body');
        if (self.value === 'night'){
            alert('change to night mode');
            Body.setBackgroundColor('black');
            Body.setColor('white');
            self.value='day';

            Body.linksSetColor('powderblue');
        }else{
            alert('change to day mode');
            Body.setBackgroundColor('white');
            Body.setColor('black');
            self.value='night';

            Body.linksSetColor('black');
        }
    }
}