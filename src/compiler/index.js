import { generate } from "./generate";
import { parserHTML } from "./parser";


export function compileToFunction(template) {

    // 1.将模板变成ast语法树
    let ast = parserHTML(template);


    // 2.代码生成
    let code = generate(ast);  
    let render = new Function(`with(this){return ${code}}`);

    return render;
}

