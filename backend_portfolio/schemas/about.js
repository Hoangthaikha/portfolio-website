export default {
    name: 'about',
    title: 'Giới thiệu',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Họ tên',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Mô tả',
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
    ]

}