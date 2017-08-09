angularParse([
    "$app='MyApp'",
    "$controller='My Controller'&app='MyApp'",
    "$model='My Model'&app='MyApp'",
    "$view='My View'&app='MyApp'"
])

/**
 * Created by anton on 15-Oct-16.
 */

        let models = value.get("models").sort();
        let views = value.get("views").sort();

        sortedObj[key] = {
        "controllers": controllers,
        "models": models,
        "views": views
    };
    });

        let sortedData = new Map(Array.from(data.entries()).sort(function (firstEntry, secondEntry) {
                    let firstEntryControllersCount = firstEntry[1].get("controllers").length;
                    let secondEntryControllersCount = secondEntry[1].get("controllers").length;

                    let result = secondEntryControllersCount - firstEntryControllersCount;

                    if(result == 0){
                                let firstEntryModelsCount = firstEntry[1].get("models").length;

                                result = firstEntryModelsCount - secondEntryModelsCount;
                            }

                    return result;
                }));
        console.log(JSON.stringify(sortedObj));

    }
function angularParse(input){
    let data = new Map();
    let cacheData = new Map();

    for (let i = 0; i < input.length; i++) {
        let modulePattern = /\$app='([^\']+)'/g;
        let controllerPattern = /\$controller='([^']+)'\&app='([^']+)'/g;
        let modelPattern = /\$model='([^']+)'&app='([^']+)'/g;
        let viewPattern = /\$view='([^']+)'&app='([^']+)'/g;

        let moduleMatch = modulePattern.exec(input[i]);
        let controllerMatch = controllerPattern.exec(input[i]);
        let modelMatch = modelPattern.exec(input[i]);
        let viewMatch = viewPattern.exec(input[i]);



        if(moduleMatch){
            let moduleName = moduleMatch[1];
            if(cacheData.has(moduleName))
                data.set(moduleName, cacheData.get(moduleName));
            else{
                data.set(moduleName, new Map());
                data.get(moduleName).set("controllers", []);
                data.get(moduleName).set("models", []);
                data.get(moduleName).set("views", []);
            }
        }
        else if(controllerMatch){
            let controllerName = controllerMatch[1];
            let moduleName = controllerMatch[2];
            if(!data.has(moduleName)){
                if(!cacheData.has(moduleName))cacheData.set(moduleName, new Map());
                else{
                    if(cacheData.get(moduleName).has("controllers"))cacheData.get(moduleName).get("controllers").push(controllerName);
                    else cacheData.get(moduleName).set("controllers", []);
                }
            }
            else{
                if(data.get(moduleName).has("controllers"))data.get(moduleName).get("controllers").push(controllerName);
                else{
                    data
                }
            }
        }
        else if(modelMatch){
            let modelName = modelMatch[1];
            let moduleName = modelMatch[2];
            if(!data.has(moduleName)){
                if(!cacheData.has(moduleName))cacheData.set(moduleName, new Map());
                else{
                    if(cacheData.get(moduleName).has("models"))cacheData.get(moduleName).get("models").push(modelName);
                    else cacheData.get(moduleName).set("models", []);
                }
            }
        }
        else if(viewMatch){
            let viewName = viewMatch[1];
            let moduleName = viewMatch[2];
            if(!data.has(moduleName)){
                if(!cacheData.has(moduleName))cacheData.set(moduleName, new Map());
                else{
                    if(cacheData.get(moduleName).has("views"))cacheData.get(moduleName).get("views").push(viewName);
                    else cacheData.get(moduleName).set("views", []);
                }
            }
        }

    }

    let sortedObj = {};
    sortedData.forEach(function(value, key){
        let controllers = value.get("controllers").sort();
        let secondEntryModelsCount = secondEntry[1].get("models").length;
