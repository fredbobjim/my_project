{"version":3,"sources":["info-helper.js"],"names":["BX","namespace","UI","InfoHelper","frameUrlTemplate","frameNode","popupLoader","frameUrl","inited","init","params","this","trialableFeatureList","bind","window","proxy","event","origin","indexOf","data","action","close","location","href","open","reloadParent","url","top","SidePanel","Instance","code","option","__showExternal","licenseAgreed","ajaxRestPath","callback","result","slider","getTopSlider","contentWindow","postMessage","ajax","dataType","method","sessid","bitrix_sessid","onsuccess","onfailure","error_type","error","runAction","then","response","featureId","width","sliderId","getSliderId","frame","create","attrs","className","src","contentCallback","Promise","resolve","reject","replace","id","children","getLoader","loader","cacheable","rightBoundary","events","onLoad","showFrame","show","isOpen","Type","isPlainObject","isArray","Uri","addParam","join","getFrame","getContent","onCloseComplete","onClose","getSlider","content","setTimeout","classList","add","Loader","target","size","container","sliderTop","getPreviousSlider","reload","isInited"],"mappings":"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","file":"info-helper.map.js"}