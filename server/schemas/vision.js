export default {
    name: 'vision',
    title: 'Message',
    type: 'document',
    fields: [
    {
        name: 'head',
        title: 'Header',
        type: 'string',
      },
    {
        name: 'message',
        title: 'Message',
        type: 'string',
      },
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };