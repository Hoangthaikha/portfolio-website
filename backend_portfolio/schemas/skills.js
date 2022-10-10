export default {
    name: 'skills',
    title: 'Kỹ năng',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Tên kĩ năng',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'Hình ảnh',
            type: 'image',
            options:{
                hotspot: true,
            }
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ]

}