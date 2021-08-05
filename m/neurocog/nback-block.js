$('body').css('background','black');
var timeouts = [];
var intervals = [];
//------------------------------------
var this_module=$vm.module_list[$vm.vm['__ID'].name];
//------------------------------------
$('#D__ID').on('load',function(){
    $('#header').hide();
    $('#footer').hide();
    $('#participant_div__ID').hide()
    $('#thirdparty_container__ID').css('padding-top','100px');
    $('#thirdparty_container__ID').css('height',$vm.min_height);
    third_party("thirdparty_container__ID",data_process);
    //data={}
    //calc(data)
    //console.log(data)
})
		//------------------------------------
        var trial_count=0;
        var counter = 0;
        var intruction_time=45;
        var intruction_timer_start=40;
        var delay_timer=50;
        var delay_timer_start=45;
        var i = setInterval(function(){
            counter++;
            if(counter >= intruction_timer_start) {
                $('#instructions_1__ID').hide();
                $('#counter_div__ID').show();
                $('#counter__ID').html(intruction_time-counter)
            }
            if(counter === intruction_time) {
                $('.start-button').click();
                $('#counter_div__ID').hide();
                clearInterval(i);
            }
        }, 1000);
//------------------------------------
var ClearIntervals = function()
{
    for (var i=0; i<intervals.length; i++)
    {
        clearInterval(intervals[i]);
    }
    intervals = [];
    for (var i=0; i<timeouts.length; i++)
    {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
}
//------------------------------------
$('#D__ID').on('unload',function(){
    ClearIntervals();
})
//------------------------------------
var calc1=function(datax){
/*
    var no="PRE,1,2,3,4,5,6,7,8,9,10,11,12,13"
    var nno=no.split(",")
    var rt="0,779,1011,1093,2998,3001,1812,1040,1110,954,621,771,961,1262"
    var nrt=rt.split(",")
    var ac="-,CN,CN,CN,CN,CN,CM,CM,CN,CM,CM,CM,FN,CM"
    var nac=ac.split(",")
*/	
    var data={}
    var nno=datax.NNO.split(",");
    var nrt=datax.NRT.split(",");
    var nac=datax.NAC.split(",");
    data.NNO=datax.NNO
    data.NRT=datax.NRT
    data.NAC=datax.NAC
    var ngta=0;
    var nrgt=0;
    var ntcr=0;
    var ntcrm=0;
    var ntcrn=0;
    var ntic=0;
    var ntmr=0;
    var nmis=0;
    var ntwr=0;
    var nmrt=0;
    var nmrtm=0;
    var nmrtn=0;
    var nmrta=[];
    var nmrtma=[];
    var nmrtna=[];
    var mrtcm=0;
    var ntfrm=0;
    var ntfrn=0;
    for (var i=0;i<nno.length;i++){
        if(nno[i]!='1' && nno[i]!='2' && nno[i]!='3' && nno[i]!='PRE'){
            if( nac[i]=='CM')   {ntcr++;ntcrm++;nmrt+=parseInt(nrt[i]);nmrtm+=parseInt(nrt[i]);nmrta.push(nrt[i]);nmrtma.push(nrt[i]);}
            if( nac[i]=='CN')   {ntcr++;ntcrn++;nmrt+=parseInt(nrt[i]);nmrtn+=parseInt(nrt[i]);nmrta.push(nrt[i]);nmrtna.push(nrt[i]);}
            if( nac[i]=='O')    nmis++;
            if( nac[i]=='FM')   {ntic++;ntfrm++;}
            if( nac[i]=='FN')   {ntic++;ntfrn++;}
            if( nac[i]=='W')    ntwr++;
            nrgt=nrgt+parseInt(nrt[i]);
        }
    }
    if( ntcr+ntic > 0){
        ngta=(100*ntcr/(ntcr+ntic)).toFixed(1)
        data.NGTA=ngta;
        data.GMRT=(nrgt/(nno.length-3-nback)).toFixed(0);
    }
    else  data.NGTA='0';
    data.NBACK=nback;
    data.NTCR=ntcr;
    data.NMIS=nmis;
    data.NTIC=ntic;
    data.NGRT=nrgt;
    if(ntcr>0) data.NMRT=(nmrt/ntcr).toFixed(0);
    else data.NMRT='0';
    if(ntcrm>0) data.MRTCM=(nmrtm/ntcrm).toFixed(0);
    else data.MRTCM='0';
    if(ntcrn>0) data.MRTCN=(nmrtn/ntcrn).toFixed(0);
    else data.MRTCN='0';
    if(nmrta.length>1){
        var sdcr=standardDeviation(nmrta);
        data.SDCR=sdcr.toFixed(0);
    }
    else data.SDCR=0;
    if(nmrtma.length>1){
        var sdcm=standardDeviation(nmrtma);
        data.SDCM=sdcm.toFixed(0);
    }
    else data.SDCM=0;
    if(nmrtna.length>1){
        var sdcn=standardDeviation(nmrtna);
        data.SDCN=sdcn.toFixed(0);
    }
    else data.SDCN=0;

    if(nmrta.length>1){
        var mdrtcr=median(nmrta);
        data.MdRTCR=mdrtcr.toFixed(0);
    }
    else data.MdRTCR=0;
    if(nmrtma.length>1){
        var mdrtcm=median(nmrtma);
        data.MdRTCM=mdrtcm.toFixed(0);
    }
    else data.MdRTCM=0;
    if(nmrtna.length>1){
        var mdrtcn=median(nmrtna);
        data.MdRTCN=mdrtcn.toFixed(0);
    }
    else data.MdRTCN=0;
    if(nmrta.length>0){
        var mnrtcr=getmin(nmrta);
        data.MnRTCR=mnrtcr;
        var mxrtcr=getmax(nmrta);
        data.MxRTCR=mxrtcr;
        var mf10cra=top10pc(nmrta);
        var mf10cr=average(mf10cra);
        data.MF10CR=mf10cr;
        var ms10cra=bottom10pc(nmrta);
        var ms10cr=average(ms10cra);
        data.MS10CR=ms10cr;
    }
    else {
        data.MnRTCR='0';
        data.MxRTCR='0';
        data.MF10CR='0';
        data.MS10CR='0';
    }
    if(mf10cra!=undefined && mf10cra.length > 1){
        var sdf10cr=standardDeviation(mf10cra);
        data.SDF10CR=sdf10cr.toFixed(0);
    }
    else data.SDF10CR='0';
    if(ms10cra!=undefined && ms10cra.length > 1){
        var sds10cr=standardDeviation(ms10cra);
        data.SDS10CR=sds10cr.toFixed(0);
    }
    else data.SDS10CR='0';
    data.NTCM=ntcrm;
    data.NTCN=ntcrn;
    data.NTFM=ntfrm;
    data.NTFN=ntfrn;
    data.NTWR=ntwr;
    return data
}
//-------------------------------------
var calc2=function(datax){
    /*
        var no="PRE,1,2,3,4,5,6,7,8,9,10,11,12,13"
        var nno=no.split(",")
        var rt="0,779,1011,1093,2998,3001,1812,1040,1110,954,621,771,961,1262"
        var nrt=rt.split(",")
        var ac="-,CN,CN,CN,CN,CN,CM,CM,CN,CM,CM,CM,FN,CM"
        var nac=ac.split(",")
    */	data2={};
        var nno=datax.NNO.split(",");
        var nrt=datax.NRT.split(",");
        var nac=datax.NAC.split(",");
        data2.NNO2=datax.NNO
        data2.NRT2=datax.NRT
        data2.NAC2=datax.NAC
        var ngta=0;
        var nrgt=0;
        var ntcr=0;
        var ntcrm=0;
        var ntcrn=0;
        var ntic=0;
        var ntmr=0;
        var nmis=0;
        var ntwr=0;
        var nmrt=0;
        var nmrtm=0;
        var nmrtn=0;
        var nmrta=[];
        var nmrtma=[];
        var nmrtna=[];
        var mrtcm=0;
        var ntfrm=0;
        var ntfrn=0;
        for (var i=0;i<nno.length;i++){
            if(nno[i]!='1' && nno[i]!='2' && nno[i]!='3' && nno[i]!='PRE'){
                if( nac[i]=='CM')   {ntcr++;ntcrm++;nmrt+=parseInt(nrt[i]);nmrtm+=parseInt(nrt[i]);nmrta.push(nrt[i]);nmrtma.push(nrt[i]);}
                if( nac[i]=='CN')   {ntcr++;ntcrn++;nmrt+=parseInt(nrt[i]);nmrtn+=parseInt(nrt[i]);nmrta.push(nrt[i]);nmrtna.push(nrt[i]);}
                if( nac[i]=='O')    nmis++;
                if( nac[i]=='FM')   {ntic++;ntfrm++;}
                if( nac[i]=='FN')   {ntic++;ntfrn++;}
                if( nac[i]=='W')    ntwr++;
                nrgt=nrgt+parseInt(nrt[i]);
            }
        }
        if( ntcr+ntic > 0){
            ngta=(100*ntcr/(ntcr+ntic)).toFixed(1)
            data2.NGTA2=ngta;
            data2.GMRT2=(nrgt/(nno.length-3-nback)).toFixed(0);
        }
        else  data2.NGTA2='0';
        data2.NTCR2=ntcr;
        data2.NMIS2=nmis;
        data2.NTIC2=ntic;
        data2.NGRT2=nrgt;
        if(ntcr>0) data2.NMRT2=(nmrt/ntcr).toFixed(0);
        else data2.NMRT2='0';
        if(ntcrm>0) data2.MRTCM=(nmrtm/ntcrm).toFixed(0);
        else data2.MRTCM2='0';
        if(ntcrn>0) data2.MRTCN2=(nmrtn/ntcrn).toFixed(0);
        else data2.MRTCN2='0';
        if(nmrta.length>1){
            var sdcr=standardDeviation(nmrta);
            data2.SDCR2=sdcr.toFixed(0);
        }
        else data2.SDCR2=0;
        if(nmrtma.length>1){
            var sdcm=standardDeviation(nmrtma);
            data2.SDCM2=sdcm.toFixed(0);
        }
        else data2.SDCM2=0;
        if(nmrtna.length>1){
            var sdcn=standardDeviation(nmrtna);
            data2.SDCN2=sdcn.toFixed(0);
        }
        else data2.SDCN2=0;
    
        if(nmrta.length>1){
            var mdrtcr=median(nmrta);
            data2.MdRTCR2=mdrtcr.toFixed(0);
        }
        else data2.MdRTCR2=0;
        if(nmrtma.length>1){
            var mdrtcm=median(nmrtma);
            data2.MdRTCM2=mdrtcm.toFixed(0);
        }
        else data2.MdRTCM2=0;
        if(nmrtna.length>1){
            var mdrtcn=median(nmrtna);
            data2.MdRTCN2=mdrtcn.toFixed(0);
        }
        else data2.MdRTCN2=0;
        if(nmrta.length>0){
            var mnrtcr=getmin(nmrta);
            data2.MnRTCR2=mnrtcr;
            var mxrtcr=getmax(nmrta);
            data2.MxRTCR2=mxrtcr;
            var mf10cra=top10pc(nmrta);
            var mf10cr=average(mf10cra);
            data2.MF10CR2=mf10cr;
            var ms10cra=bottom10pc(nmrta);
            var ms10cr=average(ms10cra);
            data2.MS10CR2=ms10cr;
        }
        else {
            data2.MnRTCR2='0';
            data2.MxRTCR2='0';
            data2.MF10CR2='0';
            data2.MS10CR2='0';
        }
        if(mf10cra!=undefined && mf10cra.length > 1){
            var sdf10cr=standardDeviation(mf10cra);
            data2.SDF10CR2=sdf10cr.toFixed(0);
        }
        else data2.SDF10CR2='0';
        if(ms10cra!=undefined && ms10cra.length > 1){
            var sds10cr=standardDeviation(ms10cra);
            data2.SDS10CR2=sds10cr.toFixed(0);
        }
        else data2.SDS10CR2='0';
        data2.NTCM2=ntcrm;
        data2.NTCN2=ntcrn;
        data2.NTFM2=ntfrm;
        data2.NTFN2=ntfrn;
        data2.NTWR2=ntwr;
        return data2;
    }
    //-------------------------------------
    //------------------------------------
var calc3=function(datax){
    /*
        var no="PRE,1,2,3,4,5,6,7,8,9,10,11,12,13"
        var nno=no.split(",")
        var rt="0,779,1011,1093,2998,3001,1812,1040,1110,954,621,771,961,1262"
        var nrt=rt.split(",")
        var ac="-,CN,CN,CN,CN,CN,CM,CM,CN,CM,CM,CM,FN,CM"
        var nac=ac.split(",")
    */	
        data3={};
        var nno=datax.NNO.split(",");
        var nrt=datax.NRT.split(",");
        var nac=datax.NAC.split(",");
        data3.NNO3=datax.NNO
        data3.NRT3=datax.NRT
        data3.NAC3=datax.NAC
        var ngta=0;
        var nrgt=0;
        var ntcr=0;
        var ntcrm=0;
        var ntcrn=0;
        var ntic=0;
        var ntmr=0;
        var nmis=0;
        var ntwr=0;
        var nmrt=0;
        var nmrtm=0;
        var nmrtn=0;
        var nmrta=[];
        var nmrtma=[];
        var nmrtna=[];
        var mrtcm=0;
        var ntfrm=0;
        var ntfrn=0;
        for (var i=0;i<nno.length;i++){
            if(nno[i]!='1' && nno[i]!='2' && nno[i]!='3' && nno[i]!='PRE'){
                if( nac[i]=='CM')   {ntcr++;ntcrm++;nmrt+=parseInt(nrt[i]);nmrtm+=parseInt(nrt[i]);nmrta.push(nrt[i]);nmrtma.push(nrt[i]);}
                if( nac[i]=='CN')   {ntcr++;ntcrn++;nmrt+=parseInt(nrt[i]);nmrtn+=parseInt(nrt[i]);nmrta.push(nrt[i]);nmrtna.push(nrt[i]);}
                if( nac[i]=='O')    nmis++;
                if( nac[i]=='FM')   {ntic++;ntfrm++;}
                if( nac[i]=='FN')   {ntic++;ntfrn++;}
                if( nac[i]=='W')    ntwr++;
                nrgt=nrgt+parseInt(nrt[i]);
            }
        }
        if( ntcr+ntic > 0){
            ngta=(100*ntcr/(ntcr+ntic)).toFixed(1)
            data3.NGTA3=ngta;
            data3.GMRT3=(nrgt/(nno.length-3-nback)).toFixed(0);
        }
        else  data3.NGTA3='0';
        data3.NTCR3=ntcr;
        data3.NMIS3=nmis;
        data3.NTIC3=ntic;
        data3.NGRT3=nrgt;
        if(ntcr>0) data3.NMRT3=(nmrt/ntcr).toFixed(0);
        else data3.NMRT3='0';
        if(ntcrm>0) data3.MRTCM3=(nmrtm/ntcrm).toFixed(0);
        else data3.MRTCM3='0';
        if(ntcrn>0) data3.MRTCN3=(nmrtn/ntcrn).toFixed(0);
        else data3.MRTCN3='0';
        if(nmrta.length>1){
            var sdcr=standardDeviation(nmrta);
            data3.SDCR3=sdcr.toFixed(0);
        }
        else data3.SDCR3=0;
        if(nmrtma.length>1){
            var sdcm=standardDeviation(nmrtma);
            data3.SDCM3=sdcm.toFixed(0);
        }
        else data3.SDCM3=0;
        if(nmrtna.length>1){
            var sdcn=standardDeviation(nmrtna);
            data3.SDCN3=sdcn.toFixed(0);
        }
        else data3.SDCN3=0;
    
        if(nmrta.length>1){
            var mdrtcr=median(nmrta);
            data3.MdRTCR3=mdrtcr.toFixed(0);
        }
        else data3.MdRTCR3=0;
        if(nmrtma.length>1){
            var mdrtcm=median(nmrtma);
            data3.MdRTCM3=mdrtcm.toFixed(0);
        }
        else data3.MdRTCM3=0;
        if(nmrtna.length>1){
            var mdrtcn=median(nmrtna);
            data3.MdRTCN3=mdrtcn.toFixed(0);
        }
        else data3.MdRTCN3=0;
        if(nmrta.length>0){
            var mnrtcr=getmin(nmrta);
            data3.MnRTCR3=mnrtcr;
            var mxrtcr=getmax(nmrta);
            data3.MxRTCR3=mxrtcr;
            var mf10cra=top10pc(nmrta);
            var mf10cr=average(mf10cra);
            data3.MF10CR3=mf10cr;
            var ms10cra=bottom10pc(nmrta);
            var ms10cr=average(ms10cra);
            data3.MS10CR3=ms10cr;
        }
        else {
            data3.MnRTCR3='0';
            data3.MxRTCR3='0';
            data3.MF10CR3='0';
            data3.MS10CR3='0';
        }
        if(mf10cra!=undefined && mf10cra.length > 1){
            var sdf10cr=standardDeviation(mf10cra);
            data3.SDF10CR3=sdf10cr.toFixed(0);
        }
        else data3.SDF10CR3='0';
        if(ms10cra!=undefined && ms10cra.length > 1){
            var sds10cr=standardDeviation(ms10cra);
            data3.SDS10CR3=sds10cr.toFixed(0);
        }
        else data3.SDS10CR3='0';
        data3.NTCM3=ntcrm;
        data3.NTCN3=ntcrn;
        data3.NTFM3=ntfrm;
        data3.NTFN3=ntfrn;
        data3.NTWR3=ntwr;

        return data3;
    }
    //-------------------------------------
    var combine=function(dest, src) { 
        for(var key in src) { 
            dest[key] = src[key]; 
        } 
        return dest; 
    } 
    //-------------------------------------
    var final_data={};
    var final2_data={};
    //-------------------------------------
    var data_process=function(data){
        trial_count++;
    //alert(JSON.stringify(data));
    if(trial_count==1) {
        final_data=calc1(data);
    }
    if(trial_count==2) {
        final2_data=calc2(data);
        final_data=combine(final_data,final2_data);
    }
    if(trial_count==3){
        final2_data=calc3(data);
        final_data=combine(final_data,final2_data);
        data.Participant=$('#Participant__ID').val();
        data.Participant_uid=$("input[name='Participant_uid']").val();
        $vm.request({cmd:"insert",table:m.Table,data:final_data},function(res){
            if(res.status=="np"){
                alert("No permission to insert a new record in to the database.");
                if(m.input.goback!=undefined){
                    $vm.refresh=1;
                    window.history.go(-1);       //from grid
                }
                return;
            }
            else { 
                counter=0;
                $('#main_canvas__ID').hide();
                $('#dot_div__ID').show();
                var i = setInterval(function(){
                    counter++;
                    if(counter >= delay_timer_start) {
                        $('#dot_div__ID').hide();
                        clearInterval(i);
                        $vm.refresh=1;
                        window.history.go(-1);
                    }
                }, 1000);
            }
        });
    }
    else {
        counter=0;
        $('#main_canvas__ID').hide();
        $('#dot_div__ID').show();
        var i = setInterval(function(){
            counter++;
            if(counter >= delay_timer_start) {
                $('#dot_div__ID').hide();
                $('#counter_div__ID').show();
                $('#counter__ID').html(delay_timer-counter)
            }
            if(counter === delay_timer) {
                $('.start-button').click();
                $('#counter_div__ID').hide();
                clearInterval(i);
            }
        }, 1000);
    }
}
//------------------------------------
var third_party=function(containerID,callback)
{
    $('.start-button').hide();
    ClearIntervals();
    $('#'+containerID).css('background-color','#000000');
    var canvas = document.getElementById('main_canvas__ID');
    var ctx = canvas.getContext('2d');
    var scale = 4;
    var angle = 60;
    var radius1 = 10;
    var radius2 = 35;
    var numpretrials = nback;
    var cuestarttostimulusstarttime = 1500;
    var interstimulustime = 4500;
    var cuevisibletime = 200;
    var stimulusvisibletime = 250;
    var practice = false;
    var instructions = [
                        "#instructions_1__ID",
                        ];
    var letters = ['B', 'C', 'F', 'H', 'L', 'M', 'P', 'T', 'W', 'X', 'Y', 'Z'];
    var first = null;
    var trials = [];
    var responded = true;
    var current = 0;
    var startTime;
    var width = canvas.width;
    var height = canvas.height;
    var midX = width / 2;
    var midY = height / 2;
    var separation = 140;
    var finished = false;
    function PointOnCircle(a, r)
    {
        var rad = a / 180 * Math.PI;
        var ret = { x : -Math.cos(rad) * r * scale + midX, y : -Math.sin(rad) * r * scale + midY };
        return ret;
    }
    var positions = [
                        PointOnCircle(-angle, radius1),
                        PointOnCircle(0, radius1),
                        PointOnCircle(angle, radius1),
                        PointOnCircle(180 - angle, radius1),
                        PointOnCircle(180, radius1),
                        PointOnCircle(180 + angle, radius1),
                        PointOnCircle(-angle, radius2),
                        PointOnCircle(0, radius2),
                        PointOnCircle(angle, radius2),
                        PointOnCircle(180 - angle, radius2),
                        PointOnCircle(180, radius2),
                        PointOnCircle(180 + angle, radius2),
                    ];
    var correct = 0;
    var missed = 0;
    var wrong = 0;
    var results = {
        Time : [],
        Number : [],
        KeyResponse : [],
    };
    var response = {};
    instructions.forEach(function(i) { $(i).hide(); });
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '32px arial';
    function Instructions()
    {
        $('#main_canvas__ID').hide();
        //$('.start-button').show();
        $(instructions[current]).show();
    }
    function RandomExcept(maxExcl, exception)
    {
        var ret = 0;
        do
        {
            ret = Math.floor(Math.random() * maxExcl);
        } while (ret == exception);
        return ret;
    }
    function ReferenceTrial(cur)
    {
        if (nback == 1)
            return Math.max(0, cur - 1);
        else if (nback == 2)
            return Math.max(0, cur - 2);
        else if (nback == 3)
            return Math.max(0, cur - 3);
    }
    function Start()
    {
        finished=false;
        results = {
            Time : [],
            Number : [],
            KeyResponse : [],
        };
        var start_time= new Date();
        var hh = start_time.getHours()
        var mn = start_time.getMinutes()
        var ss = start_time.getSeconds()
        if(mn<10){mn='0'+mn;}
        if(hh<10){hh='0'+hh;}
        if(ss<10){ss='0'+ss;}
        response.Start_Time=hh+':'+mn+':'+ss;
        $('.start-button').hide();
        $('#participant_div__ID').css("visibility", "hidden");
        $(instructions[current]).hide();
        $('#main_canvas__ID').show();
        marks = [];
        trials=[];
        Clear();
        for (var i=0; i<numpretrials; i++)
        {
            var t = {
                        l: Math.floor(Math.random() * letters.length),
                        p: Math.floor(Math.random() * positions.length),
                        pre: true,
                    }
            trials.push(t);
        }

        var p1=0,p2=0,pv;
        for (var i=0; i<numtrials; i++)
        {
            var ref = ReferenceTrial(trials.length);
            if(p1==parseInt((numtrials-3)/2) || p2==parseInt((numtrials-3)/2) ) {
                if(p2==parseInt((numtrials-3)/2)) {pv=trials[ref].p;}
                else pv=RandomExcept(positions.length, trials[ref].p);
            }
            else { if(Math.random() < 0.5 ){
                        pv=trials[ref].p;
                        if(i>2) p1++;
                    }
                    else{
                        pv=RandomExcept(positions.length, trials[ref].p);
                        if(i>2) p2++;
                    }
            }
            var t = {
                        id: i+1,
                        l: Math.floor(Math.random() * letters.length),
                        p: pv,
                        pre: false,
                    }
            trials.push(t);
        }
        
        for (var i=0; i<trials.length; i++)
        {
            var t = trials[i];
            console.log(i + ' ' + t.l + ' ' + t.p) ;
        }
        current = -1;
        Next();
        intervals.push(setInterval(Next, interstimulustime));
    }
    function Next()
    {
        if (!responded)
        {
            SaveResults('O');
        }
        current++;

        if (current >= trials.length)
        {
            ClearIntervals();
            Finish();
        }
        else
        {
            Clear();
            Cue();
            setTimeout(Clear, cuevisibletime);
            setTimeout(Stimulus, cuestarttostimulusstarttime);
            setTimeout(Clear, cuestarttostimulusstarttime+stimulusvisibletime);
        }
    }

    function Stimulus()
    {
        ctx.fillStyle = 'white';
        var t = trials[current];
        var l = letters[t.l];
        var pt = positions[t.p];
        ctx.fillText(l, pt.x, pt.y);
        responded = false;
        startTime = Date.now();
        /*for (var i=0; i<positions.length; i++)
        {
            var l = letters[Math.floor(Math.random() * letters.length)];
            var pt = positions[i];
            ctx.fillText(l, pt.x, pt.y);
        }*/
    }
    function Cue()
    {
        ctx.beginPath();
        ctx.fillStyle = '#00ff00';
        ctx.arc(midX, midY, 20, 0, 2 * Math.PI);
        ctx.fill();
    }
    function Clear()
    {
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(midX, midY, 5, 0, 2 * Math.PI);
        ctx.fill();
        //ctx.fillText(correct + ' ' + missed + ' ' + wrong, 100, 550);
    }
    function SaveResults(resp)
    {
        responded = true;
        var endTime = Date.now();
        var t = trials[current];
        if (t.pre)
        {
            results.Number.push('PRE');
            results.Time.push(0);
            results.KeyResponse.push('-');
        }
        else
        {
            results.Number.push(t.id);
            results.Time.push(endTime - startTime);
            results.KeyResponse.push(resp);
        }
        console.log(current + ' ' + resp) ;
    }
    var Finish = function()
    {
        if ($("#main_canvas__ID").is(':hidden')) //hacky and ugly way :(
            return;
        if (!finished)
        {
            finished = true;
            
            response.NNO = results.Number.join(",");
            response.NRT = results.Time.join(",");
            response.NAC = results.KeyResponse.join(",");
            callback(response);
        }
    }
    $(document).keypress(function(e){
        if ($("#main_canvas__ID").is(':hidden')) //hacky and ugly way :(
            return;
        if (!responded)
        {
            var t = trials[current];
            var rt = trials[ReferenceTrial(current)];
            var key = e.key.toLowerCase();
            console.log(key)
            if (key == 'm')
            {
                if (rt.p == t.p)
                    SaveResults('CM');
                else
                    SaveResults('FN');
            }
            if (key == 'n')
            {
                if (rt.p == t.p)
                    SaveResults('FM');
                else
                    SaveResults('CN');
            }
            if (key != 'n' && key != 'm') SaveResults('W');
        }
        e.preventDefault();
    });
    Instructions();
    $('.start-button').on('click',function(){
        Start();
    });
    //------------------------------------
}
//-------------------------------------
function standardDeviation(values){
    var avg = average(values); 
    var squareDiffs = values.map(function(value){
        var diff = value - avg;
        var sqrDiff = diff * diff;
        return sqrDiff;
    });
    var avgSquareDiff = average(squareDiffs)*values.length/(values.length-1);
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}
//-------------------------------------
function median(values){
    if(values.length ===0) return 0;
    values.sort(function(a,b){
        return a-b;
    });
    var half = Math.floor(values.length / 2);
    if (values.length % 2){
        return values[half]/1.0;
    }
    return ((values[half - 1])/1.0 + (values[half])/1.0) / 2.0;
}            
//-------------------------------------
function average(data){
    var sum = data.reduce(function(sum, value){
        return sum + Math.abs(value);
    }, 0);
    var avg = sum / data.length;
    return avg;
}
//-------------------------------------
function getmin(values){
    values.sort(function(a, b){return b - a})
    return values[values.length-1];
}
//-------------------------------------
function getmax(values){
    values.sort(function(a, b){return b - a})
    return values[0];
}
//-------------------------------------
function top10pc(values){
    if(values.length ===0) return 0;
    values.sort(function(a,b){
        return a-b;
    });
    var tenpc = Math.round(values.length / 10);
    return values.slice(0,tenpc);
}            
//-------------------------------------
function bottom10pc(values){
    if(values.length ===0) return 0;
    values.sort(function(a,b){
        return a-b;
    });
    var tenpc = Math.round(values.length / 10);
    return values.slice(values.length-tenpc-1,values.length);
}            
//------------------------------------
