module.exports = {
    HTML:function(title, list, body, control){
        return ` 
        <!doctype html>
       <html>
       <head>
       <title>${title}</title>
       <meta charset="utf-8">
       </head>
       <body>
       <div style="width: 50%; margin: auto; background: #FFFF99; min-height: 400px;">
       <div style="min-height: 400px; position: relative;">
        <div style="height: 30%">${list}</div>
        <div style="height: 60%">${body}</div>
        <div style="display: flex; height: 10%; position: absolute; bottom: 0;"}>${control}</div>
       </div>
       </div>
       </body>
       </html>  
        `;
       },list:function(filelist){
        var list = '<ul>';          
        var i = 0;
        while(i < filelist.length){
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i = i + 1;
        }
        list = list+'</ul>';
        return list;
      }
    }
    