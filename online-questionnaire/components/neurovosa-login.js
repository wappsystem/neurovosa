(function(){
    var modules={
        "home":                         {"url":"$A/online-questionnaire/components/online-questionnaire-login.html","Table":"neurovosa-participant",
                                                questionnaire_panel:"online-questionnaire-panel"
                                        }   ,
        "online-questionnaire-panel":   {url:"$A/online-questionnaire/components/online-questionnaire-panel.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
