// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details

//
//= require rails-ujs
//= require activestorage
//= require turbolinks

//= require jquery
//= require jquery3
//= require jquery_ujs
//= require popper
//= require bootstrap
//= require jquery-ui


console.log("coucou THE JS en-fin!!");



var x = document.getElementById("myAudio");
// {quitform()};

function playAudio() {
  console.log("====================PLAY======AUDIO=========================")

  x.currentTime = 0.01;
  x.play();
  console.log("le x " , x)
}



$(function() {
  $('.datepicker').datepicker();
});

$(".subnav").hide();

$(".navigation li a, .subnav").hover(function(){
    $(this).parent().find(".subnav").stop().fadeIn(400);
}, function(){
    $(this).parent().find(".subnav").stop().fadeOut(400);
});



var x = document.getElementById("myAudio");
// {quitform()};

function playAudio() {
  x.currentTime = 0.01;
  x.play();
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})





// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.


//=import "./bootstrap.scss";
//=import "./bootstrap.js";


//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


//= require jquery
//= require jquery_ujs
//= require functions
//= require_tree .



//=require.context("./css", true, /\.(css)$/im);





function pauseAudio() {
  x.pause();
}

var y = document.getElementById("video2");
function playVideo() {
  y.currentTime = 0.01
  y.play();
}

function pauseVideo() {
  y.pause();
}


function positionplusplay() {
  if (window.pageYOffset == 5300 ||  window.pageYOffset == 5320 ||  window.pageYOffset == 5350 ||
      window.pageYOffset == 5400 ||  window.pageYOffset == 5450 ||  window.pageYOffset == 5500)
      positionplusplayVideo();
}

function positionplusplayVideo() {
  y.currentTime = 1.31;
  y.play();
}

function position01Video() {
  y.currentTime = 0.01;
  y.pause();
}
function position02Video() {
  y.currentTime = 0.05;
  y.pause();
}
function position03Video() {
  y.currentTime = 0.08;
}
function position04Video() {
  y.currentTime = 0.09;
}
function position05Video() {
  y.currentTime = 0.1;
}
function position06Video() {
  y.currentTime = 0.2;
}
function position07Video() {
  y.currentTime = 0.3;
}
function position08Video() {
  y.currentTime = 0.5;
}
function position09Video() {
  y.currentTime = 1;
}
function position10Video() {
  y.currentTime = 2;

}
function position11Video() {
  y.currentTime = 3;
}
function position12Video() {
  y.currentTime = 4;
}
function position13Video() {
  y.currentTime = 4.5;
}

function position14Video() {
  setTimeout(function(){y.currentTime = 5.0; x.value=y.currentTime }, 100);
  pauseVideo();
  setTimeout(function(){y.currentTime = 4.7; x.value=y.currentTime }, 200);
  pauseVideo();
  setTimeout(function(){y.currentTime = 4.4; x.value=y.currentTime }, 300);
  pauseVideo();
  setTimeout(function(){y.currentTime = 4.1; x.value=y.currentTime }, 400);
  pauseVideo();
  setTimeout(function(){y.currentTime = 3.8; x.value=y.currentTime }, 500);
  pauseVideo();
  setTimeout(function(){y.currentTime = 3.5; x.value=y.currentTime }, 600);
  pauseVideo();
  setTimeout(function(){y.currentTime = 3.2; x.value=y.currentTime }, 700);
  pauseVideo();
  setTimeout(function(){y.currentTime = 2.9; x.value=y.currentTime }, 800);
  pauseVideo();
  setTimeout(function(){y.currentTime = 2.6; x.value=y.currentTime }, 900);
  pauseVideo();
  setTimeout(function(){y.currentTime = 2.3; x.value=y.currentTime }, 1000);
  pauseVideo();
  setTimeout(function(){y.currentTime = 2.0; x.value=y.currentTime }, 1100);
  pauseVideo();
  setTimeout(function(){y.currentTime = 1.7; x.value=y.currentTime }, 1200);
  pauseVideo();
  setTimeout(function(){y.currentTime = 1.4; x.value=y.currentTime }, 1300);
  pauseVideo();
  setTimeout(function(){y.currentTime = 1.1; x.value=y.currentTime }, 1400);
  pauseVideo();
  setTimeout(function(){y.currentTime = 0.8; x.value=y.currentTime }, 1500);
  pauseVideo();
  setTimeout(function(){y.currentTime = 0.5; x.value=y.currentTime }, 1600);
  pauseVideo();
  setTimeout(function(){y.currentTime = 0.2; x.value=y.currentTime }, 1700);
  pauseVideo();
  setTimeout(function(){y.currentTime = 0.0; x.value=y.currentTime }, 1800);
  pauseVideo();
}


