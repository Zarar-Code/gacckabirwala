export default{
    name:'news',
    title:'News',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'detail',
            title:'Detail',
            type:'string'
        },
        {
          name:'nimage',
          title:'News Images',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
        {
            name:'newsImages',
            title:'News Images',
            type:'array',
            of:[{ type:'newsImage'}]
        },
    ]
  }