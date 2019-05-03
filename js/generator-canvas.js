
window.onload = function(){
  var opacity;
  $('#btn').click(function(){
    opacity = 0.3;
    displayGrids(opacity);
  })

  $('#btn2').click(function(){
    location.reload();
  })

  var radian = Math.PI / 180;

  var img4 = document.getElementById("tripple-transformer");
  var img5 = document.getElementById("sextuple-transformer");
  var img6 = document.getElementById("quad-transformer");
  var img7 = document.getElementById("quad-transformer-inverted");
  var img8 = document.getElementById("tripple-bus");
  var img9 = document.getElementById("quadruple-bus");
  var img10 = document.getElementById("quintuple-bus");
  var img11 = document.getElementById("sextuple-bus");
  var img12 = document.getElementById("double-bus");
  var img13 = document.getElementById("top-double-bus");
  var img14 = document.getElementById("top-quadruple-bus");
  var img15 = document.getElementById("down-quadruple-bus");
  var img16 = document.getElementById("tripple-direct-switch");
  var img17 = document.getElementById("d-double-direct-switch");
  var leftOled = document.getElementById("left-oled");
  var rightOled = document.getElementById("right-oled");
  var bottomOled = document.getElementById("bottom-oled");
  var topOled = document.getElementById("top-oled");
  var thermistor = document.getElementById("thermistor");
  var arc = document.getElementById("arc");
  var crossX = document.getElementById("x");
  var arrow = document.getElementById("arrow");


  // The size of the canvas
  var scaleSize = 260;
  var scalewidth = 840;
  var height = 600;

  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.width  = scalewidth + scaleSize;
  canvas.height = height + scaleSize;

  // scalabilty ration to increase by
  var scaleRatioWidth = scalewidth / canvas.width;

  var scaleRatioHeight = height / canvas.height;

  // initialize the canvas
  var c = document.getElementById('canvas');
  var pencil = c.getContext('2d');
  pencil.font = "9px Arial";

  //    -------------------------------------------------------------------------------------------------------------------------------------
  //
  //
  //                                                            LABELS
  //
  //
  //    -------------------------------------------------------------------------------------------------------------------------------------

  pencil.fillText("L",10,122);
  pencil.fillText("N",10,152);
  pencil.fillText("PE",5,178);
  pencil.fillText("PE",60,178);
  pencil.fillText("PE",73,178);
  pencil.fillText("SA1",90,100);
  pencil.fillText("KM1",280,45);
  pencil.fillText("KM1",280,135);
  pencil.fillText("R1",330,58);
  pencil.fillText("R2",330,100);
  pencil.fillText("R3",330,148);
  pencil.fillText("R4",330,190);
  pencil.fillText("D1",425,50);
  pencil.fillText("E1",562,120);
  pencil.fillText("E2",562,160);
  pencil.fillText("E3",642,120);
  pencil.fillText("E4",642,160);
  pencil.fillText("1",708,116);
  pencil.fillText("2",754,116);
  pencil.fillText("L1",728,112);
  pencil.fillText("3",703,154);
  pencil.fillText("4",756,154);
  pencil.fillText("1",828,154);
  pencil.fillText("C2",836,180);
  pencil.fillText("2",852,154);
  pencil.fillText("1",904,130);
  pencil.fillText("CT",912,110);
  pencil.fillText("2",928,130);
  pencil.fillText("X2",964,144);
  pencil.fillText("A",1080,136);
  pencil.fillText("C",1080,172);


  pencil.fillText("Capacitor",451,52);
  pencil.fillText("Board",460,62);

  pencil.fillText("TANK",990,170);

  pencil.fillText("Inverter",590,130);
  pencil.fillText("Board",595,145);
  pencil.fillText("D601",518,80);
  pencil.fillText("D602",518,215);

  pencil.fillText("Driver Board",605,285);

  pencil.fillText("Power Module",105,330);
  pencil.fillText("P1-L",32,312);
  pencil.fillText("P1-N",32,332);
  pencil.fillText("+12v",213,285);
  pencil.fillText("GND",213,295);
  pencil.fillText("-12v",213,344);
  pencil.fillText("+12v",213,354);
  pencil.fillText("GND",213,362);
  pencil.fillText("+5V",213,371);



  pencil.fillText("PFB",150,520);
  pencil.fillText("Control",100,440);
  pencil.fillText("Signal",100,450);
  pencil.fillText("DC_BUS",50,580);
  pencil.fillText("FIL_SEL",110,580);
  pencil.fillText("Contactor",190,570);
  pencil.fillText("Control",190,580);
  pencil.fillText("Reserve",220,555);

  pencil.fillText("To",240,500);
  pencil.fillText("SCB",237,510);
  pencil.fillText("From",237,440);
  pencil.fillText("P1",240,450);


  pencil.fillText("MCB",580,520);
  pencil.fillText("Tank",482,442);
  pencil.fillText("Feedback",480,454);
  pencil.fillText("Driver",568,444);
  pencil.fillText("R_I",482,480);
  pencil.fillText("Cap2_I",483,514);
  pencil.fillText("Cap1_I",483,550);
  pencil.fillText("Inv_485",483,585);
  pencil.fillText("Control",530,565);
  pencil.fillText("Signal",530,575);
  pencil.fillText("B",420,574);
  pencil.fillText("A",420,587);
  pencil.fillText("Power",630,560);
  pencil.fillText("OLED",680,462);
  pencil.fillText("PE",700,597);

  pencil.fillText("Interface Board",880,560);


  pencil.fillText("1",842,600);
  pencil.fillText("3",852,600);
  pencil.fillText("5",863,600);
  pencil.fillText("X2",878,610);

  pencil.fillText("Anode",510,745);
  pencil.fillText("Driver Board",500,760);
  pencil.fillText("1",565,725);
  pencil.fillText("S",596,725);
  pencil.fillText("3",565,735);
  pencil.fillText("M",596,735);
  pencil.fillText("5",565,745);
  pencil.fillText("C",596,745);
  pencil.fillText("A",420,710);
  pencil.fillText("DC-BUS-",400,738);
  pencil.fillText("DC-BUS+",400,752);
  pencil.fillText("DC-BUS-",400,770);
  pencil.fillText("DC-BUS+",400,782);
  pencil.fillText("B",420,724);

  pencil.fillText("T1 input terminal",830,280);
  pencil.fillText("T1 output terminal",980,280);




  var pencil2 = c.getContext("2d");
  pencil2.font = "7px Arial";


  pencil2.fillText("1",815,328);
  pencil2.fillText("3",833,328);
  pencil2.fillText("5",851,328);
  pencil2.fillText("7",869,328);
  pencil2.fillText("9",887,328);
  pencil2.fillText("11",900,328);
  pencil2.fillText("13",917,328);
  pencil2.fillText("277",812,342);
  pencil2.fillText("254",831,342);
  pencil2.fillText("230",848,342);
  pencil2.fillText("220",865,342);
  pencil2.fillText("0",885,342);
  pencil2.fillText("Tem1",896,342);
  pencil2.fillText("Tem2",913,342);
  pencil2.fillText("2",815,355);
  pencil2.fillText("4",833,355);
  pencil2.fillText("6",851,355);
  pencil2.fillText("8",869,355);
  pencil2.fillText("10",885,355);
  pencil2.fillText("12",900,355);
  pencil2.fillText("14",917,355);


  pencil2.fillText("1",944,328);
  pencil2.fillText("3",962,328);
  pencil2.fillText("5",980,328);
  pencil2.fillText("7",998,328);
  pencil2.fillText("9",1012,328);
  pencil2.fillText("11",1030,328);
  pencil2.fillText("13",1045,328);
  pencil2.fillText("24",944,342);
  pencil2.fillText("0",962,342);
  pencil2.fillText("220",974,342);
  pencil2.fillText("220",993,342);
  pencil2.fillText("0",1013,342);
  pencil2.fillText("0",1031,342);
  pencil2.fillText("FUSE",1042,342);

  pencil2.fillText("2",944,355);
  pencil2.fillText("4",962,355);
  pencil2.fillText("6",980,355);
  pencil2.fillText("8",998,355);
  pencil2.fillText("10",1012,355);
  pencil2.fillText("12",1030,355);
  pencil2.fillText("14",1045,355);


  pencil2.fillText("X3",1025,190);

  pencil2.fillText("KM1",303,230);
  pencil2.fillText("A1",292,242);
  pencil2.fillText("A2",320,242);

  pencil2.fillText("KM2",303,268);
  pencil2.fillText("A1",292,280);
  pencil2.fillText("A2",320,280);

  pencil2.fillText("KM1-AC",300,368);

  pencil2.fillText("X3",294,425);
  pencil2.fillText("GND",265,433);
  pencil2.fillText("-12v",265,444);
  pencil2.fillText("+12v",265,455);
  pencil2.fillText("+5v",265,466);


  pencil2.fillText("X4",294,485);
  pencil2.fillText("GND",265,493);
  pencil2.fillText("-12v",265,504);
  pencil2.fillText("+12v",265,515);
  pencil2.fillText("+5v",265,526);

  pencil2.fillText("X7",294,546);
  pencil2.fillText("GND",265,553);
  pencil2.fillText("-12v",265,564);
  pencil2.fillText("+12v",265,575);
  pencil2.fillText("+5v",265,586);

  pencil2.fillText("X6",242,604);

  pencil2.fillText("X5",168,604);

  pencil2.fillText("X2",86,604);


  pencil2.fillText("X2",520,420);
  pencil2.fillText("X20",605,420);

  pencil2.fillText("50P",825,526);
  pencil2.fillText("X1",825,536);

  pencil2.fillText("1",462,710);
  pencil2.fillText("485 +",475,715);
  pencil2.fillText("2",462,720);
  pencil2.fillText("485 -",475,725);
  pencil2.fillText("1",462,740);
  pencil2.fillText("3",462,752);
  pencil2.fillText("1",462,770);
  pencil2.fillText("3",462,782);




  //    -------------------------------------------------------------------------------------------------------------------------------------
  //
  //
  //                                                          END  LABELS
  //
  //
  //    -------------------------------------------------------------------------------------------------------------------------------------

  // Draw horizontal grid -----------------------------------------------
  function drawHorizontalGrid(x,alpha){
    pencil.moveTo(x,0);
    pencil.lineTo(x,600 + scaleSize);
    pencil.globalAlpha = alpha;
    pencil.stroke();
  }


// End of horizontal grid -----------------------------------------------

// Draw vertical grid ---------------------------------------------------
function drawVerticalGrid(y,alpha){
  pencil.moveTo(0,y);
  pencil.lineTo(840 + scaleSize,  y,alpha);

  pencil.stroke();
};
// End of vertical grid -----------------------------------------------

function displayGrids(alpha){
  for (i = 0; i < 6; i++){
    drawHorizontalGrid(canvas.width / 6 * i,alpha);
  };

  for (i = 0; i < 4; i++){
    drawVerticalGrid(canvas.height / 4 * i,alpha);
  };
};

function drawLine(xFROM,yFROM, xTO, yTO, color){
  pencil.beginPath();
  pencil.lineWidth = 1;
  pencil.strokeStyle = color;
  pencil.globalAlpha = 1;
  pencil.moveTo(xFROM * scaleRatioWidth, yFROM * scaleRatioHeight);
  pencil.lineTo(xTO * scaleRatioWidth, yTO * scaleRatioHeight);
  pencil.stroke();
};



function drawRect(x,y){
  pencil.rect(x,y, 17, 7);
  pencil.fillStyle = "#ffffff";
  pencil.fill();
  pencil.globalAlpha = 1;
  //pencil.lineWidth = 0.7;
  pencil.strokeStyle = "black";
  pencil.stroke();
};

function drawLine2(xFROM,yFROM, xTO, yTO, color){
  pencil.beginPath();
  pencil.lineWidth = 0.6;
  pencil.strokeStyle = color;
  pencil.globalAlpha = 0.5;
  pencil.moveTo(xFROM * scaleRatioWidth, yFROM * scaleRatioHeight);
  pencil.lineTo(xTO * scaleRatioWidth, yTO * scaleRatioHeight);
  pencil.stroke();
};




function drawBigRect(x, y, sizex, sizey,width){
  pencil.rect(x,y, sizex, sizey);
  pencil.fillStyle = "transparent";
  pencil.fill();
  pencil.lineWidth = width;
  pencil.stroke();
};


function drawTriangle(x,y){
  var img = document.getElementById("triangle");
  pencil.drawImage(img, x, y, 8, 8);
};

function drawSwitch(pic,x,y,sizex,sizey){
  var img = document.getElementById(pic);
  pencil.drawImage(pic,x,y,sizex,sizey);
};

function drawTransformers(pic,x,y,sizex,sizey){
  pencil.globalAlpha = 1;
  pencil.drawImage(pic,x,y,sizex,sizey);

};

function drawBus(pic,x,y,sizex,sizey,degrees){
  pencil.globalAlpha = 1;
  pencil.drawImage(pic,x,y,sizex,sizey);
};

function drawOled(pic,x,y,sizex,sizey,degrees){
  pencil.globalAlpha = 1;
  pencil.drawImage(pic,x,y,sizex,sizey);
};

function drawArc(pic,x,y,sizex,sizey){
  pencil.globalAlpha = 1;
  pencil.drawImage(pic,x,y,sizex,sizey);
};

function drawCrossX(pic,x,y,sizex,sizey){
  pencil.globalAlpha = 1;
  pencil.drawImage(pic,x,y,sizex,sizey);
};

function drawArrow(pic,x,y,sizex,sizey){
  pencil.globalAlpha = 1;
  pencil.drawImage(pic,x,y,sizex,sizey);
};



function drawCircle(x,y,size, radius){
  pencil.beginPath();
  pencil.globalAlpha = 0.4;
  var radius = size * scaleRatioWidth;
  linePos = x + radius;
  pencil.arc(x * scaleRatioWidth, y * scaleRatioHeight , radius, 0 * radian, 360 * radian);
  pencil.stroke();
};

function drawCircle2(x,y,size, radius){
  pencil.beginPath();
  pencil.globalAlpha = 1;
  pencil.fillStyle = "black";
  var radius = size * scaleRatioWidth;
  linePos = x + radius;
  pencil.arc(x * scaleRatioWidth, y * scaleRatioHeight , radius, 0 * radian, 360 * radian);
  pencil.fill();
  pencil.stroke();
};

function drawOverLappingLinesFromD2(y){
  var stopPosX = 480;
  startPostR = stopPosX;
  drawLine(kM1width + 20, y, stopPosX, y);
  drawCircle2(kM1width + 20,y,3);
};


function drawDottedLine(xFROM,yFROM, xTO, yTO, color){
  pencil.beginPath();
  pencil.setLineDash([10, 5]);
  pencil.globalAlpha = 0.5;
  pencil.strokeStyle = color;
  pencil.moveTo(xFROM * scaleRatioWidth, yFROM * scaleRatioHeight);
  pencil.lineTo(xTO * scaleRatioWidth, yTO * scaleRatioHeight);
  pencil.stroke();
  pencil.setLineDash([0, 0]);
};

function drawOpenCircuit(x,y){
  pencil.beginPath();
  pencil.moveTo(x * scaleRatioWidth, y * scaleRatioHeight);
  pencil.lineTo((x * scaleRatioWidth) + 20, (y* scaleRatioHeight) - 10);
  pencil.stroke();

};





//----------------------------------------- START OF GENERATOR DRAWING UI -------------------------------------------------------------------------------------------------------------



//    -------------------------------------------------------------------------------------------------------------------------------------
//
//
//                                                             START OF GRID D
//
//
//    -------------------------------------------------------------------------------------------------------------------------------------


// Grid D1 ------------------------------------------------------------------------------------------------------------------------------------------------
var gridD1CircleX = 36.69;
var gridD1CircleY = function  gridD1CircleY(startPosY, increseSizeBy){
  var circle1Y = startPosY;
  var circle2Y = circle1Y + increseSizeBy;
  var circle3Y = circle2Y + increseSizeBy;

  return [circle1Y, circle2Y, circle3Y];
}

// Controls the y axis position of the elements on grid D1
var circlesYPosition = gridD1CircleY(170, 40);

var overLappingLine = function lineXaxis(from,to){
  var fromX = from * scaleRatioWidth;
  var toX = to * scaleRatioWidth;
  return [fromX, toX];
}

// controller for overLappingLine moving from grid D1 - D2
var getOverLappingLine = overLappingLine(200,300);

var linePos;

//L (grid D1)
drawCircle(gridD1CircleX,circlesYPosition[0],8);
drawLine(gridD1CircleX + 7,circlesYPosition[0] - 10 ,gridD1CircleX - 10, circlesYPosition[0] + 11);
drawLine(linePos,circlesYPosition[0], 120,circlesYPosition[0]);
drawLine(120,circlesYPosition[0], 150, circlesYPosition[0] - 20);
drawCrossX(crossX,110,111,15,15);


//N (grid D1)
drawCircle(gridD1CircleX,circlesYPosition[1],8);
drawLine(gridD1CircleX + 7,circlesYPosition[1] - 10 ,gridD1CircleX - 10, circlesYPosition[1] + 11,2);
drawLine(linePos,circlesYPosition[1], 120, circlesYPosition[1]);
drawLine(120,circlesYPosition[1],150,circlesYPosition[1] - 20);
drawLine(getOverLappingLine[0],circlesYPosition[1],getOverLappingLine[1],circlesYPosition[1]);
drawBigRect(getOverLappingLine[0] - 14,80,12, 25);
drawLine(190,150,190,170);
drawBigRect(getOverLappingLine[0] - 14,165,12, 25);
drawLine(190,210,190,235);
drawCrossX(crossX,110,139,15,15);

//PE (grid D1)
drawCircle(gridD1CircleX,circlesYPosition[2],8);
drawLine(gridD1CircleX + 7,circlesYPosition[2] - 10 ,gridD1CircleX - 10, circlesYPosition[2] + 11);
drawLine(linePos,circlesYPosition[2], 80,circlesYPosition[2]);
drawLine( 80,circlesYPosition[2],80, 235);
var peBoxY = 235;
var peBoxX = 95;
drawLine(80, peBoxY, peBoxX , peBoxY);
drawLine(peBoxX, peBoxY, peBoxX, 265);
drawLine(peBoxX, 265, 80, 265);
drawLine(80, 265, 80, peBoxY);
drawLine(peBoxX, 265, peBoxX + 15, 265);
drawLine(peBoxX + 15, 265, peBoxX + 15, peBoxY);
drawLine(peBoxX + 15, peBoxY, peBoxX, peBoxY);

// end Grid D1 --------------------------------------------------------------------------------------------------------------------------------------------

// Grid D2 ------------------------------------------------------------------------------------------------------------------------------------------------
//Controls the width of the two lines coming from D1
var lineWidthComingFromD1 = 290;
var kM1width = 370;



//first line coming from D1
var firstLineComingFromD1Height = circlesYPosition[0] - 80;
drawLine(getOverLappingLine[0], circlesYPosition[0], lineWidthComingFromD1, circlesYPosition[0]);
drawLine(lineWidthComingFromD1, circlesYPosition[0], lineWidthComingFromD1, firstLineComingFromD1Height);
drawLine(lineWidthComingFromD1, firstLineComingFromD1Height, kM1width, firstLineComingFromD1Height);
drawOpenCircuit(kM1width, firstLineComingFromD1Height);
drawLine(lineWidthComingFromD1 + 60, firstLineComingFromD1Height + 30, kM1width, firstLineComingFromD1Height + 30);
drawOpenCircuit(kM1width, firstLineComingFromD1Height + 30);
drawDottedLine(kM1width - 24, firstLineComingFromD1Height - 13,kM1width - 24, 165, 'ash');
drawDottedLine(kM1width - 24, 165,kM1width + 40, 165);
drawDottedLine(kM1width + 40, 165, kM1width + 40, 75);
drawDottedLine(kM1width + 40, 75, kM1width - 24, 75);

//R1
drawOverLappingLinesFromD2(firstLineComingFromD1Height);
drawLine(lineWidthComingFromD1 + 100, firstLineComingFromD1Height + 30, 410, firstLineComingFromD1Height + 30);
drawCircle2(lineWidthComingFromD1 + 100,firstLineComingFromD1Height + 30,3);

drawRect(328, 59);

// overlapping horizontal circuit line from KM1 to KM2
var overLappingLineHeight = 220;
drawCircle2((lineWidthComingFromD1 + kM1width) / 2,firstLineComingFromD1Height,3);
drawLine((lineWidthComingFromD1 + kM1width) / 2, firstLineComingFromD1Height, (lineWidthComingFromD1 + kM1width) / 2, overLappingLineHeight);
drawLine((lineWidthComingFromD1 + kM1width) / 2, overLappingLineHeight, kM1width, overLappingLineHeight);
drawOpenCircuit(kM1width, overLappingLineHeight);

//R3
drawOverLappingLinesFromD2(overLappingLineHeight);
drawLine(lineWidthComingFromD1 + 60, firstLineComingFromD1Height + 160, kM1width, firstLineComingFromD1Height + 160);
drawOpenCircuit(kM1width, firstLineComingFromD1Height + 160);
drawLine(lineWidthComingFromD1 + 100, firstLineComingFromD1Height + 160, 410, firstLineComingFromD1Height + 160);
drawRect(328, 150);

drawDottedLine(kM1width - 24, firstLineComingFromD1Height + 118,kM1width - 24, 293, 'ash');
drawDottedLine(kM1width - 24, 293, kM1width + 40, 293);
drawDottedLine(kM1width + 40, 293,kM1width + 40, 205);
drawDottedLine(kM1width + 40, 205, kM1width - 24, 205);


var secondLineCommingFromD1 = lineWidthComingFromD1 + 15;
var secondLineComingFromD1Height = ((1/1.5) * firstLineComingFromD1Height) + firstLineComingFromD1Height;

//second line coming from D1
//second line going up
drawLine(getOverLappingLine[1], circlesYPosition[1], secondLineCommingFromD1, circlesYPosition[1]);
drawLine(secondLineCommingFromD1, circlesYPosition[1], secondLineCommingFromD1, secondLineComingFromD1Height);
drawLine(secondLineCommingFromD1, secondLineComingFromD1Height, kM1width, secondLineComingFromD1Height );
drawCircle2(secondLineCommingFromD1,circlesYPosition[1],3);
drawOpenCircuit(kM1width, secondLineComingFromD1Height);

//R2
drawOverLappingLinesFromD2(secondLineComingFromD1Height);
drawRect(328, 101);

// Second Line Coming From D1 (SLCFD1), which moves down  (the line moving down).
var slcfD1 = secondLineComingFromD1Height + 130;
drawLine(secondLineCommingFromD1, circlesYPosition[1], secondLineCommingFromD1,slcfD1);
drawLine(secondLineCommingFromD1, slcfD1, kM1width, slcfD1);
drawOpenCircuit(kM1width, slcfD1);

//R4
drawOverLappingLinesFromD2(slcfD1);
drawRect(328, 192);
// End Grid D2 ------------------------------------------------------------------------------------------------------------------------------------------------



// START Grid D3 ------------------------------------------------------------------------------------------------------------------------------------------------
// getting the stop position of the overlapping lines from grid D2 - D3
var startPostR; // variable is assigned a value at line 136
var r3GridD3x = startPostR + 8;
var overLappingLineD3width = 530;
var r2GridD3x = (startPostR + overLappingLineD3width) / 2;
var r2andR3Y = (secondLineComingFromD1Height + slcfD1)/2.05;
var r2andR3Width = 620;
var r1GridD3Vertical = 170;

// COMING FROM  R1
drawLine(startPostR, firstLineComingFromD1Height, overLappingLineD3width, firstLineComingFromD1Height);
drawLine(overLappingLineD3width, firstLineComingFromD1Height, overLappingLineD3width, r1GridD3Vertical );
drawLine(overLappingLineD3width, r1GridD3Vertical, (r2GridD3x + r2andR3Width)/2.0  , r1GridD3Vertical);
drawCircle2((r2GridD3x + r2andR3Width)/2.0 ,r1GridD3Vertical,3);

// COMING FROM R2
drawLine(startPostR, secondLineComingFromD1Height, r2GridD3x, secondLineComingFromD1Height);
drawLine(r2GridD3x,secondLineComingFromD1Height,r2GridD3x,slcfD1);
drawCircle2(r2GridD3x, r2andR3Y,3);

//R2 and R4  line from grid D2 to D3 (Vertical Line around Capacitor board)
drawLine(r2GridD3x, r2andR3Y, r2andR3Width, r2andR3Y);
drawCircle2(r2andR3Width, r2andR3Y,3);
drawCircle2(r2andR3Width, 100,3);
drawLine(r2andR3Width, r2andR3Y - 70, r2andR3Width, 100);
drawLine(r2andR3Width + 12, r2andR3Y - 70, 605,r2andR3Y - 70);
drawLine(r2andR3Width, r2andR3Y, r2andR3Width, 155);
drawLine(r2andR3Width, r2andR3Y, r2andR3Width, 240);
drawLine(r2andR3Width + 12, r2andR3Y + 30, 605,r2andR3Y + 30);
drawLine( r2andR3Width, 255,  r2andR3Width, 290);
drawCircle2(r2andR3Width, 290, 3);

drawArc(arc,460,102,25,20);
drawArc(arc,460,170,25,20);

//Capacitor board
drawBigRect(r2andR3Width - 175, 40, 60,180);

//---D1 (grid D3)
var d1length = 712;
drawDottedLine(((r2GridD3x + r2andR3Width)/2) - 12, firstLineComingFromD1Height - 10, ((r2GridD3x + r2andR3Width)/2) - 12,  slcfD1 + 37);
drawDottedLine(((r2GridD3x + r2andR3Width)/2) - 12,  slcfD1 + 37, 575, slcfD1 + 37);
drawDottedLine(575, slcfD1 + 37, 575, slcfD1 - 200);
drawDottedLine(575, slcfD1 - 200, 550,slcfD1 - 200);

drawLine((r2GridD3x + r2andR3Width)/2, firstLineComingFromD1Height + 10, (r2GridD3x + r2andR3Width)/2,  slcfD1 + 10);
drawLine(555,140,570,140);
drawTriangle(425,100);

drawLine(555,240,570,240);
drawTriangle(425,170);
drawLine((r2GridD3x + r2andR3Width)/2, firstLineComingFromD1Height + 10, d1length, firstLineComingFromD1Height + 10);
drawLine(d1length, firstLineComingFromD1Height + 10, d1length, r1GridD3Vertical);
//---- end D1

// D1 Overlapping horizontal line into D4
drawLine(d1length, r1GridD3Vertical, 730, r1GridD3Vertical);

drawLine((r2GridD3x + r2andR3Width)/2,  slcfD1 + 10, d1length, slcfD1 + 10);
drawLine(d1length,  slcfD1 + 10,d1length,225);
// D1 Overlapping horizontal line into D4
drawLine(d1length,225, 730, 225);

//COMING FROM R3
drawLine(startPostR,overLappingLineHeight,r3GridD3x,overLappingLineHeight);
drawLine(r3GridD3x,overLappingLineHeight, r3GridD3x, firstLineComingFromD1Height);
drawCircle2(r3GridD3x,firstLineComingFromD1Height,3);

//COMING FROM R4
drawLine(startPostR,slcfD1, r2GridD3x, slcfD1);

// End Grid D3 ------------------------------------------------------------------------------------------------------------------------------------------------

// START Grid D4 ------------------------------------------------------------------------------------------------------------------------------------------------


var inverterStartx = 730;
var inverterStarty = 150;
var no3inD4height = 225;
function drawSemiCircle(x,y, from, to, cond){
  pencil.beginPath();
  pencil.arc(x, y, 5, from * Math.PI, to * Math.PI, cond);
  pencil.stroke();
  pencil.beginPath();
  pencil.arc(x + 10, y, 5, from * Math.PI, to * Math.PI, cond);
  pencil.stroke();
  pencil.beginPath();
  pencil.arc(x + 20, y, 5, from * Math.PI, to * Math.PI, cond);
  pencil.stroke();
  pencil.beginPath();
  pencil.arc(x + 30, y, 5, from * Math.PI, to * Math.PI, cond);
  pencil.stroke();
}

// Inverter board (grid D4)
drawBigRect(558, 103, 100, 70);
drawLine(860, r1GridD3Vertical, 935, r1GridD3Vertical);
drawTransformers(img4,570,165, 20,15);
drawTransformers(img7,625,165, 25,15);

// switch (grid D4) connecting to X2 (grid C4)
drawLine2(752,240,752,270);
drawLine2(752,270,747, 275);
drawLine2(747,275, 763, 275);
drawLine2(747,275,747, 365);
drawLine2(747,365,510,365);
drawLine2(510,365,510,732);


drawLine2(760,240,760,270);

// switch (grid D4) connecting to driver board (grid C4)
drawLine2(768,240,768,270);
drawLine2(768,270,763, 275);

//thermistor
drawBus(thermistor,592,150,30,15);
// Line from Inverter board (grid D4) to MCB(X2-grid C4)
drawLine2(780,224,780,390);
drawLine2(810,224,810,270);
drawLine2(810,270,805,275);
drawLine2(805,275,780,275);
drawLine2(780,390,675,390);
//End thermistor

drawLine2(825,240,825,270);
drawLine2(825,270,820, 275);

drawLine2(832,240,832,270)
drawLine2(832,270,827, 275);

drawLine2(839,240,839,270)
drawLine2(839,270,834, 275);

drawLine2(846,240,846,270)
drawLine2(846,270,841, 275);
// End Inverter board (grid D4)

// line linking inverter board to driver board (grid c4)
drawLine2(820,275,840,275);
drawLine2(825,275, 825,345);

//From E4 (inverter board (grid D4)) To 3(grid D5)
drawLine(860, no3inD4height, 935, no3inD4height);
drawSemiCircle(718, 118, 270, 1, false);

function drawz(){
  drawLine(930, 180, 990, 180);
  drawLine(990, 180, 930, 218);
  drawLine(930, 218, 990, 218);
}

drawz();


drawSemiCircle(718, 158, 1, 0, false);

// End Grid D4 ------------------------------------------------------------------------------------------------------------------------------------------------

// START Grid D5 ------------------------------------------------------------------------------------------------------------------------------------------------

// l1
var l12startx = 986;
var l12stopx = 1280;

function doubleSemiCicle(x,y,radius){
  pencil.beginPath();
  pencil.arc(x, y, radius, 3.1, 0 * Math.PI);
  pencil.stroke();
}

//CT (grid D6)
drawLine(l12startx, r1GridD3Vertical, l12stopx - 20 , r1GridD3Vertical);
doubleSemiCicle(l12startx - 73, r1GridD3Vertical-50,8);
doubleSemiCicle(l12startx - 58, r1GridD3Vertical-50,8);
drawLine2(1225,168,1225,185);
drawLine2(1225,185,1220,190);
drawLine2(1220,190,1185,190);


//C2 (grid D5)
drawLine(l12startx, no3inD4height, 1100,no3inD4height);

// 1 vertical line C2 in grid D5
var lineC2inD5starty = 210;
var lineC2inD5stopy = 240;


// 2 vertical lines C2 in grid D5
drawLine(1110, lineC2inD5starty, 1110, lineC2inD5stopy);
drawLine(1100, lineC2inD5starty, 1100, lineC2inD5stopy);


drawLine(1110, no3inD4height, l12stopx - 20,  no3inD4height);

// End Grid D5 ------------------------------------------------------------------------------------------------------------------------------------------------

// START Grid 6D ------------------------------------------------------------------------------------------------------------------------------------------------

// X2
drawLine(l12stopx - 20 , 155, l12stopx - 20 , 240);
drawLine(l12stopx - 20, 155, 1280,155);
drawLine(1280, 155, 1280, 240);
drawLine(1280, 240, 1280 - 20, 240);

// TANK -------------------------------------------------------------------------
drawDottedLine(l12stopx - 20, 115,l12stopx - 20, 280);
drawDottedLine(l12stopx - 20, 115, l12stopx + 90, 115);
drawDottedLine(l12stopx - 20, 280, l12stopx + 90, 280);
drawDottedLine(l12stopx - 20, 280, l12stopx + 90, 280);
drawDottedLine(l12stopx + 90, 280,l12stopx + 90, 115);
drawOled(bottomOled, 970, 175, 30,28);

//X3
drawSwitch(img17,1000,176,25,30);

//mA-
drawLine2(1320,276,1320,370);
drawLine2(1320,370,1390,370);

//mA+
drawLine2(1335,276,1335,350);
drawLine2(1335,350,1390,350);

//mA- and mA+
drawLine(1390,380,1390,340);

drawCircle(1401,345,6);
drawLine(1408,370,1395,382);

drawCircle(1401,375,6);
drawLine(1408,340,1395,352);

drawArrow(arrow,1018,190,32,32);
// END OF TANK -------------------------------------------------------------------

//A
drawCircle(l12stopx + 120, 190, 8, 3);
drawLine(l12stopx + 112, 190, 1370, 190);
drawLine(l12stopx + 112, 195, 1410, 185);
//C
drawCircle(l12stopx + 120, 240, 8, 3);
drawLine(l12stopx + 112, 240, 1370, 240);
drawLine(l12stopx + 112, 245, 1410, 235);

// / End Grid 6D ------------------------------------------------------------------------------------------------------------------------------------------------

//    -------------------------------------------------------------------------------------------------------------------------------------
//
//
//                                                             END OF GRID D
//
//
//    -------------------------------------------------------------------------------------------------------------------------------------


//    -------------------------------------------------------------------------------------------------------------------------------------
//
//
//                                                            START OF GRID C
//
//
//    -------------------------------------------------------------------------------------------------------------------------------------

// GRID C1 ----------------------------------------------------------------------------------------------------------------------------------

// Power Module P1 (grid C1)
drawBigRect(65,275, 140, 110,1);
var img1 = document.getElementById("double-direct-switch");
drawSwitch(img1,44,310,35,30);

var img2 = document.getElementById("R-double-direct-switch");
drawSwitch(img2,182,280,30,25);

var img3 = document.getElementById("quad-direct-switch");
drawSwitch(img3,170,340,40,38);


//+12v (grid C2)
drawLine2(272,410, 300, 410);
drawLine2(300, 410, 315, 420);

//com (grid C2)
drawLine2(272,425, 300, 425);
drawLine2(300,425,315, 435);

// + 12v & GND (grid C2)
drawLine2(315,420, 315, 460);
drawLine2(315, 460, 803,460);

// END GRID C1 ----------------------------------------------------------------------------------------------------------------------------------

// GRID C2 -------------------------------------------------------------------------------------------------------------------------------------
//-12v (grid c2)
drawLine2(272, 495, 300, 495);
drawLine2( 300, 495, 315, 505);
//+12v (grid C2)
drawLine2(272, 506, 300, 506);
drawLine2(300, 506, 315, 516);
//COM (grid C2)
drawLine2(272, 517, 300, 517);
drawLine2(300,517, 315, 527);
//+5v (grid C2)
drawLine2(272, 530, 300, 530);
drawLine2(300, 530, 315, 540);

// Line FROM POWER MODULE P1   -12v,+12v,GND,+5v (grid C2)
drawLine2( 315, 505, 315, 570);
drawLine2(315,570,440,570);
drawLine2(440,570,440,650);

//KM1 (grid C2)
drawBigRect(305,235,10,20);
//A1
drawLine2(360, 360, 360, 430);
drawLine2(360, 360, 370, 350);
drawLine2(370, 350, 398, 350);
//A2
drawLine2(412, 350, 440, 350);
drawLine2(440,350,450,360);
drawLine2(450,430, 360,430);
drawCircle2(450,430,2);


//KM2 (grid C2)
drawBigRect(305,270,10,20);
//A1
drawLine2(360, 410, 370, 400);
drawLine2(370, 400, 398, 400);
//A2
drawLine2(412, 400, 440, 400);
drawLine2(440,400,450,410);

//KM1-A2 & KW2-A2 (grid C2) to Contactor Control (grid B2)
drawLine2(450,360, 450, 970);

//KM1-NC (grid C2)
drawLine2(410,512,440,512);
drawLine2(440,512,450,520);
drawLine2(395,512,410,500);
drawLine2(370,512,395,512);
drawLine2(360,520,370,512);
drawLine2(360,535,360,520);
drawLine2(360,535,450,535);
drawCircle2(450,535,2);

//GRID C4 ---------------------------------------------------------------------------------------------------------------------------------------

// driver board ----------------
drawBigRect(600,260, 70, 45);

// top transformers
drawTransformers(img6, 605, 255, 20, 15);
drawLine2(798,350, 798, 380);
drawLine2(798,350,805,345);

drawLine2(803,350, 803, 380);
drawLine2(803,350,810,345);

drawLine2(809,350,809,380);
drawLine2(809,350,816,345);

drawLine2(815,350,815,380);
drawLine2(815,350,822,345);

drawLine2(803,345,827,345);

drawTransformers(img6,645,255, 20,15);



// bottom transformers
drawTransformers(img4,605,298, 15,15);
drawLine2(797, 450, 797, 430);
drawLine2(790,460, 797, 450);
drawLine2(803,460, 810, 450);
drawLine2(810, 450, 810, 430);

drawTransformers(img5,635,298, 30,15);
drawLine2(836,445,836, 455);

drawLine2(842,445,842, 465);
drawLine2(842,465,836, 470);


drawLine2(848,445,848, 465);
drawLine2(848,465,840, 470);

drawLine2(854,445,854, 455);

drawLine2(860,445,860, 465);
drawLine2(860,465,852, 470);

drawLine2(866,445,866, 465);
drawLine2(866,465,858, 470);

drawLine2(818,470,860,470);
drawLine2(818,470,818,550);

drawLine2(818,550, 750,550);




// end driver board ---------------------

function drawTerminal(x,y){
  var w = 17;
  var l = 12;
  var width = 0.29;
  drawBigRect(x,y,w,l,width);
  drawBigRect(x,y + 13,w,l,width);
  drawBigRect(x,y + 26,w,l,width);
}


// Terminal C5 - C6-------------------------------------------------------------------------------------------------
drawTerminal(810,320);
drawTerminal(827,320);
drawTerminal(845,320);
drawTerminal(862,320);
drawTerminal(879,320);
drawTerminal(896,320);
drawTerminal(913,320);

drawTerminal(938,320);
drawTerminal(955,320);
drawTerminal(972,320);
drawTerminal(990,320);
drawTerminal(1007,320);
drawTerminal(1024,320);
drawTerminal(1041,320);


//  GRID C5 TI input terminal top ------------------------------------------------
//5
drawLine2(1118, 460, 1118, 437);
// SAL 1 (grid C5)
drawBigRect(850,287,8,18,0.7);
//9
drawLine2(1160, 460, 1160, 437);
// F1-N (grid C5)
drawBigRect(882,287,8,18,0.7);

// GRID C6 TI output terminal top -----------------------------------------------
// 5
drawLine2(1284, 460, 1284, 436);
drawBigRect(976,287,8,18,0.7);
//9
drawLine2(1328, 460, 1328, 437);
drawBigRect(1010,287,8,18,0.7);
//11
drawLine2(1352, 460, 1352, 437);
drawBigRect(1028,287,8,18,0.7);
//13
drawLine2(1374, 460, 1374, 437);
drawBigRect(1046,287,8,18,0.7);


// T1 input terminal bottom
//T1-277V (grid 5C)
drawLine2(1094, 513, 1094, 536);
drawBigRect(816,373,8,18,0.7);

//T1-254V (grid 5C)
drawBigRect(831,373,8,18,0.7);

drawLine2(1118, 513, 1118, 536);
//T1-230V (grid 5C)
drawBigRect(844,373,8,18,0.7);
//LW-L (grid 5C)
drawBigRect(852,373,8,18,0.7);

drawLine2(1140, 513, 1140, 536);
//T1-220V (grid 5C)
drawBigRect(867,373,8,18,0.7);

drawLine2(1165, 513, 1165, 536);
//INV-V (grid 5C)
drawBigRect(882,373,8,18,0.7);
//T1-Tem1 (grid 5C)
drawBigRect(890,373,8,18,0.7);

drawLine2(1205, 513, 1205, 536);
drawBigRect(916,373,8,18,0.7);


// T1 output terminal
drawLine2(1239, 513, 1239, 536);
drawBigRect(942,373,8,22,0.7);

drawLine2(1263, 513, 1263, 536);
drawBigRect(960,373,8,22,0.7);

drawLine2(1283, 513, 1283, 536);
drawBigRect(976,373,8,22,0.7);

drawLine2(1306, 513, 1306, 536);
drawBigRect(994,373,8,22,0.7);

drawLine2(1330, 513, 1330, 536);
drawBigRect(1012,373,8,22,0.7);

drawLine2(1375, 513, 1375, 536);
drawBigRect(1046,373,8,22,0.7);


//    -------------------------------------------------------------------------------------------------------------------------------------
//
//
//                                                            END OF GRID C
//
//
//    -------------------------------------------------------------------------------------------------------------------------------------



//    -------------------------------------------------------------------------------------------------------------------------------------
//
//
//                                                             START OF GRID B
//
//
//    -------------------------------------------------------------------------------------------------------------------------------------
// GRID B1
//PFB ----------------------------------------------------------------------------------------------------------------------------------
// Control Signal (grid C1)
drawOled(topOled, 100, 403, 30,28);
drawLine(150,560,150,580);
drawLine(150,560,460,560);
drawLine(460,560,460,912);
drawLine(460,912,715,912);
drawLine(715,912,715,885);

// DC_ BUS (grid B1)
drawBus(img8,50,580,38,40);
drawLine2(76,880,76,1000);
drawLine2(76,1000,86,1010);

drawLine2(90,880,90,900);

drawLine2(105,880,105,1000);
drawLine2(105,1000,115,1010);

//LINE FROM PFB (DC-BUS-,DC-BUS+ (grid B1)) TO Anode Driver Board (grid A3)
drawLine2(86,1010,455,1010);
drawLine2(455,1010,455,1113);
// END DC_BUS

// FIL_SEL (grid B1)
drawBus(img11,100,580,70,40);
drawLine2(142,880,142,980);
drawLine2(142,980,152,990);

drawLine2(170,880,170,980);
drawLine2(170,980,180,990);

drawLine2(184,880,184,980);
drawLine2(184,980,194,990);

drawLine2(212,880,212,980);
drawLine2(212,980,222,990);

// LINE FROM PFB (FIL-S,FIL-Com,FIL-Com,FIL-L(grid B1)) to Tank (GRID 6D)
drawLine2(152,990,1015,990);
drawLine2(1015,990,1015,350);
drawLine2(1015,350, 1290,350);
drawLine2(1290,350,1290,290);

// END FIL_SEL

// Contactor Control (grid B2)
drawBus(img10,185,580,60,40);
drawLine2(253,880,253,960);
drawLine2(253,960,263,970);

drawLine2(266,880,266,960);
drawLine2(266,960,276,970);

drawLine2(281,880,281,960);
drawLine2(281,960,291,970);

drawLine2(295,880,295,960);
drawLine2(295,960,305,970);

drawLine2(309,880,309,960);
drawLine2(309,960,319,970);

// 5,4,3,2,1 contactor control going to grid C2
drawLine2(263,970,450,970);
// END Contactor Control

// FROM P1
drawBus(img9,280,425,34,42);
drawLine2(405,618,430,618);
drawLine2(430,618,440,608);

drawLine2(405,632,430,632);
drawLine2(430,632,440,622);

drawLine2(405,646,430,646);
drawLine2(430,646,440,636);

drawLine2(405,660,430,660);
drawLine2(430,660,440,650);
// END FROM P1

// To SCB
drawBus(img9,280,485,34,42);
drawLine2(405,702,430,702);
drawLine2(430,702,440,712);

drawLine2(405,717,430,717);
drawLine2(430,717,440,727);

drawLine2(405,732,430,732);
drawLine2(430,732,440,742);

drawLine2(405,746,430,746);
drawLine2(430,746,440,756);

// GND, -12V, +12V, +5V
drawLine2(440,712,440,935);
drawLine2(440,935,860,935);
// End To SCB

// Reserve
drawBus(img9,280,545,34,42);
drawBigRect(40,410,265,200);

drawLine2(405,790,420,790);
drawLine2(405,803,420,803);
drawLine2(405,818,420,818);
drawLine2(405,832,420,832);

// End Reserve
// END PFB -----------------------------------------------------------------------------------------------



//GRID B3 --------------------------------------------------------------------------------------------------------------------------
//MCB ------------------------------------------------------------------------------------------

// Tank Feedback
drawLine(1000,333,1290,333);
drawLine(1000,520,1000,333);
drawLine(570,520,1000,520);
drawLine(570,643,570,520);
drawLine(570,643,585,643);
drawOled(leftOled,446,435,25,28);


// R_I (grid B3)
drawBus(img12,445,465,23,25);
drawLine2(540, 675, 590, 675);
drawLine2(540, 675, 530, 665);

drawLine2(540, 692, 590, 692);
drawLine2(540, 692, 530, 682);
drawLine2(530, 682,530,500);
drawLine2(530,500,985,500);
drawLine2(985,500,985,310);
drawLine2(985,310,1186,310);
drawLine2(1186,310,1186,170);
// End R_I

// Cap2_I (grid B3)
drawBus(img12,445,500,23,25);
drawLine2(520, 725, 590, 725);
drawLine2(520, 725, 510, 715);

drawLine2(520, 742, 590, 742);
drawLine2(520, 742, 510, 732);
// End Cap2_I

// Cap1_I (grid B3)
drawBus(img12,445,535,23,25);
drawLine2(570, 775, 590, 775);
drawLine2(570, 795, 590, 795);
// End Cap1_I

// Inv_485 (grid B3)
drawBus(img12,445,570,23,25);
drawLine2(540, 825, 590, 825);
drawLine2(540, 825,530, 835);

drawLine2(540, 845, 590, 845);
drawLine2(540, 845,530, 855);

drawLine2(530,835,530, 1028);
// End Inv_485

// X2 MCB (grid B3) coming from Inverter Board (grid D4)
drawLine2(675,550,675,390);
drawLine2(665,550,675,550);

drawLine2(655,560,655, 585);
drawLine2(655,560,665,550);

drawLine2(670,560,670, 585);
drawLine2(670,560,675,550);

drawBus(img13,495,400,23,25);
// End X2 MCB (grid B3) coming from Inverter Board (grid D4)

// Driver (grid B4)
drawBus(img14, 560,400,43,25);
drawLine2(740,560,740,582);
drawLine2(740,562,750, 550);

drawLine2(754,560,754,582);
drawLine2(754,562,764, 550);

drawLine2(768,560,768,582);
drawLine2(768,562,778, 550);

drawLine2(768,560,768,582);

drawLine2(782,560,782,582);
drawLine2(782,562,792,550);
//End Driver

// Power (grid B4)
drawBus(img15, 620,586,45,30);
drawLine2(820, 880, 820, 930);
drawLine2(820,930,815,935);

drawLine2(835, 880, 835,930);
drawLine2(835,930,830,935);

drawLine2(849, 880, 849,930);
drawLine2(849,930,844,935);

drawLine2(863, 880, 863,930);
drawLine2(863,930,858,935);
// End

// Control Signal (grid B3)
drawOled(bottomOled, 530, 590, 30,28);

// OLED 10P,117 (grid B4)
drawOled(rightOled,712,445,30,28);

// 50P, X10 (grid B4)
drawOled(rightOled,712,515,30,28);
drawLine2(970,757,1055,757);

drawArrow(arrow,675,586,32,53);
drawCircle(904,850,8);


drawBigRect(454,410,280,200);

//End MCB ------------------------------------------------------------------------------------------

//GRID B5 ---------------------------------------------------------------------------------------------------------------------------
// -----------------Interface Board
drawBigRect(810,510,200,100);

// 50P, X1 (grid B5)
drawOled(leftOled,804,515,25,28);

drawBus(img8,840,590,38,30);

//Tube-M (grid B5)
drawLine2(1110, 880, 1110, 960);
drawLine2(1110, 960, 1100, 970);

//Tube-A (grid B5)
drawLine2(1125, 880, 1125, 960);
drawLine2(1125, 960, 1115, 970);

//Tube-C (grid B5)
drawLine2(1140, 880, 1140, 960);
drawLine2(1140, 960, 1130, 970);


//Tube-M, Tube-A, Tube-C (grid A5)
drawLine2(1130,970,800,970);
drawLine2(800,970,800, 1060);


//    -------------------------------------------------------------------------------------------------------------------------------------
//
//
//                                                            END OF GRID B
//
//
//    -------------------------------------------------------------------------------------------------------------------------------------


//    -------------------------------------------------------------------------------------------------------------------------------------
//
//
//                                                             START OF GRID A
//
//
//    -------------------------------------------------------------------------------------------------------------------------------------
// grid A3
// Anode Driver Board (grid A3) ------------------------------------------------------------------------------------
drawBigRect(455,700,130,100);
// A/B 485+ & 485- (grid A3 )
drawBus(img12,445,705,23,25);
drawLine2(540, 1018, 590, 1018);
drawLine2(540, 1018,530, 1008);

drawLine2(540, 1038, 590, 1038);
drawLine2(540, 1038,530, 1028);
// End 485+ & 485-

// DC-BUS- & DC-BUS+ 1,3 X6 (grid A3 )
drawBus(img12,445,735,23,25);
drawLine2(480, 1060, 590, 1060);
drawLine2(480, 1060, 475, 1050);

drawLine2(480, 1080, 590, 1080);
drawLine2(480, 1080, 475, 1070);

drawLine2(475, 1070, 475,340);
drawLine2(475,340,672,340);
drawLine2(672,340,672,100);
// End DC-BUS- & DC-BUS+ X6

// DC-BUS- & DC-BUS+ 1/3 X7 (grid A3 )
drawBus(img12,445,765,23,25);
drawLine2(460, 1105, 590, 1105);
drawLine2(460, 1105, 455, 1095);

drawLine2(460, 1122, 590, 1122);
drawLine2(460, 1122, 455, 1112);
// End DC-BUS- & DC-BUS+ 1/3 X7


drawCircle(755,1016,6);
drawLine2(755, 1016, 800, 1016);
drawSwitch(img16,560,720,35,30);
drawLine2(770, 1040, 795, 1040);
drawLine2(795, 1040, 800, 1030);

drawLine2(770, 1055, 795, 1055);
drawLine2(795, 1055, 800, 1045);

drawLine2(770, 1068, 795, 1068);
drawLine2(795, 1068, 800, 1058);
// End Anode Driver Board -------------------------------------------------------------------------------

}