function position01Audio() {
  x.currentTime = 14;
  x.play();
}


function position02Audio() {
  x.currentTime = 8;
  x.play();
}


var compteur = 0
function coucou0() {
  imgt.style.background = "url(../assets/bras_00_1.png)  center no-repeat";
}


function coucou1() {
  imgt.style.background = "url(../assets/bras_10_1.png)  center no-repeat";
}


function coucou2() {
  imgt.style.background = "url(../assets/bras_20_1.png)  center no-repeat";
}


function coucou3() {
  imgt.style.background = "url(../assets/bras_30_1.png)  center no-repeat";
}


function coucou4() {
  imgt.style.background = "url(../assets/bras_40_1.png)  center no-repeat";
}


function coucou6() {
  imgt.style.background = "url(../assets/bras_60_1.png)  center no-repeat";
}


function coucou7()
{
  imgt.style.background = "url(../assets/bras_70_1.png)  center no-repeat"
}


function gets()
{
  document.getElementById("sig11").href = "#signet3";
  alert(document.getElementById("sig11").href);
}


function deccptr()
{
  var compteur = 1;
  compteur = 1;
  return compteur;
}


function cptr()
{
  compteur += 1;
}




function gets2()
{
  if(compteur > 14)
  {
    document.getElementById("sig2").href = "#signet1";
  }
  else {document.getElementById("sig2").href = "#signet3";
}
}

function gets3()
{
  if (compteur > 14)
  {
    document.getElementById("sig3").href = "#signet2";
  }
  else {document.getElementById("sig3").href = "#signet4";
}
}


function gets4()
{
console.log ("THE compteyr en gest4 : " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig4").href = "#signet3";
  }
  else {document.getElementById("sig4").href = "#signet5";
}
}


function gets5()
{
  console.log ("THE compteyr en gets 5: " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig5").href = "#signet4";
  }
  else {document.getElementById("sig5").href = "#signet6";
}
}


function gets6()
{
  console.log ("THE compteyr en gets 6: " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig6").href = "#signet5";
  }
  else {document.getElementById("sig6").href = "#signet7";
}
}


function gets7()
{
  console.log ("THE compteyr en gets 7: " + compteur )
  if (compteur > 14)
  {

    document.getElementById("sig7").href = "#signet6";
  }
  else {document.getElementById("sig7").href = "#signet8";
}
}


function gets8()
{
  console.log ("THE compteyr en gets 8: " + compteur )
  if (compteur > 14)
  {

    document.getElementById("sig8").href = "#signet7";
  }
  else {document.getElementById("sig8").href = "#signet9";
}
}


function gets9()
{
  console.log ("THE compteyr en gets 9: " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig9").href = "#signet8";
  }
  else {document.getElementById("sig9").href = "#signet10";
}
}


function gets10()
{
  console.log ("THE compteyr en gets 10: " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig10").href = "#signet9";
  }
  else {document.getElementById("sig10").href = "#signet11";
}
}


function gets11()
{
  console.log ("THE compteyr en gets 11 " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig11").href = "#signet10";
  }
  else {
    document.getElementById("sig11").href = "#signet12";
  }
}

function gets12()
{
  console.log ("THE compteyr en gets 12 " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig12").href = "#signet11";
  }
  else {
    document.getElementById("sig12").href = "#signet13";
  }
}

function gets13()
{
  console.log ("THE compteyr en gets 13: " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig13").href = "#signet12";
  }
  else {
    document.getElementById("sig13").href = "#signet14";
  }
}

