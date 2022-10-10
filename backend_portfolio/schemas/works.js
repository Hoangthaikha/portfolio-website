export default {
    name: 'works',
    title: 'Công việc',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tiêu đề',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Mô tả',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Dự án đã tham gia',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Đường dẫn nguồn dự án',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'Hình ảnh',
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
      },
     
    ],
  };