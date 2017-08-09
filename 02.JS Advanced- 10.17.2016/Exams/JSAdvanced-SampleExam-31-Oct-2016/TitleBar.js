/**
 * Created by anton on 03-Nov-16.
 */
class TitleBar{
    constructor(newTitle){
        this.title = newTitle;
        this.menu = [];
        this.menuHTML = {};
    }

    addLink(href, name){
        this.menu.push($(`<a class="menu-link" href="${href}">${name}</a>`));
    }

    appendTo(selector){
        $(selector).append(this.generate());

        $('header').find('.button').click(this.toggle.bind(this));
    }

    generate(){
        let html = $(`<header class="header">
         <div class="header-row">
           <a class="button">&#9776;</a>
           <span class="title">${this.title}</span>
         </div>
         <div class="drawer">
           <nav class="menu">
           </nav>
         </div>
       </header>
       `);

        this.menuHTML =  html.find('.menu');
        for(let link of this.menu){
            this.menuHTML.append(link);
        }

        return html;
    }

    toggle(){
        let menu = this.menuHTML.parent();
        if (menu.css('display') == 'none'){
            menu.css('display','block');
        }
        else{
            menu.css('display','none');
        }

    }
}