function gets14()
{
  console.log ("THE compteyr en gets 14: " + compteur )
  if (compteur > 14)
  {
    document.getElementById("sig14").href = "#signet13";
  }
  else {
    document.getElementById("sig14").href = "#signet15";
  }
}
function gets15()
{
  console.log ("THE compteyr en gets 15: " + compteur )
  if (compteur > 15)
  {
    document.getElementById("sig15").href = "#signet14";
  }
  else {
    document.getElementById("sig15").href = "#cont";
  }
}

function getscont()
{
  console.log ("THE compteyr en gets cont: " + compteur )

  {
    document.getElementById("cont").href = "#signet15";
  }

}


var played1   = false;
var played2   = true;
function funcvid2()
{
/*  console.log("palyed1 " + played1 );
  console.log("palyed2 " + played2 );
  */
  if (played1 == false)
  {
    played1 = true;
    played2 = false;
    {playVideo();}
  }
  else
  //   if (played2 == false)
  {
    played2 = true;
    played1 = false;
    {position14Video();}
  }
}


var played5_1   = false;
var played5_2   = true;
var nbrplay5 = 0;
var played2_1   = false;
var played2_2   = true;
function funcvid3()
{
/*  console.log ('fonction functvid3 utilisée');
  console.log("palyed2_1 " + played2_1 );
  console.log("palyed2_2 " + played2_2 );
  */
  if (played2_1 == false)
  {
    played2_1 = true;
    played2_2 = false;
    {playVideo();}
  }
  else
  //     if (played2_2 == false)
  {
    played2_1 = false;
    played2_2 = true;
    {position14Video();}
  }
}


function funcvid5b()
{
/*  console.log("5b palyed2_1 " + played5_1 );
  console.log("5b palyed2_2 " + played5_2 );
  */
  if (played5_1 == false)
  {
    //    console.log ("funcvd5b played5_1 ) false -> play vid")
    played5_1 = true;
    played5_2 = false;
    {playVideo();}
  }
  else
  if (played5_2 == false)
  {
    //       console.log ("funcvid5bv else de played5_1 =  false -> position14")
    played5_1 = false;
    played5_2 = true;
    {position14Video();}
  }
}


