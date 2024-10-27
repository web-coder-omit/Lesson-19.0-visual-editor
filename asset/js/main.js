;(function(){
tinyMCE.PluginManager.add('tmcd_plugin',function(editor,url){
    editor.addButton('tmcd_button_one',{
        // text:'B1',
        icon:'insertdatetime',
        onclick:function(){
            editor.insertContent("hellow World");
        }
    });
    editor.addButton('tmcd_button_two',{
         type:'listbox',
        text:'Select something',
        values:[
            {text:'Apple',value:'You have selected <b>Apple</b>'},
            {text:'Orange',value:'You have selected <b>orange</b>'},
            {text:'Banana',value:'You have selected <b>Banana</b>'}
        ],
        onselect:function(){
            editor.insertContent(this.value())
        },
        onPostRender:function(){
            this.value('You have selected <b>orange</b>');
        }
       
    });
    editor.addButton('dp_manue',{
        type:'menubutton',
       text:'Choices',
       menu:[
           {
            text:'Option A',
            onclick:function(){
                console.log('Option A -1');
            }
           },
           {
            text:'Option A',
            onclick:function(){
                console.log('Option A -1');
            }
           }
       ],
       onselect:function(){
           editor.insertContent(this.value())
       },
       onPostRender:function(){
           this.value('You have selected <b>orange</b>');
       }
      
   });



   editor.addButton('Form_btn',{
   text:'Form',

   onclick:function(){
    editor.windowManager.open({
        title:"user input form",
        body:[
            {
                type:'textbox',
                name:'userintput1',
                label:'Some text',
                value:'Hello'
            },
            {
                type:'colorpicker',
                name:'userintput2',
                label:'color',
                value:'#222222'
            },
            {
                type:'listbox',
                name:'userintput3',
                label:'options',
                values:[
                    {text:'Option 1', value:1},
                    {text:'Option 2', value:2},
                    {text:'Option 3', value:3}
                ]
            }
        ],
        // onsubmit:function(e){

        // }
    });
   }

  
});


})

})();


// ;(function() {
//     tinyMCE.PluginManager.add('tmcd_plugin', function(editor, url) {
//         editor.addButton('tmcd_button_one', {
//             icon: 'insertdatetime',
//             onclick: function() {
//                 editor.insertContent("Hello World");
//             }
//         });

//         editor.addButton('tmcd_button_two', {
//             type: 'listbox',
//             text: 'Select something',
//             values: [
//                 { text: 'Apple', value: 'You have selected <b>Apple</b>' },
//                 { text: 'Orange', value: 'You have selected <b>Orange</b>' },
//                 { text: 'Banana', value: 'You have selected <b>Banana</b>' }
//             ],
//             onSelect: function() {
//                 editor.insertContent(this.value());
//             },
//             onPostRender: function() {
//                 this.value('You have selected <b>Orange</b>');
//             }
//         });

//         editor.addButton('dp_manue', {
//             type: 'menubutton',
//             text: 'Choices',
//             menu: [
//                 { text: 'Option A', onclick: function() { console.log('Option A -1'); } },
//                 { text: 'Option B', onclick: function() { console.log('Option B -1'); } }
//             ]
//         });

//         editor.addButton('Form_btn', {
//             text: 'Form',
//             onclick: function() {
//                 editor.windowManager.open({
//                     title: "User Input Form",
//                     body: [
//                         {
//                             type: 'textbox',
//                             name: 'userinput1',
//                             label: 'Some text',
//                             value: 'Hello'
//                         },
//                         {
//                             type: 'colorpicker',
//                             name: 'userinput2',
//                             label: 'Color',
//                             value: '#222222'
//                         }
//                     ]
//                 });
//             }
//         });
//     });
// })();
