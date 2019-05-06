(function(){
    var modules={
        "home":                         {"url":"$A/modules/mdb/o/online-questionnaire-login.html","Table":"spardac-participant",
                                                questionnaire_panel:"online-questionnaire-panel"
                                        }   ,
        "online-questionnaire-panel":   {url:"$A/modules/mdb/o/online-questionnaire-panel.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