function funcvid5()
{
    nbrmail = 0
//  console.log ("window.pageYOffset de funcvid5(||) " + window.pageYOffset)

  if (window.pageYOffset == 0 )
  {
    //      console.log ("window.pageYOffset de funcvid5(||) " + window.pageYOffset)

    //      if (nbrplay5 <= 4)

    funcvid5b();
    nbrplay5 += 1;
  }

  else
  if (window.pageYOffset == 300 ||  window.pageYOffset == 320 ||  window.pageYOffset == 350 ||
      window.pageYOffset == 400 ||  window.pageYOffset == 450 ||  window.pageYOffset == 500)

  {

    //      {console.log ("window.pageYOffset de funcvid5(||) " + window.pageYOffset)

    //      { if (nbrplay5 <= 4)


      funcvid5b();
      nbrplay5 += 1

    }
    /*      if (window.pageYOffset > 2000 )
    {
      console.log ("je mets nbrplay5 à 0 ");
      played5_2 = false;
      played5_1 = false;
      nbrplay5 = 0

    }
    */
  }

  function funcvid5_reserve()
  {
    console.log ("window.pageYOffset de funcvid5 reserve "  + window.pageYOffset)
    if (window.pageYOffset == 0 )
    {
      if ( played5_1 == false)
      {
        if (nbrplay <= 2)
        {playVideo();
          played5_1 = true
          nbrplay += 1}

        }
      }
      else
      if (window.pageYOffset == 0 )
      {
        if (nbrplay <= 2)
        {
          position14Video();
          played5_1 = false
          nbrplay += 1}
        }

        else
        if (window.pageYOffset > 100 && window.pageYOffset < 200 )
        { if (nbrplay <= 2)
          {if (played5_1 == false)
            {
              played5_1 = true;
              playVideo();
              nbrplay += 1
            }
          }
        }
        else
        if (window.pageYOffset > 100 && window.pageYOffset < 200)
        { if (nbrplay <= 2)

          {
            if (played5_2 = false)
            {position14Video();
              //           played5_1 = true
              nbrplay += 1}
            }
          }
          /*

          if (window.pageYOffset > 1500)
          {console.log ("je mets nbrplay à 0 ");
          //     played5_2 = false;
          //     played5_1 = true;
          nbrplay = 0
        }
        */
      }



      function funcvid()
      {
/*        console.log("palyed1 " + played1 );
        console.log("palyed2 " + played2 );
*/

        if  ((document.body.scrollTop == 20 || document.documentElement.scrollTop == 20) &&
        (played1 == false))
        {
          {playVideo();}
        }

        else
        if  ((document.body.scrollTop == 22 || document.documentElement.scrollTop == 22) &&
        (played2 == false))
        {
          {position14Video();}
        }
      }

      /*
      window.onscroll = function ()
      {
        lesbras();
        if (window.pageYOffset == 0 && played1 == false)
        {

          {playVideo();
            played1 = true}
          }
          else
          if (window.pageYOffset == 0 )
          {
            played1 = false;
            position14Video();
            played1 = false}


            else
            if (window.pageYOffset > 100 && window.pageYOffset < 200 )
            {
              if (played1 == false)
              {
                playVideo();
              }
            }
            else
            if (window.pageYOffset > 100 && window.pageYOffset < 200)
            {
              if (played2 = false)
              {position14Video();
                played1 = false }
              }
              if (window.pageYOffset > 1500)
              {console.log ("je mets nbrplay à 0 ");
              played2 = false;
              played1 = true;
              duo = true ;
            }
          }
          */

          function affiche()
          {
            /*    console.log("document.body.scrollTop " + document.body.scrollTop);
            console.log("document.documentElement.scrollTop " + document.documentElement.scrollTop );
            */
/*            console.log("window.pageYOffset " + window.pageYOffset );
            console.log("nbrplay " + nbrplay );
*/
          }

          function lesbras()
          {

            if
            ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) &&
            (document.body.scrollTop < 300 || document.documentElement.scrollTop < 300))
            {
              {coucou0()}
            }


            if
            ((document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) &&
            (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500))
            {
              {coucou1()}
            }



            if
            ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) &&
            (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700))
            {
              {coucou2()}
            }

            if ((document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) &&
            (document.body.scrollTop < 900 || document.documentElement.scrollTop < 900))

            {
              {coucou3()}
            }

            if ((document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) &&
            (document.body.scrollTop < 1100 || document.documentElement.scrollTop < 1100))

            {
              {coucou4()}
            }

            if ((document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) &&
            (document.body.scrollTop < 1300 || document.documentElement.scrollTop < 1300))

            {
              {coucou6()}
            }
            if ((document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) &&
            (document.body.scrollTop < 1500 || document.documentElement.scrollTop < 1500))

            {
              {coucou7()}
            }
            if ((document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) &&
            (document.body.scrollTop < 1700 || document.documentElement.scrollTop < 1700))

            {
              {coucou1()}
            }
            if ((document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) &&
            (document.body.scrollTop < 1900 || document.documentElement.scrollTop < 1900))

            {
              {coucou2()}
            }
            if ((document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) &&
            (document.body.scrollTop < 2100 || document.documentElement.scrollTop < 2100))

            {
              {coucou3()}
            }

            if ((document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) &&
            (document.body.scrollTop < 2300 || document.documentElement.scrollTop < 2300))

            {
              {coucou4()}
            }
            if ((document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) &&
            (document.body.scrollTop < 2500 || document.documentElement.scrollTop < 2500))

            {
              {coucou6()}
            }
            if ((document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) &&
            (document.body.scrollTop < 2700 || document.documentElement.scrollTop < 2700))

            {
              {coucou7()}
            }
            if ((document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) &&
            (document.body.scrollTop < 2900 || document.documentElement.scrollTop < 2900))

            {
              {coucou1()}
            }
            if ((document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) &&
            (document.body.scrollTop < 3100 || document.documentElement.scrollTop < 3100))

            {
              {coucou2()}
            }
            if ((document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100) &&
            (document.body.scrollTop < 3300 || document.documentElement.scrollTop < 3300))

            {
              {coucou3()}
            }
            if ((document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) &&
            (document.body.scrollTop < 3700 || document.documentElement.scrollTop < 3700))

            {
              {coucou4()}
            }
            if ((document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700) &&
            (document.body.scrollTop < 4000 || document.documentElement.scrollTop < 4000))


            {
              coucou6();
            }

            if ((document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) &&
            (document.body.scrollTop < 4300 || document.documentElement.scrollTop < 4300))


            {
              coucou7();
            }

            if ((document.body.scrollTop > 4300 || document.documentElement.scrollTop > 4300) &&
            (document.body.scrollTop < 4600 || document.documentElement.scrollTop < 4600))


            {
              coucou1();
            }

            if ((document.body.scrollTop > 4600 || document.documentElement.scrollTop > 4600) &&
            (document.body.scrollTop < 4900 || document.documentElement.scrollTop < 4900))


            {
              coucou2();
            }

            if ((document.body.scrollTop > 4900 || document.documentElement.scrollTop > 4900) &&
            (document.body.scrollTop < 5200 || document.documentElement.scrollTop < 5200))


            {
              coucou3();
            }

            if ((document.body.scrollTop > 5200 || document.documentElement.scrollTop > 5200) &&
            (document.body.scrollTop < 5500 || document.documentElement.scrollTop < 5500))


            {
              coucou4();
            }

            if ((document.body.scrollTop > 5500 || document.documentElement.scrollTop > 5500) &&
            (document.body.scrollTop < 5800 || document.documentElement.scrollTop < 5800))


            {
              coucou6();
            }

            if ((document.body.scrollTop > 5800 || document.documentElement.scrollTop > 5800) &&
            (document.body.scrollTop < 6100 || document.documentElement.scrollTop < 6100))


            {
              coucou7();
            }

            if ((document.body.scrollTop > 6100 || document.documentElement.scrollTop > 6100) &&
            (document.body.scrollTop < 6400 || document.documentElement.scrollTop < 6400))


            {
              coucou1();
            }

            if ((document.body.scrollTop > 6400 || document.documentElement.scrollTop > 6400) &&
            (document.body.scrollTop < 6700 || document.documentElement.scrollTop < 6700))


            {
              coucou2();
            }

            if ((document.body.scrollTop > 6700 || document.documentElement.scrollTop > 6700) &&
            (document.body.scrollTop < 7000 || document.documentElement.scrollTop < 7000))


            {
              coucou3();
            }

            if ((document.body.scrollTop > 7000 || document.documentElement.scrollTop > 7000) &&
            (document.body.scrollTop < 7300 || document.documentElement.scrollTop < 7300))


            {
              coucou4();
            }

            if ((document.body.scrollTop > 7300 || document.documentElement.scrollTop > 7300) &&
            (document.body.scrollTop < 7700 || document.documentElement.scrollTop < 7700))


            {
              coucou6();
            }

          }

          var nbrplay = 0;
          var duo = false;
          function bonhomme()
          {
            nbrmail = 0
            if
            (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500)
            {
              {img10_a_1()}
//              {img10_tags_vides()}
              }
              if
              ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) &&
              (document.body.scrollTop < 1000 || document.documentElement.scrollTop < 1000))
              {
                {img10_a_2()}
            //              {img10_tags_vides()}
                }

            if
            ((document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) &&
            (document.body.scrollTop < 2000 || document.documentElement.scrollTop < 2000))
            {
              {img10_a_3()}
            }

            if ((document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) &&
            (document.body.scrollTop < 3000 || document.documentElement.scrollTop < 3000))

            {
              {img10_a_4()}
            }

            if ((document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) &&
            (document.body.scrollTop < 4000 || document.documentElement.scrollTop < 4000))

            {
              {img10_a_5()}
            }

            if ((document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) &&
            (document.body.scrollTop < 5000 || document.documentElement.scrollTop < 5000))

            {
              {img10_a_6()}
  //            {img10_tags()}

            }

            if ((document.body.scrollTop > 5000 || document.documentElement.scrollTop > 5000) &&
            (document.body.scrollTop < 6000 || document.documentElement.scrollTop < 6000))
            {
              {img10_a_7()}
             }
             if ((document.body.scrollTop > 6000 || document.documentElement.scrollTop > 6000) &&
             (document.body.scrollTop < 6500 || document.documentElement.scrollTop < 6500))
             {
               {img10_a_8()}
//               {img10_tags2()}

              }
              if ((document.body.scrollTop > 6500 || document.documentElement.scrollTop > 6500) &&
              (document.body.scrollTop < 7000 || document.documentElement.scrollTop < 7000))
              {
                {img10_a_6()}

               }
               if ((document.body.scrollTop > 7000 || document.documentElement.scrollTop > 7000) &&
               (document.body.scrollTop < 7500 || document.documentElement.scrollTop < 7500))
               {
                 {img10_a_8()}
                }
                if ((document.body.scrollTop > 7500 || document.documentElement.scrollTop > 7500) &&
                (document.body.scrollTop < 8000 || document.documentElement.scrollTop < 8000))
                {
                  {img10_a_6()}
                  {img10_tags_vides()}
                 }



            /*

            if ((document.body.scrollTop > 8000 || document.documentElement.scrollTop > 8000) &&
              (document.body.scrollTop < 9000 || document.documentElement.scrollTop < 9000))

              {
                {img10_a_2()}
              }
              /*
              if ((document.body.scrollTop > 9000 || document.documentElement.scrollTop > 9000) &&
              (document.body.scrollTop < 10000 || document.documentElement.scrollTop < 10000))

              {
                {img10_a_3()}
              }
              if ((document.body.scrollTop > 10000 || document.documentElement.scrollTop > 10000) &&
              (document.body.scrollTop < 11000 || document.documentElement.scrollTop < 11000))

              {
                {img10_a_4()}
              }
              /* if ((document.body.scrollTop > 11000 || document.documentElement.scrollTop > 11000) &&
              (document.body.scrollTop < 12000 || document.documentElement.scrollTop < 12000))

              {
                {img10_a_5()}
              }
              */
            }


            function img10_a_1() {
            imgt.style.background = "url(../assets/piece_chri_01.png)   no-repeat";
            }
            function img10_a_2() {
              imgt.style.background = "url(../assets/piece_chri_02.png)   no-repeat";
            }
            function img10_a_3() {
              imgt.style.background = "url(../assets/piece_chri_03.png)   no-repeat";

            }
            function img10_a_4() {
              imgt.style.background = "url(../assets/piece_chri_04.png)   no-repeat";
            }
            function img10_a_5() {
              imgt.style.background = "url(../assets/piece_chri_05.png)    no-repeat";
            }
            function img10_a_6() {
              imgt.style.background = "url(../assets/piece_chri_06.png)    no-repeat";
            }

            function img10_a_7() {
              imgt.style.background = "url(../assets/piece_chri_07.png)    no-repeat";
            }
            function img10_a_8() {
              imgt.style.background = "url(../assets/piece_chri_08.png)    no-repeat";
            }

            function img10_tags() {
              imgt2.style.background = "url(../assets/Agathe_tags.svg)   no-repeat ";
            }



            function img10_tags2() {
              imgt3.style.background = "url(../assets/Agathe_tags2.svg)   no-repeat ";
            }


            function img10_tags_vides() {
            imgt2.style.background = "url(../assets/vide.png)   no-repeat";
            imgt3.style.background = "url(../assets/vide.png)   no-repeat ";
            }




            function img10_g() {
              imgt.style.background = "url(../assets/sm10_g.png)      center no-repeat";
            }
            function img10_h() {
              imgt.style.background = "url(../assets/sm10_h.png)      center no-repeat";
            }
            function img10_i() {
              imgt.style.background = "url(../assets/sm10_i.png)      center no-repeat";
            }
            function img10_j() {
              imgt.style.background = "url(../assets/sm10_j.png)     center no-repeat";
            }
            function img10_k() {
              imgt.style.background = "url(../assets/sm10_k.png)      center no-repeat";
            }
            function img10_l() {
              imgt.style.background  = "url(../assets/sm10_l.png)      center no-repeat";
            }
            function img10_m() {
              imgt.style.background = "url(../assets/sm10_m.png)      center no-repeat";
            }

