export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'ProjectLink',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'CodeLink',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Gắn thẻ',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Thẻ',
           type:'string'
         }
       ]
      }
    ]
  }