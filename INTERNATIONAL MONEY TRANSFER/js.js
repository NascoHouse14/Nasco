function start() {

    // temp funcs()
    for (let i = 9; i < 40; i++) {
        $('#select2').append(`<option>${i+1}</option>`);
    }

    /*var x = document.getElementById(`ck${i}`).checked;
    var v = document.getElementById(`ck${i}`).value;
    if (x == true) {
        allCks[allCks.length] = v;
    }*/

    // submit
    $('#submit').click(()=>{
        /*
         total of about 8 symptoms grouping:
        1. sweats. 2. fever 3. headaches 4. nausea 5. vomiting 6. joint pain
        7. temberature b/w 10 & 20 8. temparature b/w 21 & 40
        */
        var t = 0;
        // rate temperature
        var slct = $('#select2');
        if ($('#select2').val() >= 10 && $('#select2').val() <= 20) {
            t++;
        }
        if ($('#select2').val() >= 21 && $('#select2').val() <= 40) {
            t += 2;
        }
        // rate symptoms
        for (let i = 0; i < 6; i++) {
            var x = document.getElementById(`cb${i+1}`).checked;
            var v = document.getElementById(`cb${i+1}`).value;
            if (x == true) {
                t++;
                var name = document.getElementById(`name`).value;
                var lname = document.getElementById(`lname`).value;
            }
        }
        k3
        // total rating
        var chance = t*100/8;
        if (chance == 100) {
            chance--;
        }
        $('#person_name').text("name"+"lname");
        $('#chncPerc').text(`${chance}%`);
        if (chance > 50) {
            $('#chncPerc').css('color', 'orangered');
        }else {
            $('#chncPerc').css('color', 'skyblue');
        }
        $('#chanceCon').fadeIn();
    });
    // close chances container
    $('#clsChnC').click(()=>{
        $('#chanceCon').fadeOut();
    });

}
start()