/*            function appform() {
              document.getElementById('imgprform').src="../assets/sm10_m.png";
            }
            function quitform() {
              document.getElementById('imgprform').src="../assets/favicon2.ico";
            }
*/
            var imge = document.getElementById('imgprbut')
            function appbut() {
              //  imge.height="1px";
              //  imge.width="1px";
              imge.src = "../assets/vide_rouge.png";
            }
            //var imge2 = document.getElementById('imgprbut')
            function quitbut() {
              //    imge.height="1300px";
              //    imge.width="1300px";
              imge.src="../assets/vide_haut.png";
            }

            function prform() {
              window.alert("coucou on envoie");
              }




//              function controle() {
//              window.alert(document.getElementById('code_bar').value + " coucou");
//              if document.getElementById('code_bar').value == "@"
//                window.alert("saisissez un mail, pour avoir des nvelles!!  ")
//              }
              var nbrmail = 0
              function controle() {
                var monObjet = document.getElementById('code_bar').value;
                var n = monObjet.search("@");
//                document.getElementById("code_bar").innerHTML = n;
                if (nbrmail < 2 )
                if (n == "-1"){
                window.alert("     .. et si vous laissiez votre mail.. ;)  pour avoir des nvelles.. c'est mieux non ?  ")
                nbrmail +=1; }

              }



              function NormalImg(x) {

                  x.style.height = "20px";
                  x.style.width = "20px";
              }

              function AutreImg(x) {
                  x.style.height = "0px";
                  x.style.width = "0px";
              }







              (function($) {
                "use strict"; // Start of use strict

                // Smooth scrolling using jQuery easing
                $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
                  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                      $('html, body').animate({
                        scrollTop: (target.offset().top - 56)
                      }, 1000, "easeInOutExpo");
                      return false;
                    }
                  }
                });

                // Closes responsive menu when a scroll trigger link is clicked
                $('.js-scroll-trigger').click(function() {
                  $('.navbar-collapse').collapse('hide');
                });

                // Activate scrollspy to add active class to navbar items on scroll
                $('body').scrollspy({
                  target: '#mainNav',
                  offset: 57
                });

                // Collapse Navbar
                var navbarCollapse = function() {
                  if ($("#mainNav").offset().top > 100) {
                    $("#mainNav").addClass("navbar-shrink");
                  } else {
                    $("#mainNav").removeClass("navbar-shrink");
                  }
                };
                // Collapse now if page is not at top
                navbarCollapse();
                // Collapse the navbar when page is scrolled
                $(window).scroll(navbarCollapse);

                // Scroll reveal calls
                window.sr = ScrollReveal();

                sr.reveal('.sr-icon-1', {
                  delay: 200,
                  scale: 0
                });
                sr.reveal('.sr-icon-2', {
                  delay: 400,
                  scale: 0
                });
                sr.reveal('.sr-icon-3', {
                  delay: 600,
                  scale: 0
                });
                sr.reveal('.sr-icon-4', {
                  delay: 800,
                  scale: 0
                });
                sr.reveal('.sr-button', {
                  delay: 200,
                  distance: '15px',
                  origin: 'bottom',
                  scale: 0.8
                });
                sr.reveal('.sr-contact-1', {
                  delay: 200,
                  scale: 0
                });
                sr.reveal('.sr-contact-2', {
                  delay: 400,
                  scale: 0
                });

                // Magnific popup calls
                $('.popup-gallery').magnificPopup({
                  delegate: 'a',
                  type: 'image',
                  tLoading: 'Loading image #%curr%...',
                  mainClass: 'mfp-img-mobile',
                  gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                  },
                  image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                  }
                });

              })(jQuery); // End of use strict

              /*!
 * Start Bootstrap - Creative v5.0.1 (https://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */

!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top-56},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:57});var a=function(){100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};a(),e(window).scroll(a),window.sr=ScrollReveal(),sr.reveal(".sr-icon-1",{delay:200,scale:0}),sr.reveal(".sr-icon-2",{delay:400,scale:0}),sr.reveal(".sr-icon-3",{delay:600,scale:0}),sr.reveal(".sr-icon-4",{delay:800,scale:0}),sr.reveal(".sr-button",{delay:200,distance:"15px",origin:"bottom",scale:.8}),sr.reveal(".sr-contact-1",{delay:200,scale:0}),sr.reveal(".sr-contact-2",{delay:400,scale:0}),e(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);


  console.log("==================================================== import  fin  applicjs")
