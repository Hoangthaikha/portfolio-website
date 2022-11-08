export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Họ tên',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Nơi làm việc',
            type: 'string'
        },
        {
            name:'imgUrl',
            title:'imgurl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'feedback',
            title: 'Phản hồi',
            type: 'string'
        },
    ]

}